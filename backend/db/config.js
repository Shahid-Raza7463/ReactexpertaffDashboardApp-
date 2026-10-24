const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "expertaff"
});
con.connect(function (err) {
    if (err) throw err;
    console.warn("BAckend Connected!");
});


module.exports = con;