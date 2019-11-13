const db = require("../data/dbConfig");

function getUsers(filter = {}) {
  return db("users")
    .select("id", "username")
    .where(filter);
}

function getUser(username) {
  return db("users")
    .where({ username })
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(() => getUser(user.username));
}

module.exports = {
  getUsers,
  getUser,
  addUser
};
