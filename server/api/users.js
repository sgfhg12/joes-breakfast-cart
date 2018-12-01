const userRouter = require('express').Router();
const { User } = require('../db/models');

//create new user
userRouter.post('/', (req, res, next) => {
    User.create(req.body)
    .then(instance => res.json(instance))
    .catch(next);
});

module.exports = userRouter;