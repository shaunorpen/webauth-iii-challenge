const express = require("express");
const users = require("./usersModel");
const bcrypt = require("bcryptjs");

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
  const { username, password } = req.body;
  users
    .getUser(username)
    .then(data => {
        if (bcrypt.compareSync(password, data.password)) {
            res.status(200).json("You're logged in!");
        } else {
            res.status(400).json("Invalid credentials.");
        }
    })
    .catch(error => res.status(500).json({ message: error.message }));
});

router.get("/users", (req, res) => {
  users
    .getUsers()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ message: error.message }));
});

module.exports = router;
