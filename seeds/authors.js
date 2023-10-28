/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const curentDate = new Date();
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    { name: 'Kelvin', created_at : curentDate, updated_at : curentDate},
    { name: 'samuel', created_at : curentDate, updated_at : curentDate},
    { name: 'situmorang', created_at : curentDate, updated_at : curentDate}
  ]);
};
