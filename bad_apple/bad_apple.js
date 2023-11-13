// test animations

let counter = 1;
let batch_num = 0;
const batch_size = 100;
const maxCounter = 65;
const img_width = 48;
const img_height = 36;

let sto = require("Storage");

let img_data = sto.readJSON(counter + ".json")["data"];

function animate() {
    currImg = img_data[batch_num];

    const img = {
        width : img_width,
        height : img_height,
        bpp : 1,
        buffer : atob(currImg)
    };

    // draw image
    g.drawImage(img, 0, 0);
    batch_num++;

    if (batch_num == batch_size) {
        if (counter == maxCounter) {
            counter = 0;
        }
        batch_num = 0;
        counter++;
        img_data = sto.readJSON(counter + ".json")["data"];
    }
}

setInterval(animate, 1000/10);