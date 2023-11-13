// test animations

let counter = 1;
let batch_num = 0;
const batch_size = 10;
const maxCounter = 30;

let sto = require("Storage");

let img_data = sto.readJSON(counter + ".json")["data"];

function animate() {
    g.clear();

    currImg = img_data[batch_num];

    const img = {
        width : 176, height : 132, bpp : 1,
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