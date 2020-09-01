# Memo.io
A sticky note web application now supporting user accounts locally and with OAuth!

## Trying it out
Go visit https://memo-io.herokuapp.com/ and try out my app!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

What you need to setup this project

```
NodeJS
```

### Installing

First clone the repository using this link: https://github.com/GarvinH/ForecastIO.git

Install all node dependencies

```
npm i
```

The setup should be complete and you should now be able to run the app in development mode.

```
npm run react_start   
```

If the page doesn't open on its own, open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.<br />
You will also see any lint errors in the console.


To run with a local server
```
npm run start
```

Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

If changes are made in src, be sure to run
```
npm run build
```
before attempting to run npm start. The server will not reflect changes on its own and npm run start must be run every build.

## Built With

* [ReactJS](https://reactjs.org/docs/getting-started.html) - The JavaScript library used
* [ExpressJS](https://expressjs.com/) - Web framework for handling the server
* [ReactRnD](https://github.com/bokuweb/react-rnd) - React component that is resizable and draggable
* [Focus Trap React](https://github.com/davidtheclark/focus-trap-react) - React component that traps focus for keyboard navigation
* [Redux](https://redux.js.org/introduction/getting-started) - JavaScript state container (implemented only in the reduxify branch, and will no longer be updated)
* [Heroku](https://www.heroku.com/what) - Hosts the server to this webapp!
* [MongoDB](https://www.mongodb.com/what-is-mongodb) - Stores all the data to this webapp!
* [Mongoose](https://mongoosejs.com/docs/guide.html) - Makes using MongoDB that much easier
* [PassportJS](http://www.passportjs.org/) - Handles login, registration, and logout
* [aes256](https://www.npmjs.com/package/aes256) - Encrypts and decrypts all notes stored

## Authors

* **Garvin Hui** - [GarvinH](https://github.com/garvinh)

Shoutout to **Stephen O'Neil** - [Stephen-ONeil](https://github.com/Stephen-ONeil) for reviewing my code!