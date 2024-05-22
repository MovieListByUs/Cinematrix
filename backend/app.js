const express = require('express');

const cors = require('cors');
const db = require('./database/index');
const PORT = 4000;
const app = express();
const router = require('./routes/moviesRoutes.js');
const router2 = require('./routes/userRoutes.js');
app.use(express.json());
app.use(cors());

app.use('/api/movies', router);
app.use('/api/user', router2);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
