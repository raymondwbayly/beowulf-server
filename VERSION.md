# BEOWULF NODE EXPRESS SERVER

[![N|Solid](https://github.com/raymondwbayly/beowulf-assets/blob/master/img/pub/beowulf-node-server-banner-2.png?raw=true)](https://github.com/raymondwbayly/beowulf-server)

---

## Version Notes - Beowulf - Version Notes

These are the task and version notes for the application,  they are filled out during every Pull Request to explain the changes based on the tickets completed.

## ISSUE 1 - Building out the Framework

- Created a postman collection and exported it to ```docs```, download it there to get the latest server call examples. 
- Build out the readme and version notes for the server.
- Added Auth Default Route
- Added Users Default Route
- Added Config Default Route
- Added Alerts Default Route
- Added News Default Route
- Added Tasks Default Route
- Added Calendar Default Route

## Feature 1.1 Building out the Config Service Area

- Updated the postman collection (download the latest version under ```docs```)
- Ability to return the config object
- Ability to return the version information
- Ability to return the version number
- Ability to return the support information
- Ability to return the version notes

## Feature 2 Building out the Alerts Service Area

- Updated the postman collection (download the latest version under ```docs```)
- Default now returns a list of Alerts to the client
- Created /alerts/{id} that will return a single alert to the client
- Setup a JSON file library for returning data for the test

## Feature 6 Application Authorization on the system
- Passing a post with id, token and geo allows you to authorize the app
- the token MUST be ```2234FFR1RRDF``` to recieve a successfull authorization
- Passing the same token to ```auth/user``` along with id, geo and pass will return a user profile and authorize a user on the system

## Feature 7 Calendar Service Object Returns

- Updated the postman collection (download the latest version under ```docs```)
- The default ```calendar``` call will return that days events
- The ```calendar/week``` will return the current weeks events, if you pass a first day it will return the event for the week specified
-  The ```calendar/day``` will return the current days events, if you pass a day it will return them for that day
-  The ```calendar/month``` will return the current month , if you pass a month number it will return that month's events.
-  The ```calendar/event``` will return the event of the id you pass

## Feature 8 Adding tasks to the Server
- Adds the ability to list tasks from the server
- Adds the ability to retrieve a single task from the server

## Feature 9 Adding News Stories to the Server

- Updated the server to include news stories returned from the server
- Updated POSTMAN to include the new news calls
- Updated the server to ensure ```/news``` returns the list of news stories to the client
- Updated the server to ensure that ```/news/112``` returns a specific news story to the client.

## Feature 12 Mock Data Return on Server

- Updated the postman collection (download the latest version under ```docs```)
- Setup documentation for Mock Data Server
- Include Dependencies in package and package-lock

## Feature 22 Returning a single record

- Setup the system to use the ID as an index to retrieve a single record from system
- Setup the auth to return a single record from users
- Removed teh single JSON static files and opted to centralize the call and use the JSON library without redundant files

## Feature 23 Centralizing the Message System

- Centralized the system messages to a single function
- returns the set messages in the bin/messages script.

## Feature 31 Lookup System

- Create the ability to lookup and return lists of values
- Create the ability to return job title title
- Create the ability to return a list of timezones

## Feature 32 Alerts (Add an Alert)

- Adds the post call to simulate adding an alert
- Updated the URI calls in the Readme to reformat
- Added the CRUD calls to the alert file

## Feature 33 Alerts (Update an Alert)

- Created the ability to simulate an update
- Updated POSTMAN with the call

## Feature 34 Alerts (Update an Alert)

- Created the ability to simulate a delete
- Updated POSTMAN with the call

## Feature 35 Alerts (Adds Calendar Event)

- Created the ability to simulate an event add
- Updated POSTMAN with the call
