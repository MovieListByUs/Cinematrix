const db = require("../database/index.js");

module.exports = {


  getAllList: (req, res) => {
    db.MyList.findAll()



  addToList: (req, res) => {

    db.MyList.create({ movieId: req.body.movieId, userId: req.body.userId })

      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },


  removeFromList: (req, res) => {
    db.MyList.destroy({ where: { movieId: req.params.movieId } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },
};
