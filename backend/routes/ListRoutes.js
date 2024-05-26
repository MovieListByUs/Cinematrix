const routerLi = require("express").Router();

const controllerLI = require("../controllers/Listcontroller.js");



routerLi.get("/allList", controllerLI.getAllList);
routerLi.post("/addTolist", controllerLI.addToList);
routerLi.delete("/delFrom/:movieId", controllerLI.removeFromList);

module.exports = routerLi;

const controllerLI = require("../controllers/Listcontroller.js");


routerLi.post("/addTolist", controllerLI.addToList);




module.exports = routerLi

