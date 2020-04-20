var path = require('path');
var fs = require('fs');

var configJSONPath = path.join(__dirname, '../lib', 'config.json');
var configJSON =  require(configJSONPath);

const getTitle = () => {
    return configJSON.title;
}

const getVersion = () => {
    return configJSON.version.number;
}

const getCopyright = () => {
    return configJSON.copyright;
}


exports.getTitle = getTitle;
exports.getVersion = getVersion;
exports.getCopyright = getCopyright;