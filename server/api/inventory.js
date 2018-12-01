const inventoryRouter = require('express').Router();
const { Inventory, Product } = require('../db/models');

//search inventory by specific item
inventoryRouter.get('/:item', (req, res, next) => {
    Product.find(
    {
        where: {name: req.params.item},
        include: {model: Inventory}
    })
    .then(itemInfo => {
        if (!itemInfo) {
            next();
        }
        res.json(itemInfo.inventory.total)
    })
    .catch(next)
});


module.exports = inventoryRouter;