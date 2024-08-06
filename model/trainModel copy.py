from tensorflow.keras import Model
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D
from tensorflow.keras.optimizers import Adam

trainPath = '/Users/mmstudent/Desktop/Bird App/images/dataset_for_model/train'
validation_path= '/Users/mmstudent/Desktop/Bird App/images/dataset_for_model/validate'

trainGenerator =ImageDataGenerator(preprocessing_function=preprocess_input).flow_from_directory(trainPath,target_size=(224,224),batch_size=30)
validGenerator =ImageDataGenerator(preprocessing_function=preprocess_input).flow_from_directory(validation_path,target_size=(224,224),batch_size=30)

#Building the model
baseModel= MobileNetV2(weights='imagenet',include_top = False) 

x = baseModel.output
x = GlobalAveragePooling2D()(x)
x = Dense(512, activation = 'relu')(x)
x = Dense(256, activation = 'relu')(x)
x = Dense(128, activation = 'relu')(x)

predict_layer = Dense(9,activation= 'softmax')(x)
model = Model(inputs=baseModel.input, outputs=predict_layer)

print(model.summary())


#Freeze the model
for layer in model.layers[:-5] :
    layer.trainable = False

epochs = 5
optimizer = Adam(learning_rate =0.0001)

model.compile(loss="categorical_crossentropy", optimizer=optimizer, metrics=['accuracy'])
model.fit(trainGenerator,validation_data=validGenerator,epochs=epochs)

path_for_save_model = '/Users/mmstudent/Desktop/Bird App/images/dataset_for_model/fishV2.h5'
model.save(path_for_save_model)