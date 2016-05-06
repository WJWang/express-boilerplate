module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'blog'
  },
  pool: {
    min: 0,
    max: 7
  }
});
