import os
from PIL import Image

def generate_favicons(source_image_path, output_dir):
    try:
        print(f"Loading source image: {source_image_path}")
        img = Image.open(source_image_path)
        img = img.convert("RGBA")
        
        sizes = {
            "favicon-16x16.png": (16, 16),
            "favicon-32x32.png": (32, 32),
            "apple-touch-icon.png": (180, 180),
            "android-chrome-192x192.png": (192, 192),
            "android-chrome-512x512.png": (512, 512)
        }
        
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        for filename, size in sizes.items():
            resized_img = img.resize(size, Image.Resampling.LANCZOS)
            output_path = os.path.join(output_dir, filename)
            resized_img.save(output_path, "PNG")
            print(f"Generated {output_path}")
            
        # Generate favicon.ico
        ico_path = os.path.join(output_dir, "favicon.ico")
        favicon_32 = img.resize((32, 32), Image.Resampling.LANCZOS)
        favicon_32.save(ico_path, format="ICO", sizes=[(32, 32)])
        print(f"Generated {ico_path}")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    src_img = r"c:\Users\laksh\OneDrive\Desktop\dharsan.talks\src\assets\cropped_circle_image (1).png"
    out_dir = r"c:\Users\laksh\OneDrive\Desktop\dharsan.talks\public"
    generate_favicons(src_img, out_dir)
