Write Up


Project's Architecture:



Chosen Technology:

Frontend
Angular, tesseract.js

Backend
Python, Flask, Transformer, Python, Tesseract

Deployment:
Github, HuggingFace

Obstacles:
1. Camera Access in Browser: Enabling camera access within the browser poses a challenge due to security and privacy restrictions. 

2. Capturing High-Quality Images for Driving License: Obtaining clear and high-quality images from a device's webcam, especially for small details on a driver's license, can be challenging. 

3. Text Extraction: Extracting text from captured images with varying quality and lighting conditions is a complex task. .

4. Identifying Details from Extracted Text: Interpreting and identifying relevant details from the extracted text, such as full name, address, and license dates, requires robust parsing logic. 

5. Deployment of Application: Deploying the application while ensuring seamless integration with various web servers and platforms.

6. Suboptimal User Interaction: Holding the license has to be done by one hand and the other hand needs to click on the capture button which feels awkward and non optimal.

Process
Upon granting camera access, the frontend activates the device camera for user interaction. The user is prompted to align their driver's license optimally for a clear image capture. The Capture button initiates image acquisition. For precise control, the user has the option to retake the image by clicking the Capture button again. Once satisfied, the Extract Text option becomes available, offering two options: "Use Backend" and "Use Web." 

In the "Use Backend" scenario, the frontend communicates with a Flask App on the Transformer, triggering the generation and transmission of the extracted response. The processed data is then seamlessly rendered on the frontend for user inspection.

When opting for "Use Web" involves processing the text extraction directly on the client side. This approach leverages the browser's capabilities, eliminating the need for backend communication and facilitating rapid response times. This technical workflow ensures an efficient and user-controlled process for capturing, extracting, and visualizing data from the driver's license. 

Though we haven't reached 100% accuracy yet, it's definitely something we can achieve.
FE:
1. Created angular application using CLI
2. Created angular components for the WebCam process
3. Used video to capture images and canvas to show captured images
4. Used tesseract to extract text
5. Also used API to call to backend services

Backend
1. Created flask application
2. Created API to process images from frontend
3. Used images for converting to text
4. Used question answering models(bert-large-uncased-hole-word-masking-fine tuned-squad)
from transformers to identify State, Name, Address, Height, Gender, Date of Birth, issue Date and expiration Date


Deployed URLS:
FE: https://neerab001.github.io/rematter-view/rematter-view/
BE: https://neerab0011-rematter-backend.hf.space

Demo:


How to run application locally

FE: 
Install required library npm, node
Use ng-serve to run the application

BE:
Install python, tesseract-ocr
Use flask run to run the application
