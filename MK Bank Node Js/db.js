const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'mk_bank'
});




db.connect(err => {
    if (err) {
        console.error('Database connected failed ' + err.stack);
        return;
    }
    console.log('Database connection successfull');
});


module.exports = db;