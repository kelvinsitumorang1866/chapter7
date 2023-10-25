/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("User", (table)=>{
        table.increments("id").primary();
        table.string("Nama");
        table.string("Alamat");
        table.string("Email");
        

    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("User")
  
};
