import os
import json
import subprocess

video_dir = input("video dir: ")
output_dir = input("output dir: ")

files = [f for f in os.listdir(video_dir)]
files.sort()

for fileNum, file in enumerate(files):
    # convert to bitmap
    subprocess.run(["convert", os.path.join(video_dir, file), "-depth", "1", "gray:temp.raw"])
    # convert to base64
    text = subprocess.run(["base64", "--wrap=0", "temp.raw"], capture_output=True).stdout.decode()

    # write to json file
    with open(os.path.join(output_dir, f"{fileNum}.json"), "w") as f:
        f.write(json.dumps({"data": text}))


# remove temp files
os.remove("temp.raw")
