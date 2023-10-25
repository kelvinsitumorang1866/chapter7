/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable("Buku", (table)=>{
        table.increments("id").primary();
        table.string("Nama_buku");
        table.string("Nama_penulis");
        table.integer("stock");
        table.timestamp("created_at");
        table.timestamp("updated_at");

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("Buku");
};
