const routCat = require('express').Router();
const controlCat = require('../controllers/catControl');

routCat.get('/category/:category', controlCat.getByCategory);

module.exports = routCat;
