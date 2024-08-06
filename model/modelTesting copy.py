import os
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input
from PIL import Image
import numpy as np
import tensorflow as tf
import cv2

#get list of classes
categories = os.listdir('/Users/mmstudent/Desktop/Bird App/images/dataset_for_model/train')
categories.sort()
print(categories)

#load the model
path_for_the_saved_model = '/Users/mmstudent/Desktop/Bird App/images/dataset_for_model/fishV2.h5'
model = tf.keras.models.load_model(path_for_the_saved_model)

print(model.summary())

def classify_image(imageFile):
    x =[]

    img = Image.open(imageFile)
    img.load()
    img = img.resize((224,224),Image.LANCZOS)

    x = image.img_to_array(img)
    x = np.expand_dims(x,axis=0)
    x = preprocess_input(x)
    print(x.shape)

    pred = model.predict(x)
    categoryValue = np.argmax(pred,axis=1)
    confidence_score = np.max(pred)
    print(categoryValue)
    print(confidence_score)

    categoryValue = categoryValue[0]
    print(categoryValue)

    result = categories[categoryValue]

    return result, confidence_score

imagePath = '/Users/mmstudent/Desktop/Bird App/images/testData/tom.jpg'
resultText, confidenceScore = classify_image(imagePath)
print(resultText)

outlier_threshold = 0.8

if confidenceScore < outlier_threshold:
    print("Warning: The input image might be an outlier.")

img = cv2.imread(imagePath)
img = cv2.putText(img,resultText, (50,50), cv2.FONT_HERSHEY_SIMPLEX,1,(0,0,0),2)
cv2.imshow("img",img)
cv2.waitKey(0)
cv2.destroyAllWindows()