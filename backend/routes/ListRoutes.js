const routerLi = require("express").Router();

const controllerLi = require("../controllers/Listcontroller.js");

routerLi.post("/addTolist", controllerLi.addToList);

module.exports = routerLi;

const controllerLI = require("../controllers/Listcontroller.js");


routerLi.post("/addTolist", controllerLI.addToList);




module.exports = routerLi

