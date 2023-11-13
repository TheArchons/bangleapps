// test animations

let rot = 0;
let counter = 0;

let sto = require("Storage");

function animate() {
    g.clear();

    let img_data = sto.readJSON(counter + ".json")["data"];

    const img = {
        width : 176, height : 132, bpp : 1,
        buffer : atob(img_data)
    };

    // draw image
    g.drawImage(img, 88, 88, {rotate:rot});
    counter++;
}

setInterval(animate, 1000/10);