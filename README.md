# Trininetra: A Multi-Modal Real-time Object Detection and Recognition System

This project, Trininetra, is a real-time object detection and recognition system that integrates multiple modalities, including distance estimation, facial recognition, and image description using Gemini.  It utilizes YOLOv8 for object detection, a Sort algorithm for tracking, and Google's Gemini API for image description.  The system provides audio alerts for proximity to detected objects and identifies known faces.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation Guide](#installation-guide)
- [Usage Examples](#usage-examples)
- [Project Architecture](#project-architecture)
- [License](#license)


## Project Overview

Trininetra aims to provide a comprehensive, real-time object detection and recognition system capable of providing distance estimations, facial recognition, and image descriptions.  It's designed for ease of use and extensibility. Key features include:

* **Real-time Object Detection:** Uses YOLOv8 for fast and accurate object detection.
* **Distance Estimation:**  Calculates approximate distance to detected objects.  The accuracy is limited by the camera's perspective and object size.
* **Facial Recognition:** Identifies pre-registered faces using face_recognition library.
* **Image Description:** Leverages Google's Gemini API to generate descriptions of captured images.
* **Audio Alerts:** Provides voice alerts for nearby objects (configurable threshold).
* **Multiple Modes:**  Allows switching between distance estimation, facial detection, and image capture modes via voice commands.

The project solves the problem of needing a single system to perform multiple visual tasks in real-time, providing both visual and auditory feedback.  Use cases include security monitoring, assistive technologies, and interactive applications.


## Prerequisites

* **Python 3.7+:** The core code is written in Python.
* **Libraries:**
    * `numpy`
    * `opencv-python`
    * `ultralytics`
    * `pyttsx3`
    * `face_recognition`
    * `speech_recognition`
    * `google-generativeai`
    * `Pillow` (PIL)
* **YOLOv8 Weights:** The `yolov8n.pt` weight file (included in the `src/yolo-Weights` directory, or download from Ultralytics).
* **Coco Labels:** `coco.names` file (included in `src/Assets`).
* **Facial Images:**  `NikunjFace.png` and `BhuviFace.jpg` (located in `src/Assets`).  Replace these with your own images for facial recognition.
* **Google Cloud API Key:**  Set the `GOOGLE_API_KEY` environment variable (see [Configuration](#configuration)).

## Installation Guide

1. **Clone the repository:** `git clone https://github.com/harshkasat/Trininetra.git`
2. **Install dependencies:**  `pip install -r requirements.txt`  (Create a `requirements.txt` file listing the libraries above if one is not already present.)
3. **Download YOLOv8 weights (if not included):** Download the `yolov8n.pt` weight file from the Ultralytics website and place it in `src/yolo-Weights`.
4. **Configure Google Cloud API Key:** (See [Configuration](#configuration))


## Usage Examples

The main script is `main.py`. Run it using `python main.py`.

The system operates in different modes controlled by voice commands:

* **"distance estimation"**: Activates distance estimation mode.  Objects detected are displayed with an estimated distance in inches.  An alert is triggered if an object is closer than a certain distance.
* **"facial detection"**:  Identifies known faces in the video stream.
* **"object detection"**: Displays detected objects without distance estimation or facial recognition.
* **"capture image"**: Captures an image and uses the Gemini API to generate a description of the image, which is then spoken aloud.
* **"exit" or "stop"**: Terminates the program.

**Code Snippet (Distance Estimation):**

The `DistEstimate.est()` function in `DistEst.py` performs object detection and distance estimation:

```python
def est(self, image):
    # ... (Object detection using YOLOv8) ...
    d = ((2 * 3.14 * 180) / (xmax - xmin + (ymax - ymin) * 360)) * 1000 + 6 #Distance calculation (simplified)
    cv2.rectangle(image, (xmin, ymin), (xmax, ymax), color=color, thickness=self.thickness)
    cv2.putText(image, f'Depth: {int(d)}inch', (xmin, ymin + 30), self.font_scale, 2, color, 2)
    # ... (Object tracking and alert generation) ...
    return image
```

**Note:** The distance calculation is a simplified approximation and might not be highly accurate.


## Project Architecture

The project consists of several modules:

* **`DistEst.py`:** Handles distance estimation and object detection.
* **`FacialRec.py`:** Performs facial recognition.
* **`ImageRec.py`:**  Processes images using the Gemini API.
* **`main.py`:** The main script that orchestrates the system, handles user input (voice commands), and manages the different modes.
* **`ObsDesc.py` (appears unused):** Seems to be an alternative implementation for image description, but is not currently used in `main.py`.

The system uses a modular design, allowing for easy extension and modification.


## License

[Specify the license here, e.g., MIT License]


**(Further sections like Contributing Guidelines, Testing, Deployment, Security, etc., would need to be added based on the actual project implementation details.  The provided code snippets give a starting point for those sections.)**
