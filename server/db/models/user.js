const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        unique: true, 
        allowNull: false, 
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        // making password act like a func hides it when serializing to JSON 
        // this gets around sequelize's lack of a private option
        get(){
            return () => this.getDataValu('password')
        }
    },

});

module.exports = User; 
