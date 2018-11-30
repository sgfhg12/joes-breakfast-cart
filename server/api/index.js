const router = require('express').Router();

//router error handling
router.use((req , res, next) => {
    const error = new Error('not found')
    error.status = 404;
    next(error)
});

module.exports = router;
