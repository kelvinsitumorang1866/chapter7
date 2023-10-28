/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const curentDate = new Date();
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { title: 'Naruto', created_at : curentDate, updated_at : curentDate},
    { title: 'Boruto', created_at : curentDate, updated_at : curentDate},
    { title: 'Bon Jovi', created_at : curentDate, updated_at : curentDate}
  ]);
};
