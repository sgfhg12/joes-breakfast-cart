const transactionRouter = require.apply('express').Router;
const { Transaction, LineItem, Product } = require('../db/models');

//search transactions by date
transactionRouter.get('/:date', (req, res, next) => {
   Transaction.find({
       where: {date: req.params.date },
       include: [{ model: Product }, {model: LineItem}]
   })
   .then(transaction => res.json(transaction))
   .catch(next);
});

//create new transaction
transactionRouter.post('/', (req, res, next) => {
    Transaction.create(req.body)
    .then(instance => res.json(instance))
    .catch(next);
});

module.exports = transactionRouter;

