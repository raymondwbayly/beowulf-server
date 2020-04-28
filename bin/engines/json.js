var path = require('path');
var fs = require('fs');
var lodash = require('lodash');
// Read the Table data 

// Alerts JSON
    var alertsJSONPath = path.join(__dirname, '../../lib', 'alerts.json');
    var alertsJSON =  require(alertsJSONPath);

// Config JSON
    var configJSONPath = path.join(__dirname, '../../lib', 'config.json');
    var configJSON =  require(configJSONPath);

//  Release Notes
    var releaseNotesJSONPath = path.join(__dirname, '../../lib', 'release-notes.json');
    var releaseNotesJSON =  require(releaseNotesJSONPath);

// news JSON
    var newsJSONPath = path.join(__dirname, '../../lib', 'news.json');
    var newsJSON =  require(newsJSONPath);

// tasks JSON
    var tasksJSONPath = path.join(__dirname, '../../lib', 'tasks.json');
    var tasksJSON =  require(tasksJSONPath);

// users JSON
var usersJSONPath = path.join(__dirname, '../../lib', 'users.json');
var usersJSON =  require(usersJSONPath);

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
  };

const getTable = (table) => {
    var returnTable = ['Table return needs to be either alerts, config, release, news, tasks, users'];
    var returnPath = '';
    if(table === 'alerts'){ returnTable = alertsJSON; returnPath = alertsJSONPath}
    if(table === 'config'){ returnTable = configJSON; returnPath = configJSONPath}
    if(table === 'release'){ returnTable = releaseNotesJSON; returnPath = releaseNotesJSONPath}
    if(table === 'news'){ returnTable = newsJSON; returnPath = newsJSONPath}
    if(table === 'tasks'){ returnTable = tasksJSON; returnPath = tasksJSONPath}
    if(table === 'users'){ returnTable = usersJSON; returnPath = usersJSONPath}
    return {table: returnTable, path: returnPath};
}

const addToTable = (table, obj) => {
    var tmpObj = [];
    if(table === 'alerts'){ alertsJSON.push(obj); tmpObj = alertsJSON;}
    if(table === 'config'){ configJSON.push(obj); tmpObj = configJSON;}
    if(table === 'release'){ releaseNotesJSON.push(obj); tmpObj = releaseNotesJSON;}
    if(table === 'news'){ newsJSON.push(obj); tmpObj = newsJSON;}
    if(table === 'tasks'){ tasksJSON.push(obj); tmpObj = tasksJSON;}
    if(table === 'users'){ usersJSON.push(obj); tmpObj = usersJSON;}
    var path = getTable(table).path;
    writeJSONFile(tmpObj,path);
    return true;
}

const setRecordID = (table, obj) => {
    var tmpObj = getTable(table).table;
    var tmpInd = tmpObj.length;
    tmpInd = tmpInd + 1;
    obj.id = tmpInd;
    return obj;
}

const listRecords = (table) => {
    var tmpTable = getTable(table);
    return tmpTable;
}

const getRecord = (table, uid) => {
    var tmpTable = getTable(table).table;
    var tmpInd = findRecordIndex(tmpTable, uid);
    return tmpTable[tmpInd];
}

const addRecord = (table, obj) => {
    obj = setRecordID(table, obj);
    addToTable(table, obj);
    return true;
}

const updateRecord = (table, obj) => {
    var savedTable = getTable(table).table;
    var path = getTable(table).path;
    var tmpInd = findRecordIndex(savedTable, obj.id);
    if(table === 'alerts'){
        savedTable[tmpInd].id = obj.id;
        savedTable[tmpInd].title = obj.title;
        savedTable[tmpInd].date = obj.date;
        savedTable[tmpInd].description = obj.description;
        savedTable[tmpInd].author = obj.author;
        savedTable[tmpInd].email = obj.email;
        savedTable[tmpInd].active = obj.active;
    }
    if(table === 'news'){
        savedTable[tmpInd].id = obj.id;
        savedTable[tmpInd].author = obj.author;
        savedTable[tmpInd].authorid = obj.authorid;
        savedTable[tmpInd].date = obj.date;
        savedTable[tmpInd].media = obj.media;
        savedTable[tmpInd].body = obj.story;
        savedTable[tmpInd].active = obj.active;
    }
    if(table === 'tasks'){
        savedTable[tmpInd].id = obj.id;
        savedTable[tmpInd].author = obj.author;
        savedTable[tmpInd].authorid = obj.authorid;
        savedTable[tmpInd].assignee = obj.assignee;
        savedTable[tmpInd].assigneeid = obj.assigneeid;
        savedTable[tmpInd].title = obj.title;
        savedTable[tmpInd].task = obj.task;
        savedTable[tmpInd].status = obj.status;
        savedTable[tmpInd].create = obj.create;
        savedTable[tmpInd].complete = obj.complete;
        savedTable[tmpInd].active = obj.active;
    }
    writeJSONFile(savedTable,path);
    return true;
}

const findRecordByID = (table, uid) => {
    var tmpTable = getTable(table).table;
    var picked = lodash.filter(tmpTable, x => x.id === uid);
    return picked;
}

const findRecordIndex = (table, uid) => {
    var tmpInd = table.findIndex(x => x.id === uid);
    return tmpInd;
}

const deleteRecord = (table, uid) => {
    // TODO Create a delete function
    return true;
}

const checkActiveStatus = (table, uid) => {
    var savedTable = getTable(table).table;
    var path = getTable(table).path;
    var tmpInd = findRecordIndex(savedTable, uid);
    if(savedTable[tmpInd].active === 'true'){
        savedTable[tmpInd].active = 'false';
    } else {
        savedTable[tmpInd].active = 'true';
    }
    writeJSONFile(savedTable,path);
    return true;
}

const writeJSONFile = (tmpObj,path) => {
    let data = JSON.stringify(tmpObj);
    fs.writeFileSync(path, data);
    return true;
}

const searchRecords = (table, value) => {
    var tmpTable = getTable(table).table;
    var tmpSearched = [];
    if(table === 'users'){
        for(let r of tmpTable) {
            if(r.lastname === value ) {
                tmpSearched.push(r);
            }
        }
    }
    return tmpSearched;
}


exports.listRecords = listRecords;
exports.getRecord = getRecord;
exports.addRecord = addRecord;
exports.updateRecord = updateRecord;
exports.deleteRecord = deleteRecord;
exports.checkActiveStatus = checkActiveStatus;
exports.searchRecords = searchRecords;