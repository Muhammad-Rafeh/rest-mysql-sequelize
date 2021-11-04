// ;;/const sequelize = require('../app')
const express = require('express');
const router = express.Router();
const Person = require('../models').Person;
//const Person2 = Person();

router.get('/',async (req,res)=>{
    //res.json("persnos router was just hit");
      await Person.findAll().then(persons =>res.json(persons)).catch(err => res.json(err));
})



module.exports = router;