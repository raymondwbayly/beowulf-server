# Beowulf - Server

[![N|Solid](https://github.com/raymondwbayly/beowulf-assets/blob/master/img/pub/beowulf-express-server-banner.png?raw=true)](https://github.com/raymondwbayly/beowulf-server)

Beowulf Server is a Node JS Rest Architecture for supporting the Beowulf prototypes. This server can be run locally on your box and will allow for server calls and connection to a backend for the prototype applications.

---

## Install and run

- Type some Markdown on the left
- See HTML in the right
- Open terminal and enter project director
- ```cd /{path to project}```
- ```npm install```
- ```DEBUG=myapp:* npm start``` for mac
- ```set DEBUG=myapp:* & npm start``` for windows.

---

## Beowulf Series

- A sutie of appliations leveraging the google flutter/dart technologies
- A self contained series of applications to provide testing and process

---

## Tech

Beowulf uses a number of technologies within the suite:

- [Flutter] - A web/mobile framework based off of Google's Dart Language!
- [Hummingbird] - Codename for the web framework for flutter
- [Node] - Application server and package manager.
- [Express] - A framework for building Node.js micro services and server uri calls

---

## Building the Product

Beowulf server will run locally within your box and can be tested using Postman

There will be a documented option to release on AWS Lambda as a production platform

---

## Start Node Express Server

Once the server is installed, open a terminal window and to go the folder where it is housed, Use one of the following commands to run the server locally. NOTE: you will need to keep the terminal open to run the server.

### Run Server with debug

```sh npm test```

### Run Server

```sh npm start```

---

## Documentation

- All information on the project is in the ```/docs``` folder of the project
- A postman export of the collection is listed in here.
- Import the collection to postman and start the server to test.
- The ticket information list is in the spreadsheet marked tickets
- The use case used as a road map is also listed in docs.

---

## URI Calls

- ```/``` is the default call and will display a welcome screen to show its working
- ```/users``` is the Users Service, it will list users on the system
- ```/auth``` is the Authorization Service, this will show a welcome message
- ```/alerts``` is the Alerts Service, will return a list of alerts
- ```/alerts/{id}``` returns a single record to the client
- ```/calendar``` is the Schedule/Calendar Service and will return a list of appointments/ sched items
- ```/cfg``` is the config service, this returns a JSON object of application settings like version
- ```/cfg/version``` Returns the version information
- ```/cfg/version/notes``` Returns the version notes
- ```/cfg/version/number``` Returns the version number
- ```/cfg/support``` Returns support information from the server
- ```/news``` is the news service, this will return a list of news items
- ```/tasks``` is the tasks service, this will return a list of tasks.
- ```/calendar``` Returns the current day of events
- ```/calendar/event/132``` Returns a specific event
- ```/calendar/day``` returns the current day of events
- ```/calendar/day/01.01.2020``` returns a specific day of events
- ```/calendar/week``` returns the current weeks events
- ```/calendar/week/01.01.2020``` returns a specific week of events
- ```/calendar/month``` returns the current months events
- ```/calendar/month/01``` returns a specific month of events, pass the month
- ```/news``` returns the list of news stories to the application.
- ```/news/112``` returns the specific news story by passing the ID
- ```/tasks``` returns a list of user tasks from the server
- ```/tasks/12 returns a single task from the server
  
---

## Mock Data

This is the mock data section, this explains the mock data server setup.

---

## Todos

- Integrate into AWS Lambda
- Build Out the Services

---

## License

MIT
