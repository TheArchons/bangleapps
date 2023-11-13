import os
import json
import subprocess

video_dir = input("video dir: ")

files = [f for f in os.listdir(video_dir)]
files.sort()

images = []

for file in files:
    # convert to bitmap
    subprocess.run(["convert", os.path.join(video_dir, file), "-depth", "1", "gray:temp.raw"])
    # convert to base64
    text = subprocess.run(["base64", "--wrap=0", "temp.raw"], capture_output=True).stdout.decode()
    # read as text
    images.append(text)

# remove temp files
os.remove("temp.raw")

# write as json
with open("video.json", "w") as f:
    json.dump(images, f)
