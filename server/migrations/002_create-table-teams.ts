import { Knex } from 'knex';
import { Tables, TeamCols } from "../enums";

exports.up = function (knexDB: Knex) {
  return knexDB.schema
    .createTable(Tables.Teams, function (table: Knex.TableBuilder) {
      table.increments(TeamCols.Id).primary();

      table.string(TeamCols.Name, 255)
        .notNullable()
        .unique();
    });
};

exports.down = function (knexDB: Knex) {
  return knexDB.schema.dropTable(Tables.Teams);
};
