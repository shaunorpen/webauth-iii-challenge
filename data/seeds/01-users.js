exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(() => {
      return knex("users").insert([{ username: "shaun", password: "1234" }]);
    });
};
