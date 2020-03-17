exports.up = function(knex) {
  // don't forget the return statement
  return knex.schema.createTable("vegetables", tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl
      .string("name", 128)
      .notNullable()
      .unique()
      .index();
    // creates a numeric field called budget which is required
    tbl.boolean("favorite").defaultsTo(false);
  });
};

exports.down = function(knex) {
  // drops the entire table
  return knex.schema.dropTableIfExists("vegetables");
};
