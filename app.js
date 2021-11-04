const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();

//const config = require('./config/config.js')

 
 
//  const sequelize = new Sequelize(config.db, config.username, config.password, {
//   host: config.host,
//   dialect:  config.dialect
// });


//module.exports= sequelize;
//models

const Person = require('./models/').Person;
console.log(Person.toString());


//routes

const person = require('./routes/person')

app.use('/persons',person);

//sync database

// sequelize.sync().then(function() {
//   console.log('connected to database')
// }).catch(function(err) {
//   console.log(err)
// });



// const checkConnection = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// }

// const closeConnection = () => {
//     sequelize.close().then(console.log("connection closed"));
// }

// checkConnection();
// //closeConnection();


app.get('/',(req,res)=>{
  res.send("blablabla")
})

// "host": "127.0.0.1", 
app.listen(8086 , ()=> console.log("listening on port 8086"));