const inquirer = require('inquirer');
const inq = require('inquirer');
const mysql = require('mysql2');
const { join } = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'employeetracker_db'

});


connection.connect(function(err){{
    if(err) throw err;
    startInq()
}


function startInq() {
inq.prompt([
    {
        type: 'input',
        name: 'userchoice',
        message: 'What would you like to do?',
        choices:["View Department","View Employee","View Role",
        "View All","View by Manager","Add Department","Add Employee",
        "Add Role","Update Employee Role","Delete Department",
        "Delete Employee","Delete Role","Quit"]
    }
]).then(function(answer) {
    switch(answer.userchoice){
        case "View Department":
            viewDepartment();
            break;
        case "View Employee":
            viewEmployee();
            break;
        case "View Role":
            viewRole();
            break;
        case "View All":
            viewAll();
            break;
        case "View by Manager":
            viewByManager();
            break;
        case "Add Department":
            addDepartment();
            break;
        case "Add Employee":
            addEmployee();
            break;
        case "Add Role":
            addRole();
            break;
        case "Update Employee Role":
            updateEmployeeRole();
            break;
        case "Delete Department":
            deleteDepartment();
            break;
        case "Delete Employee":
            deleteEmployee();
            break;
        case "Delete Role":
            deleteRole();
            break;
        case "Quit":
            quit();
            break;
    }
})

}




function viewDepartment(){
    connection.query('SELECT * FROM department', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function viewEmployees(){
    connection.query('SELECT * FROM Employees', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function viewRole(){
    connection.query('SELECT * FROM role', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function viewAll(){
    connection.query('SELECT * FROM department', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function viewByManager(){
    connection.query('SELECT * FROM department', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function addDepartment(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?'
        }
    ]).then(function(answer){
    connection.query('INSERT INTO department (name) VALUES (?);',answer.department, function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })
})

}

function addEmployee(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: 'What is the first name of the employee?'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'What is the last name of the employee?'
        },
        {
            type: 'input',
            name: 'roleid',
            message: 'What is the role id of the employee?'

        },
        {
            type: 'input',
            name: 'managerid',
            message: 'What is the manager id of the employee?'
        },
    ]).then(function(answer){
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?); ',
    [answer.firstname, answer.lastname, answer.roleid, answer.managerid], 
    function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

});
}

function addRole(){
    connection.query('SELECT * FROM role', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}
function updateEmployeeRole(){
    connection.query('SELECT * FROM role', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}

function deleteDepartment(){
    connection.query('SELECT * FROM role', function(err,res){
        if(err) throw err;
        console.table(res);
        startInq();
    })

}
