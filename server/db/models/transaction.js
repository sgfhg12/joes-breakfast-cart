const Sequelize = require('sequelize');
const db = require('../db');
const LineItem = require('./lineItem');
const Product = require('./product');

const Transaction = db.define('transaction', {
    placedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

Transaction.prototype.getDetails = function(){
    return LineItem.findAll({
        where: { transactionId: this.id },
        include: { model: Product }    
    })
    .catch(err => console.error(err));
};

module.exports = Transaction;
