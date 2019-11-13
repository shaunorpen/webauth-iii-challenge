const express = require("express");
const users = require("./usersModel");

const router = express.Router();

router.post("/register", (req, res) => {
  const user = req.body;
  users
    .addUser(user)
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).json({ message: error.message }));
});

router.post("/login", (req, res) => {
  const { username } = req.body;
  users
    .getUser(username)
    .then(data => res.status(201).json(data))
    .catch(error => res.status(500).json({ message: error.message }));
});

router.get("/users", (req, res) => {
  users
    .getUsers()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({ message: error.message }));
});

module.exports = router;
