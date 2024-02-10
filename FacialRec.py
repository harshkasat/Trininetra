import face_recognition
import cv2
import numpy as np
import threading
import pyttsx3


engine = pyttsx3.init()

class FaceRecognition:

    def __init__(self) -> None:
        self.nikunj_face = face_recognition.load_image_file("src/Assets/NikunjFace.png")
        self.nikunj_face_encoding = face_recognition.face_encodings(self.nikunj_face)[0]

        self.bhuvi_image = face_recognition.load_image_file("src/Assets/BhuviFace.jpg")
        self.bhuvi_face_encoding = face_recognition.face_encodings(self.bhuvi_image)[0]

        self.process_this_frame = True

        self.known_face_encodings = [
            self.bhuvi_face_encoding,
            self.nikunj_face_encoding
        ]

        self.known_face_names = ["Bhuvi","Nikunj"]

        # Initialize some variables
        self.face_locations = []
        self.face_encodings = []

    def facial_recognition_xyz(self, frame):

    # noice = []

        if self.process_this_frame:
            small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)

            rgb_small_frame = cv2.cvtColor(small_frame, code=cv2.COLOR_BGR2RGB)
            
            self.face_locations = face_recognition.face_locations(rgb_small_frame)
            self.face_encodings = face_recognition.face_encodings(rgb_small_frame, self.face_locations)
            
            self.face_names = []

            for face_encoding in self.face_encodings:
                matches = face_recognition.compare_faces(self.known_face_encodings, face_encoding)
                name = "Unknown"


                face_distances = face_recognition.face_distance(self.known_face_encodings, face_encoding)
                best_match_index = np.argmin(face_distances)
                if matches[best_match_index]:
                    name = self.known_face_names[best_match_index]

                self.face_names.append(name)

        self.process_this_frame = not self.process_this_frame

        for (top, right, bottom, left), name in zip(self.face_locations, self.face_names):
            top *= 4
            right *= 4
            bottom *= 4
            left *= 4

            # Draw a box around the face
            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)

            cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, name, (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
            
        return frame
                
