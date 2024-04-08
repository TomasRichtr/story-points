import { Knex } from 'knex';
import { StoryPointSetCols, Tables } from "../enums";

exports.up = function (knexDB: Knex) {
  return knexDB.schema
    .createTable(Tables.StoryPointSets, function (table: Knex.TableBuilder) {
      table.increments(StoryPointSetCols.Id).primary();

      table.json(StoryPointSetCols.StoryPointSet).notNullable();
    });
};

exports.down = function (knexDB: Knex) {
  return knexDB.schema.dropTable(Tables.StoryPointSets);
};
