const express = require("express");
const users = require("./usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", (req, res) => {
  const user = {
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  users
    .addUser(user)
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).json({ message: error.message }));
});

router.post("/login", (req, res) => {
  const { username, password, department } = req.body;
  const token = generateToken({ username, department });
  users
    .getUser(username)
    .then(data => {
      if (bcrypt.compareSync(password, data.password)) {
        res
          .status(200)
          .json({ message: "Welcome, you're logged in!", token: token });
      } else {
        res.status(400).json("Invalid credentials.");
      }
    })
    .catch(error => res.status(500).json({ message: error.message }));
});

router.get("/users", (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(
      token,
      "My secret string which I keep safe, not here!",
      error => {
        if (error) {
          res.status(401).json({ message: error.message });
        } else {
          users
            .getUsers()
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json({ message: error.message }));
        }
      }
    );
  } else {
    res.status(400).json({ message: "No token supplied" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.username,
    department: user.department
  };
  return jwt.sign(payload, "My secret string which I keep safe, not here!");
}

module.exports = router;
