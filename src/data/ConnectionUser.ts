export class ConnectionUser {

    getPoolConnection() {
        
        const mssql = require('mssql');

        const config = {
            driver: process.env.SQL_DRIVER,
            server: process.env.SQL_SERVER,
            database: process.env.SQL_DATABASE,
            user: process.env.SQL_UID,
            password: process.env.SQL_PWD,
            options: {
                encrypt: false,
                enableArithAbort: false
            },
        };

        const pool = new mssql.ConnectionPool(config);

        return pool;

    }
}