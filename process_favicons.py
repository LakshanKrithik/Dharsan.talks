import os
from PIL import Image

def make_transparent(image_path):
    print(f"Processing {image_path}")
    img = Image.open(image_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    # Using a threshold for "white"
    threshold = 240
    for item in datas:
        # Check if the pixel is close to white (R, G, B > threshold)
        # We should be careful not to make the teal circle transparent if it's light, but teal is not white.
        # But wait, anti-aliasing could have light gray. 
        # A simple replacement of white background with transparent:
        # Since it's a favicon, let's replace anything that is very close to white with transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Change alpha to 0 for these pixels
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(image_path)
    print(f"Saved {image_path}")

public_dir = r"c:\Users\laksh\OneDrive\Desktop\dharsan.talks\public"
files_to_process = [
    "android-chrome-192x192.png",
    "android-chrome-512x512.png",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "favicon-32x32.png",
]

for filename in files_to_process:
    path = os.path.join(public_dir, filename)
    if os.path.exists(path):
        make_transparent(path)
        
# For favicon.ico, we can recreate it from 32x32
favicon_32_path = os.path.join(public_dir, "favicon-32x32.png")
favicon_ico_path = os.path.join(public_dir, "favicon.ico")

if os.path.exists(favicon_32_path):
    img = Image.open(favicon_32_path)
    img.save(favicon_ico_path, format='ICO')
    print("Recreated favicon.ico")
