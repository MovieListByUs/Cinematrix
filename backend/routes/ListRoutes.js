const routerLi = require("express").Router();
const controllerLI = require("../controllers/Listcontroller.js");


routerLi.post("/addTolist", controllerLI.addToList);




module.exports = routerLi