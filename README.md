# Beowulf - Server


[![N|Solid](https://github.com/raymondwbayly/beowulf-assets/blob/master/img/pub/beowulf-node-server-banner-2.png?raw=true)](https://github.com/raymondwbayly/beowulf-server)


[![N|Solid](https://github.com/raymondwbayly/beowulf-assets/blob/master/img/pub/beowulf-suite-graphic-2.png?raw=true)](https://github.com/raymondwbayly/beowulf-server)

Beowulf Server is a Node JS Rest Architecture for supporting the Beowulf prototypes. This server can be run locally on your box and will allow for server calls and connection to a backend for the prototype applications.

## Download the repository and install, once you have it installed download postman and set it up based on instructions below

---

## Install and run Beowulf Server

- Type some Markdown on the left
- See HTML in the right
- Open terminal and enter project director
- ```cd /{path to project}```
- ```npm install```
- ```DEBUG=myapp:* npm start``` for mac
- ```set DEBUG=myapp:* & npm start``` for windows.
-  Open a browser window and point it at ```http://localhost:3000/``` to view the server homepage

---

## POSTMAN (https://www.postman.com/)

- Once you have the server installed and running download postman
- Import the schema from within the ```docs``` folder under the project.
- This will give you all the server calls and parameters allowing you to test

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

- All URI calls can be tested and modeled from the POSTMAN file in docs, simply import it into a new collection.

| URI                           | CALL   | RETURN    |  NOTES                        |
| ------                        | ------ | ------    | ------                        |
|```/```                        |  GET   | HTML PAGE | Server Information Page       |
|   ALERT CALLS                                                                      |
|```/alerts```                  |  GET   |  LIST     | List of Alerts                |
|```/alerts/{uid}```            |  GET   |  ITEM     | Single Alert Record           |
|```/alerts```                  |  POST  |  STRING   | Add an alert to the server    |
|```/alerts```                  |  PUT   |  STRING   | Update an Alert               |
|```/alerts/{uid}```            | DELETE |  STRING   | Deletes an Alert              |
|   AUTH CALLS                                                                       |
|```/auth```                    |  POST  | AUTH APP  |  Authorizes app on the server |
|```/auth/user```               |  POST  | AUTH USER |  Authorizes user on server    |
|   USER CALLS                                                                       |
|```/users```                   |  GET   | LIST      |  Lists Users                  |
|```/users/{uid}```             |  GET   | ITEM      |  Displays a single User       |
|   CALENDAR CALLS                                                                   |
|```/calendar```                |  GET   | LIST      |  Lists the days events        |
|```/calendar/event/{uid}```    |  GET   | LIST      |  Returns list of days events  |
|```/calendar/event```          |  POST  | STRING    |  Adds event to server         |
|```/calendar/day/{date}```     |  GET   | LIST      |  Returns specific day events  |
|```/calendar/week```           |  GET   | LIST      |  Returns the weeks events     |
|```/calendar/week/{date}```    |  GET   | LIST      |  Returns seven days of events |
|```/calendar/month```          |  GET   | LIST      |  Returns list of current month|
|```/calendar/month/{month}```  |  GET   | LIST      |  List of months events        |
|   NEWS CALLS                                                                       |
|```/news```                    |  GET   | LIST      |  List of News Stories         |
|```/news/{uid}```              |  GET   | ITEM      |  Specific news Story          |
|   TASK CALLS                                                                       |
|```/tasks```                   |  GET   | LIST      |  List of Users Tasks          |
|```/tasks/{uid}```             |  GET   | ITEM      |  A task                       |
|   CONFIG CALLS                                                                     |
|```/cfg```                     |  GET   | LIST      |  Application Settings (JSON)  |
|```/cfg/version```             |  GET   | JSON      |  Returns Version Object       |
|```/cfg/version/notes```       |  GET   | JSON      |  Returns Version Notes        |
|```/cfg/version/number```      |  GET   | JSON      |  Returns version number       |
|```/cfg/support```             |  GET   | JSON      |  REturns Support Info         |
|   LOOKUP CALLS                                                                     |
|```/lookup```                  |  GET   | STRING    |  Text return to show working  |
|```/lookup/timezones```        |  GET   | LIST      |  List of Timezones            |
|```/lookup/timezone/{uid}```   |  GET   | JSON      |  Timezone information         |
|```/lookup/jobtitles```        |  GET   | LIST      |  List of Job Titles           |
|```/lookup/jobtitle/{uid}```   |  GET   | JSON      |  Returns Job Title Info       |

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
