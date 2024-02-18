import os
from dotenv import load_dotenv
import google.generativeai as genai
import PIL.Image
import pyttsx3
import cv2

engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

load_dotenv()

GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)


class Gemini:
    def __init__(self) -> None:
        self.gemini_pro = genai.GenerativeModel('models/gemini-pro-vision')
    
    def gemini_rec(self,**kwargs):

        img = kwargs.get('img')
        cv2.imwrite('captured_image.jpg', img)
        self.img = PIL.Image.open('captured_image.jpg')
        response = self.gemini_pro.generate_content(["Tell me about the image", self.img])
        speak(response.text)

