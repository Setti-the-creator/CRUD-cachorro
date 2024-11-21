const database = require('../config/database')


class ModelExercicio 
{
   constructor()
   {
    this.model = database.db.define('cachorro', {
        id:{
            type: database.db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: database.db.Sequelize.STRING
        },
        howold: {
            type: database.db.Sequelize.INTEGER
        },

        race: {
            type: database.db.Sequelize.STRING
        },  
    })
   }
}

module.exports = new ModelExercicio().model