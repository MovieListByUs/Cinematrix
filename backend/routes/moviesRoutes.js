const router = require("express").Router();
const controllers = require("../controllers/moviesControllers");

router.get("/getAll", controllers.getAllMovies);
router.get("/getOne/:id", controllers.getOneMovie);
router.get("/:name", controllers.searchMovie);

router.get("/cats/:category", controllers.getByCategory);




router.post("/add", controllers.addMovie);
router.put("/:id", controllers.updateMovie);
router.delete("/:id", controllers.deleteMovie);
module.exports = router;
