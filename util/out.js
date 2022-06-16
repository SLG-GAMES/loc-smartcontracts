const fs = require("fs")

function save_to_json(key, value) {
    let path = "deploy_main.json";
    let obj = {};
    if (fs.existsSync(path)) {
        obj = JSON.parse(fs.readFileSync(path, 'utf-8'));
        obj[key] = value;
    } else {
        obj[key] = value;
    }

    let json = JSON.stringify(obj);
    fs.writeFileSync(path, json);
}

function getProperties(name) {
    let path = "deploy_main.json";
    let obj = {};
    if (fs.existsSync(path)) {
        obj = JSON.parse(fs.readFileSync(path, 'utf-8'));
    }
    return obj[name];
}

module.exports = {
    save_to_json,
    getProperties
}