
const { prompt } = require("inquirer");
const db = require("./db/connection");
const { viewAllDepartments, addDepartment, delDepartment } = require("./db/department");
const { viewAllEmployees, addEmployees, deleteEmployees, updateEmployeeRole } = require("./db/employees");
const { viewAllRoles, addRole, deleteRole } = require("./db/roles");

const start = async () => {
    // console.log("Welcome to the Employee Manager!");
    const { choice } = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Delete a department',
                'Add a role',
                'Delete a role',
                'Add an employee',
                'Update an employee role',
                'Delete an employee',
                'Exit'
            ]
        }
    ])

switch (choice) {
    case 'View all departments':
        const viewDepartment = await viewAllDepartments()
        console.table(viewDepartment)
        break;
    case 'Add a department':
        const newDepartment = await addDepartment()
        console.table(newDepartment)
        break;
    case 'Delete a department':
        const deleteDepartment = await delDepartment()
        console.table(deleteDepartment)
        break;
    case 'View all roles':
        const viewRoles = await viewAllRoles()
        console.table(viewRoles)
        break;
    case 'Add a role':
        const newRole = await addRole()
        console.table(newRole)
        break;
    case 'Delete a role':
        const delRole = await deleteRole()
        console.table(delRole)
        break;
    case 'View all employees':
        const viewEmployees = await viewAllEmployees()
        console.table(viewEmployees)
        break;
    case 'Add an employee':
        const newEmployees = await addEmployees()
        console.table(newEmployees)
        break;
    case 'Update an employee role':
        const updateEmployee = await updateEmployeeRole()
        console.table(updateEmployee)
        break;
    case 'Delete an employee':
        const delEmployees = await deleteEmployees()
        console.table(delEmployees)
        break;
    case 'Exit':
        console.log("Goodbye!");
        process.exit()
    }
    start();
}
console.log("Welcome to the Employee Management!")
start();
