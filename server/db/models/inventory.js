const Sequelize = require('sequelize');
const db = require('../db');

const Inventory = db.define('inventory', {
    total: {
        type: Sequelize.INTEGER,
        defaultValue: 0, 
        validate: {
            min: 0
        }
    }
});

module.exports = Inventory;