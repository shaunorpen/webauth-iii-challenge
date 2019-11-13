module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/db.db3"
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, end) => {
        conn.run("PRAGMA foreign_keys=ON", end);
      }
    },
    useNullAsDefault: true
  }
};
