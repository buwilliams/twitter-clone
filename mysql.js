const mysql = require('mysql');

module.exports = class MySql {
    constructor(config) {
        this.conn = mysql.createConnection(config);
    }

    close() {
        this.conn.end();
    }

    wrap(fn) {
        return new Promise((accept, reject) => {
            fn((error, results, fields) => {
                if(error) reject(error);
                else accept(results, fields);
            });
        });
    }

    query(queryString) {
        return this.wrap(handler => {
            this.conn.query(queryString, handler);
        });
    }
}