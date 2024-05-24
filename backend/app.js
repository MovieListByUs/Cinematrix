const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const movieRouter = require("./routes/moviesRoutes.js");
const authRouter = require("./routes/authRoutes.js");
const routerLi = require("./routes/ListRoutes.js");

const PORT = 4000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/movies", movieRouter);
app.use("/api/list", routerLi);
app.use("/api/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
