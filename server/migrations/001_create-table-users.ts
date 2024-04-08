import { Knex } from 'knex';
import { Tables, UserCols } from "../enums";

exports.up = function (knexDB: Knex) {
  return knexDB.schema
    .createTable(Tables.Users, function (table: Knex.TableBuilder) {
      table.increments(UserCols.Id).primary();

      table.string(UserCols.Name, 255)
        .notNullable()
        .unique();
    });
};

exports.down = function (knexDB: Knex) {
  return knexDB.schema.dropTable(Tables.Users);
};
