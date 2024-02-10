import os
from dotenv import load_dotenv
import google.generativeai as genai
import PIL.Image

load_dotenv()

GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
genai.configure(api_key=GOOGLE_API_KEY)


class Gemini:
    def __init__(self, img:str) -> None:
        self.img = PIL.Image.open(img)
        self.gemini_pro = genai.GenerativeModel('models/gemini-pro-vision')
    
    def gemini_rec(self):
        # image_documents = load_image_urls(self.img_url)
        response = self.gemini_pro.generate_content(self.img)
        return print(response.text)
    

if '__name__' == '__main__':
    run = Gemini(img = "src\Assets\images.jpeg")
    run.gemini_rec()
