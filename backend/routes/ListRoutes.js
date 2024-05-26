const routerLi = require("express").Router();




const controllerLi = require("../controllers/Listcontroller.js");



routerLi.get("/allList", controllerLI.getAllList);
routerLi.post("/addTolist", controllerLI.addToList);
routerLi.delete("/delFrom/:movieId", controllerLI.removeFromList);

module.exports = routerLi;
