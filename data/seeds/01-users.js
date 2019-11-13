exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          username: "shaun",
          password:
            "$2a$10$stfU6KME8D6h8h/m1bTU6eyKEtwixYRzTJGdlK68EDVHUOGOKMzXW",
          department: "management"
        },
        {
          username: "mike",
          password:
            "$2a$10$Qp.3nJYylS75QJvdZyKEp.V2g9jFxM.s.atehMCllf5WQf/CE0pMS",
          department: "catering"
        },
        {
          username: "sally",
          password:
            "$2a$10$su8nwTzS1AU73MZTtmrI8OG5z.BVtuLTDVqstHyVl9aV3IDXHQwLe",
          department: "catering"
        },
        {
          username: "sarah",
          password:
            "$2a$10$o2O9vHIYPaxezi0xaaSdqeENUYOzYfu8oNl5XMRhRjWlAd6bGs2Ra",
          department: "management"
        },
        {
          username: "nick",
          password:
            "$2a$10$RbUwKqPAzSQNT0Yw/1g4j.XkTi4qIaVH9p68jCPvT1NV/qWKR/Ikq",
          department: "front desk"
        },
        {
          username: "susan",
          password:
            "$2a$10$cwauMjBGHz5bn.gCbp9YPOiTIb327FllOvhEY/XyyqwncILFSeofC",
          department: "front desk"
        }
      ]);
    });
};
