const pg = require('pg-promise')();
const bd = pg(
    {
        user : 'postgres',
        password : '123456',
        host : 'localhost',
        port : '5432',
        database : 'bd_mvp'
    }
);

module.exports = bd;