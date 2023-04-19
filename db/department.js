const db = require("./db/connection");

async function viewAllDepartments() {
    db.query('SELECT * FROM department').promise()
}