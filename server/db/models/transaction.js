const Sequelize = require('sequelize');
const db = require('../db');

const Transaction = db.define('transaction', {
    placedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Transaction;