import os
import random
import shutil

splitsize = .85
categories  =[]

source_folder = '/Users/mmstudent/Desktop/Bird App/images/smallerDataCopy'
folders = os.listdir(source_folder)
print(folders)
for subfolder in folders:
    if os.path.isdir(source_folder+"/"+subfolder):
        categories.append(subfolder)
categories.sort()
print(categories)

target_folder = '/Users/mmstudent/Desktop/Bird App/images/dataset_for_model'
existDataSetPath = os.path.exists(target_folder)
if existDataSetPath ==False:
    os.mkdir(target_folder)

def split_data(SOURCE,TRAINING, VALIDATION,SPLIT_SIZE):
    files =[]

    for filename in os.listdir(SOURCE):
        file=SOURCE+filename
        print(file)
        if os.path.getsize(file)>0:
            files.append(filename)
        else:
            print(filename+" is 0 length")
    print(len(files))

    trainingLength = int(len(files)*SPLIT_SIZE)
    shuffleSet = random.sample(files,len(files))
    trainingSet = shuffleSet[0:trainingLength]
    validSet =shuffleSet[trainingLength:]

    for filename in trainingSet :
        thisFile = SOURCE +filename
        destination = TRAINING + filename
        shutil.copyfile(thisFile,destination)

    for filename in validSet :
        thisFile = SOURCE +filename
        destination = VALIDATION + filename
        shutil.copyfile(thisFile,destination)
    
trainPath = target_folder + "/train/"
validatePath = target_folder + "/validate/"

existDataSetPath = os.path.exists(trainPath)
if existDataSetPath ==False:
    os.mkdir(trainPath)
    
existDataSetPath = os.path.exists(validatePath)
if existDataSetPath ==False:
    os.mkdir(validatePath)

for category in categories:
    trainDestPath = trainPath + "/" + category
    validateDestPath = validatePath + "/" + category

    print(trainDestPath)

    if os.path.exists(trainDestPath)==False:
        os.mkdir(trainDestPath)
    if os.path.exists(validateDestPath)==False:
        os.mkdir(validateDestPath)

    sourcePath = source_folder + "/" +category + "/"
    trainDestPath = trainDestPath + "/"
    validateDestPath = validateDestPath + "/"

    print("Copy from:"+ sourcePath +"to : "+trainDestPath + "and" + validateDestPath)

    split_data(sourcePath,trainDestPath,validateDestPath,splitsize)