/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("book_authors", (table) => {
        table.increments('id').primary;
        table.integer('book_id').unsigned().references("id").inTable("books");
        table.integer('author_id').unsigned().references("id").inTable("authors");
        table.timestamp("created_at");
        table.timestamp("updated_at");
    } )
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("book_authors");
  
};
