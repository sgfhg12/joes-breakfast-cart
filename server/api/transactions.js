const transactionRouter = require('express').Router();
const { Transaction, LineItem, User, Product } = require('../db/models');


//search transactions by date
//return user, item, date, price
transactionRouter.get('/:date', (req, res, next) => {
   Transaction.findAll({
       where: {placedAt: req.params.date },
       include: {model: User}
   })
   .then(transactions => {
       const transactionDetail = transactions.map(transaction => {
           return transaction.getDetails()
        })
        return Promise.all(transactionDetail).then(x => {
            const det = x.map((lineItems, i) => {
                const obj = Object.assign({}, { lineItems }, {buyerName: transactions[i].user.name})
                return obj;
            })
            res.json(det)
        })
    })
    .catch(next);
});

//create new transaction
transactionRouter.post('/', (req, res, next) => {
    Transaction.create({id: req.body.id})
    .then(transaction => {
        let productIds = [req.body.orders];
        Product.findAll ({
            where: {name: productIds}
        })
        // return LineItem.bulkCreate([{
        //     quantity: req.body.quantity,
        //     transactionId: req.body.transactionId
        // }])
    })
    //.then(result => res.json(result))
    .catch(next);
});

module.exports = transactionRouter;

