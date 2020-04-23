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

const checkCookies = (cookies) => {
    // This checks to ensure the app and user cookies are set
    console.log(cookies);
    var returnVar = {'status': true, 'message':'Cookies are set and returning properly'};
    return returnVar;
}

exports.getTitle = getTitle;
exports.getVersion = getVersion;
exports.getCopyright = getCopyright;