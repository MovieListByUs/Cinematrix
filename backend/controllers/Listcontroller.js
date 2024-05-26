const db = require("../database/index.js");

module.exports = {
  getAllList: (req, res) => {
    db.MyList.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  addToList: (req, res) => {
    db.MyList.create({ movieId: req.body.movieId, UserId: req.body.UserId })
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => console.error(err));
  },
  removeFromList: (req, res) => {
    db.MyList.destroy({ where: { movieId: req.params.movieId } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },
};
