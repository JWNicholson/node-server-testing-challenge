
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
      users.increments();
      users
        .string('name')
        .notNullable()
        .unique()
        .index();
  })
};

exports.down = function(knex) {
  return knex.schema.droptTableIfExists('users');
};
