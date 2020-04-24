var path = require('path');
var fs = require('fs');
// Read the Table data 

// Alerts JSON
    var alertsJSONPath = path.join(__dirname, '../lib', 'alerts.json');
    var alertsJSON =  require(alertsJSONPath);

// Config JSON
    var configJSONPath = path.join(__dirname, '../lib', 'config.json');
    var configJSON =  require(configJSONPath);

// news Release Notes
    var releaseNotesJSONPath = path.join(__dirname, '../lib', 'release-notes.json');
    var releaseNotesJSON =  require(releaseNotesJSONPath);

// news JSON
    var newsJSONPath = path.join(__dirname, '../lib', 'news.json');
    var newsJSON =  require(newsJSONPath);

// news JSON
    var tasksJSONPath = path.join(__dirname, '../lib', 'tasks.json');
    var tasksJSON =  require(tasksJSONPath);

// news JSON
var usersJSONPath = path.join(__dirname, '../lib', 'users.json');
var usersJSON =  require(usersJSONPath);



const getTable = (table) => {
    var returnTable = ['Table return needs to be either alerts, config, release, news, tasks, users'];
    if(table === 'alerts'){ returnTable = alertsJSON}
    if(table === 'config'){ returnTable = configJSON}
    if(table === 'release'){ returnTable = releaseNotesJSON}
    if(table === 'news'){ returnTable = newsJSON}
    if(table === 'tasks'){ returnTable = tasksJSON}
    if(table === 'users'){ returnTable = usersJSON}
    return returnTable;
}

const addToTable = (table, obj) => {
    if(table === 'alerts'){ alertsJSON.push(obj)}
    if(table === 'config'){ configJSON.push(obj)}
    if(table === 'release'){ releaseNotesJSON.push(obj)}
    if(table === 'news'){ newsJSON.push(obj)}
    if(table === 'tasks'){ tasksJSON.push(obj)}
    if(table === 'users'){ usersJSON.push(obj)}
    return true;
}

const listRecords = (table) => {
    var tmpTable = getTable(table);
    return tmpTable;
}

const getRecord = (table, uid) => {
    var tmpTable = getTable(table);
    var totalKeys = Object.keys(tmpTable).length
    var tmpInd = uid;
    if(uid > totalKeys){
        tmpInd = 1;
    }
    return tmpTable[tmpInd];
}

const addRecord = (table, obj) => {
    addToTable(table, obj);
    return true;
}

const updateRecord = (table, uid, obj) => {
    return true;
}

const deleteRecord = (table, uid) => {
    return true;
}

const deactivateRecord = (table, uid) => {
    return true;
}


exports.listRecords = listRecords;
exports.getRecord = getRecord;
exports.addRecord = addRecord;
exports.updateRecord = updateRecord;
exports.deleteRecord = deleteRecord;
exports.deactivateRecord = deactivateRecord;