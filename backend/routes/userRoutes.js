const router2 = require("express").Router();
const controller = require("../controllers/userController");

router2.get("/getAlluser",controller.getAllUser)
router2.post("/addii", controller.addUser);
router2.put("/up/:id", controller.updatiiUser);
router2.delete("/deletii/:id", controller.removiiUser);


module.exports = router2;