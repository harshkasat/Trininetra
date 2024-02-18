import cv2
import threading
import speech_recognition as sr
import pyttsx3
from datetime import datetime
from DistEst import DistEstimate
from FacialRec import FaceRecognition
from ImageRec import Gemini
dist_est = DistEstimate()
facial_recognition = FaceRecognition()
gemini = Gemini()





# Global variable for mode
mode = "object"  # Default mode
capture = False # capture flag

# Initialize text-to-speech engine
engine = pyttsx3.init()


# Function to perform speech recognition and control mode
def recognize_speech():
    global mode, capture
    r = sr.Recognizer()
    while True:
        with sr.Microphone() as source:
            print('Listening....')
            r.pause_threshold = 0.5
            audio = r.listen(source)

        try:
            print('Recognizing...')
            query = r.recognize_google(audio, language='en-in')
            if 'siri' in query.lower():
                # speak("Hi there! How can I help you?")

                if 'distance estimation' in query.lower():
                    speak("Switched to Distance Estimation")
                    mode = "distance estimation"
                
                elif 'facial detection' in query.lower():
                    speak("Switched to facial detection")
                    mode = "facial detection"
                
                elif 'object detection' in query.lower():
                    speak("Switched to Objection detection")
                    mode = "object"

                elif 'capture image' in query.lower():
                    # speak("Hi there! How can I help you?")
                    mode = "Capture Image"
                    speak("Switched to Capture Image")
                    capture = True
                else:
                    speak("Siri Can't able to hear you please Speak close and clear")
            elif 'exit' in query or 'stop' in query.lower():
                speak("Goodbye!")
                break
            else:
                speak("Please give me command")
        except Exception as e:
            print(e)


# Function for text-to-speech
def speak(text):
    engine.say(text)
    engine.runAndWait()


# Start speech recognition in a separate thread
speech_thread = threading.Thread(target=recognize_speech)
speech_thread.start()

# Start video capturing
cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()

    # Perform facial or object detection based on the mode
    if mode == "distance estimation":
        frame = dist_est.est(image=frame)
    elif mode == "facial detection":
        frame = facial_recognition.facial_recognition_xyz(frame=frame)
    elif mode == 'Capture Image':
        if capture:
            # mode = 'object'
            response = threading.Thread(target=lambda: gemini.gemini_rec(img=frame))
            response.start()

            capture = False
            
        #     speak(response)
    elif mode == "object":
        # frame = detect_objects(frame)
        pass
    cv2.imshow('Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture and close all windows
speech_thread.join()
cap.release()
cv2.destroyAllWindows()
