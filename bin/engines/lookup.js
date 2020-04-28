var path = require('path');
var fs = require('fs');
var lodash = require('lodash');
// Read the Table data 

// Lookup Timezones JSON
    var timeZonesJSONPath = path.join(__dirname, '../../lib/lookup', 'timezones.json');
    var timeZonesJSON =  require(timeZonesJSONPath);

    // Lookup Titles JSON
    var titlesJSONPath = path.join(__dirname, '../../lib/lookup', 'titles.json');
    var titlesJSON =  require(titlesJSONPath);

    const findRecordByID = (table, uid) => {
        var tmpTable = getJSON(table).table;
        var picked = lodash.filter(tmpTable, x => x.id === uid);
        return picked;
    }
    const findRecordIndex = (table, uid) => {
        var tmpInd = table.findIndex(x => x.id === uid);
        return tmpInd;
    }
    const getJSON = (table) => {
        var returnTable = ['Table return needs to be either alerts, config, release, news, tasks, users'];
        var returnPath = '';
        if(table === 'timezones'){ returnTable = timeZonesJSON; returnPath = timeZonesJSONPath}
        if(table === 'titles'){ returnTable = titlesJSON; returnPath = titlesJSONPath}
        return {table: returnTable, path: returnPath};
    }


    const listRecords = (table) => {
        var tmpTable = getTable(table);
        return tmpTable;
    }

    
    const getRecord = (table, uid) => {
        var tmpTable = getJSON(table).table;
        var tmpInd = findRecordIndex(tmpTable, uid);
        return tmpTable[tmpInd];
    }



exports.listRecords = listRecords;
exports.getRecord = getRecord;