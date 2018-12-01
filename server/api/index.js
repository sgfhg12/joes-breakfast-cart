const router = require('express').Router();
const userRouter = require('./users');
const inventoryRouter = require('./inventory');
const transactionRouter = require('./transactions')

//set up api routes
router.use('/transactions', transactionRouter)
router.use('/users', userRouter);
router.use('/inventory', inventoryRouter);

//router error handling
router.use((req , res, next) => {
    const error = new Error('not found')
    error.status = 404;
    next(error)
});

module.exports = router;
