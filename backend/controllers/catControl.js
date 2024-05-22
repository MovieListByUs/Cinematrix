module.exports = {
    
getByCategory: async (req, res) => {
    db.Movies
      .findAll({ where: { category: req.params.category } })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
}