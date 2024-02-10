import speech_recognition as sr
import pyttsx3
from datetime import datetime
engine = pyttsx3.init()

def speak(text):
    """Used to speak whatever text is passed to it"""
    engine.say(text)
    engine.runAndWait()

def take_user_input():
    """Takes user input, recognizes it using Speech Recognition module and converts it into text"""
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print('Listening....')
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print('Recognizing...')
        query = r.recognize_google(audio, language='en-in')
        return query.lower()
    except Exception:
        speak('Sorry, I could not understand. Could you please say that again?')
        return 'None'

# Function to trigger Siri
def trigger_siri():
    while True:
        query = take_user_input()
        if 'siri' in query:
            speak("Hi there! How can I help you?")
            return  # Exit trigger_siri function

# Main loop to listen for the trigger word "Siri"
while True:
    trigger_siri()
    # Process commands until "exit" or "stop" is said
    while True:
        query = take_user_input()
        if 'exit' in query or 'stop' in query:
            hour = datetime.now().hour
            if hour >= 21 or hour < 6:
                speak("Good night! Take care!")
            else:
                speak('Have a good day!')
            break  # Exit processing loop
        else:
            # Process the query or command here
            speak("You said: " + query)
    # Return to listening for trigger word "Siri"
