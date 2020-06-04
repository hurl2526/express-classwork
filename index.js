//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
//Allows to set up middlewares to respond to HTTP Requests.
// Defines a routing table which is used to perform different actions based on HTTP Method and URL.
// Allows to dynamically render HTML Pages based on passing arguments to templates.

// 4 main features:
//middlewares: breaking up node code
//routing: also makes it smaller peices
//subapplication (router)


//building our first small API with CRUD capabilities

// npm i express
//npm i dotenv (environment variables to hide stuff)

//we deleted what was in scripts object (in package.json and wrote "start":"node index.js"
//then added "dev": "nodemon index.js"

const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

//general rule is to require that stuff above and local files below
const time = require('./middlewares/time')
const logger = require('./middlewares/logger')//pulled this from middlewares folder logger.js

const port = process.env.PORT || 8080//this references to .env we created to hide. says to use that first but if nothing there then use 8080

let users = [
  { name: 'jd', email: 'jd@me.com', password: '123' },
  { name: 'paul', email: 'paul@me.com', password: '123' },
  { name: 'lois', email: 'lois@me.com', password: '123' },
  { name: 'sidney', email: 'sidney@me.com', password: '123' },
  { name: 'canton', email: 'canton@me.com', password: '123' },
];

//middleware runs functions or stop app if checking for something
//can create or own or use //next goes to next function

// const logger = (req,res, next)=>{
//   console.log(req.method, req.url, res.statusCode)
//   next()
// }
//moved the above to middlewares folder and then export/required it in here to make it look less cluttered

app.use(logger)
// app.use(express.static(path.join(__dirname, 'public')))
app.use(time)

//sends string to browser
app.get('/',(req, res)=>{
  res.status(200).json({confirmation: 'success',users})
})
//call above get in postman or the browser


// app.get('/',(req, res)=>{
//   res.send('Hello Express App')
// })

app.listen(port,()=>{
  console.log(`Listening on port ${port}`)
})

//in terminal npm run dev so you dont have to stop and start server
//otherwise npm start

//get ignore makes it so it wont go to github, put in node_modules and .env. remember to do this each time you start a project




