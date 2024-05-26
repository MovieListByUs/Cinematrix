const db = require("../database/index.js");

module.exports = {
  getAllUser: (req, res) => {
    db.User
      .findAll()
      .then((result) => res.send(result))
      .catch((err) => {
        console.error(err);
      });
  },
  addUser: (req, res) => {
    db.User
      .create(req.body)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  removiiUser: async (req, res) => {
    try {
      const result = await db.User.destroy({ where: { id: req.params.id } });
      console.log(result);
      res.sendStatus(200); 
    } catch (err) {
      console.error(err);
      res.sendStatus(500); 
    }
  },
  updatiiUser: async (req, res) => {
    try {
      const result = await db.User.update(req.body, {
        where: { id: req.params.id },
      });
      res.send(result);
    } catch (err) {
      console.error(err);
      res.sendStatus(500); 
    }
  },

};
