const User = require('./user');
const Transaction = require('./transaction');
const Product = require('./product');
const Inventory = require('./inventory');
const LineItem = require('./lineItem');

Transaction.belongsTo(User);
User.hasMany(Transaction);

LineItem.belongsTo(Product);
Product.hasMany(LineItem);

LineItem.belongsTo(Transaction);
Transaction.hasMany(LineItem);

Product.belongsTo(Inventory);
Inventory.hasMany(Product);

module.exports = { 
    User,
    Transaction, 
    Product, 
    Inventory, 
    LineItem
};
