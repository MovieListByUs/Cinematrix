const db = require("../database/index.js");
module.exports = {
  getAllMovies: (req, res) => {
    db.Movies.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },
  getmoviesofuser: (req, res) => {
    db.User.findByPk(req.params.id, {
      include: [
        {
          model: db.Movies,
        },
      ],
    })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  addMovie: (req, res) => {
    console.log(req.body, "hi");
    db.Movies.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  getOneMovie: (req, res) => {
    db.Movies.findAll({ where: { id: req.params.id } })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  searchMovie: (req, res) => {
    db.Movies.findAll({ where: { name: req.params.name } })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  updateMovie: (req, res) => {
    db.Movies.update(req.body, {
      where: { id: req.params.id },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },
  deleteMovie: (req, res) => {
    db.Movies.destroy({ where: { id: req.params.id } })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err) => console.error(err));
  },
  getByCategory: async (req, res) => {
    db.Movies
      .findAll({ where: { cats: req.params.cats } })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
};
