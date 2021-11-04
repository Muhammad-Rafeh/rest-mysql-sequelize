// const { DataTypes } = require("sequelize/types")

module.exports = (sequelize, Sequelize) => {
  const PersonSchema = sequelize.define('Person',{
    PersonId :{
      
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey : true
    },
    LastName : {

      type : Sequelize.STRING

    },
    FirstName : {
      type : Sequelize.STRING
    },
    Address : {
      type : Sequelize.STRING
    },
    City : {
      type : Sequelize.STRING

    }
  },{
    tableName: 'Persons',
    timestamps: false
  })
  return PersonSchema
}