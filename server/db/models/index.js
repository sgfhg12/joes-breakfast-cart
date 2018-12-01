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

//Make separate table for inventory for future flexibility
Product.belongsTo(Inventory);

module.exports = {
    User,
    Transaction,
    Product,
    Inventory,
    LineItem
};
