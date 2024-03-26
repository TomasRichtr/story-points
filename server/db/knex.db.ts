const knex = require('knex')

export const CONFIG = {
  HOST: process.env.database_host || 'zpj83vpaccjer3ah.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  USER: process.env.database_user || 'gdytklsrjs94m4p8',
  PASSWORD: process.env.database_password || 'ip47kol8opyhw5hq',
  DATABASE: process.env.database || 'll5tsgqfpyy5z4wk',
  PORT: process.env.database_port || 3306
}

const knexDb = knex({
  client: 'mysql',
  connection: {
    host: CONFIG.HOST,
    user: CONFIG.USER,
    password: CONFIG.PASSWORD,
    database: CONFIG.DATABASE,
    port: CONFIG.PORT,
    charset: 'utf8mb4'
  }
})

export const runDbMigrations = async () => {
  await knexDb.migrate.latest({directory: "../story-points/server/migrations"})
}

export default knexDb
