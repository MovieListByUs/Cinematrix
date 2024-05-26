const db = require("../database/index.js");
const cloudinary = require("../cloudinary.js");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });



module.exports = {
  getAllMovies: (req, res) => {
    db.Movies.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },
  addMovie: (req, res) => {


    upload.single('photo')(req, res, async (err) => { 

      // we handle single photo upload
      if (err) {
        return res.status(500).send(err);
      }
      try {
        // now we upload the file to cloudinary
        const result = await new Promise((res, rej) => {


          cloudinary.uploader.upload_stream({ resource_type: 'image' }, (err, result) => {
            if (err) rej(err);
            else res(result);
          }).end(req.file.buffer); 

        });

        // we create a new movie object with the data from the request body and the url of the img
        const newMovie = {
          name: req.body.name,
          description: req.body.description,

          imgUrl: result.secure_url,

   

          // we store the URL of the img
          year: req.body.year,
          author: req.body.author,
          category: req.body.category,


          time: req.body.time

        };

        // save the new movie in the db
        const movie = await db.Movies.create(newMovie);

   
        res.status(201).json(movie); 
      } catch (err) {
        res.status(500).json({ err: 'Failed to add movie' }); 

      }
    });
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
    db.Movies.findAll({ where: { category: req.params.category } })
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((err) => console.error(err));
  },
  getmoviesofuser: (req, res) => {
    db.Users.findByPk(req.params.id, {
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
};
