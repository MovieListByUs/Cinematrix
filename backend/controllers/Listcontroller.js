const db = require("../database/index.js");

module.exports = {
  addToList: (req, res) => {
    db.MyList.create({ movieId: req.body.movieId, userId: req.body.userId })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
};
