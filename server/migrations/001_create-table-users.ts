import { Knex } from 'knex';

exports.up = function (knexDB: Knex) {
  return knexDB.schema
    .createTable('users', function (table: Knex.TableBuilder) {
      table.increments('id').primary()

      table.string('name', 255)
        .notNullable()
        .unique()
    })
}

exports.down = function (knexDB: Knex) {
  return knexDB.schema.dropTable('users');
}
