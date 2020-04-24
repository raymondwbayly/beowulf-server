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

// Calendar Day JSON
var calDayJSONPath = path.join(__dirname, '../lib/schedule', 'calendar-day.json');
var calDayJSON =  require(calDayJSONPath);

// Calendar Day JSON
var calEventJSONPath = path.join(__dirname, '../lib/schedule', 'calendar-event.json');
var calEventJSON =  require(calEventJSONPath);

// Calendar Day JSON
var calWeekJSONPath = path.join(__dirname, '../lib/schedule', 'calendar-week.json');
var calWeekJSON =  require(calWeekJSONPath);

// Calendar Month JSON
var calMonthJSONPath = path.join(__dirname, '../lib/schedule', 'calendar-month.json');
var calMonthJSON =  require(calMonthJSONPath);


const listRecords = (obj) => {

    return 'DOH';
}


exports.listRecords = listRecords;