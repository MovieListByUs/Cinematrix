
const db = require("../database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register function 
const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    // hash the password using bcrypt with a salt rounds value of 10
    const hashedPassword = await bcrypt.hash(password, 10);
    // create a new user in the database with the hashed password and default role of user
    const newUser = await db.Users.create({
      username,
      password: hashedPassword,
      role: "user",
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};




// login function 
const login = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    // find a user in the database with the provided username and role
    const user = await db.Users.findOne({ where: { username, role } });
    // if the user is not found we respond with a 404 error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // now we compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // if the password is wrong we return 401 error
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }



    // create a JWT token with the user's id, username, and role, and sign it with a secret key
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      "your_jwt_secret"
    );
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


module.exports = { register, login };
