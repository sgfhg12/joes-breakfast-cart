const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            min: 0.01
        }
    }
});

module.exports = Product;