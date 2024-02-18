import random
import numpy as np
import cv2
import math
from ultralytics import YOLO
from src.sort import Sort
import pyttsx3
import threading
import time


class DistEstimate:

    def __init__(self) -> None:
        self.model = YOLO("src/yolo-Weights/yolov8n.pt")
        self.cap = cv2.VideoCapture(0)
        self.cap.set(3, 640)
        self.cap.set(4, 480)
        self.labels = open("src/Assets/coco.names").read().strip().split("\n")
        self.tracker = Sort(max_age=20, min_hits=2, iou_threshold=0.3)
        self.colors = np.random.randint(0, 255, size=(len(self.labels), 3), dtype="uint8")
        self.result_id = []
        self.detection_threshold = 0.7
        self.CONFIDENCE = 0.5
        self.font_scale = 1
        self.thickness = 1
        self.engine = pyttsx3.init()
    

    def get_alert(self, *args, **kwargs):
        class_id = kwargs.get("class_id")
        self.engine.say(f"Alert {self.labels[class_id]} near you")
        self.engine.runAndWait()


    def est(self, image):
        idx = None
        image = cv2.resize(image, (640, 480))
        height, width, channels = image.shape
        results = self.model(image)
        boxes = []
        new_detection = np.empty((0, 5))
        for result in results:
            for data in result.boxes.data.tolist():
                xmin, ymin, xmax, ymax, confidence, class_id = data
                if confidence > self.detection_threshold:

                    xmin = int(xmin)
                    ymin = int(ymin)
                    xmax = int(xmax)
                    ymax = int(ymax)

                    class_id = int(class_id)
                    color = [int(c) for c in self.colors[class_id]]

                    d = ((2 * 3.14 * 180) / (xmax-xmin + (ymax-ymin) * 360)) * 1000 + 6

                    cv2.rectangle(image, (xmin, ymin), (xmax, ymax), color=color, thickness=self.thickness)

                    cv2.putText(image, f'Depth: {int(d)}inch', (xmin, ymin + 30), self.font_scale, 2, color, 2)
                    currentArr = np.array([xmin, ymin, xmax, ymax, confidence])

                    new_detection = np.vstack((new_detection, currentArr))
                    noice = self.tracker.update(new_detection)
                    if len(noice) > 1:
                        idx = noice[0][4]

                    if d < 13:
                        cv2.putText(image, f' Alert object {self.labels[class_id]} near {math.floor(d)} inch', (16, 28), self.font_scale, 2, (0, 0, 255), 2)
                        if idx not in self.result_id:
                            self.result_id.append(id)
                            dist = threading.Thread(target=self.get_alert, kwargs={"class_id":class_id}
                                            ).start()
                            
        return image