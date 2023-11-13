import os
import json
import subprocess

def sort_key(path):
    val = path.split(".")[0]
    return int(val)

video_dir = input("video dir: ")
output_dir = input("output dir: ")

batch_size = 100

files = [f for f in os.listdir(video_dir)]
files.sort(key=sort_key)
batch = []

for fileNum, file in enumerate(files):
    # convert to bitmap
    subprocess.run(["convert", os.path.join(video_dir, file), "-depth", "1", "-negate", "gray:temp.raw"])
    # convert to base64
    text = subprocess.run(["base64", "--wrap=0", "temp.raw"], capture_output=True).stdout.decode()

    # add into batch
    batch.append(text)
    
    if fileNum % batch_size == 0 and fileNum != 0:
        # write batch
        with open(os.path.join(output_dir, f"{fileNum//batch_size}.json"), "w") as f:
            json.dump({"data": batch}, f)
        # clear batch
        batch = []
        print(f"wrote {fileNum//batch_size}.json")

# remove temp files
os.remove("temp.raw")
