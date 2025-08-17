const { Sequelize } = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize({
    dialect:'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    // username: process.env.USERNAME_DB,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },  
});


module.exports = sequelize;

