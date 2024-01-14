const express = require('express')
const app = express()
const port = process.env.PORT || 8888;
const path= require('path')
require('dotenv').config()
const mysql = require('mysql2');
//config template
const configViewEngines=require('./config/viewEngine');
const webroute=require('./routes/web');
 const connection=require('./config/database')
 const hostname='localhost';
 app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',webroute);
configViewEngines(app);


//config input express req.body


// app.set('views', './views')
// app.set('view engine', 'pug')
//route
// console.log(process.env)

//test connection

// connection.query(
//   'select * from Users',
//   function (err, results, fields) {
//     console.log('result',results); // results contains rows returned by server
//     console.log('fields',fields); // fields contains extra meta data about results, if available
//   }
// );


app.listen(port,hostname,() => {
  console.log(`Example app listening on port ${port}`)
})