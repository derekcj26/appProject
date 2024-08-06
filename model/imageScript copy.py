import os
from PIL import Image, ImageOps

def rename_and_augment_images(parent_folder):
    # Traverse through all subfolders
    for subdir, _, files in os.walk(parent_folder):
        if subdir == parent_folder:
            continue
        subfolder_name = os.path.basename(subdir)
        image_files = [f for f in files if f.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif'))]
        
        for idx, image_file in enumerate(image_files, start=1):
            # Formulate new base name for the image
            new_base_name = f"{subfolder_name}_{idx}"
            image_path = os.path.join(subdir, image_file)
            image = Image.open(image_path)
            
            # Rename original image
            new_image_path = os.path.join(subdir, f"{new_base_name}.jpg")
            image.save(new_image_path)
            os.remove(image_path)
            
            # Generate augmented images
            for angle in range(0, 361, 30):  # Change the step if you need more or fewer angles
                rotated_image = image.rotate(angle)
                rotated_image_path = os.path.join(subdir, f"{new_base_name}_rot{angle}.jpg")
                rotated_image.save(rotated_image_path)
                
                mirrored_image = ImageOps.mirror(rotated_image)
                mirrored_image_path = os.path.join(subdir, f"{new_base_name}_rot{angle}_mirrored.jpg")
                mirrored_image.save(mirrored_image_path)
                
            image.close()

# Specify the path to the parent folder containing subfolders with images
parent_folder_path = '/Users/mmstudent/Desktop/Bird App/smallerDataCopy/'
rename_and_augment_images(parent_folder_path)
