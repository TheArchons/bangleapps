for (let i = 0; true; i++) {
    let sto = require("Storage");
    if (sto.readJSON(i + ".json") == undefined) {
        console.log("done");
        break;
    }
    sto.erase(i + ".json");
    console.log("erased " + i);
}