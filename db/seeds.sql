USE employeetracker_db;

INSERT INTO department (name) VALUES ('IT'),('DEPARTMENT NAME');

INSERT INTO role (title, salary, department_id) VALUES ('TITLE', 'SALARY', 1),('TITLE', 'SALARY', 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('FIRST NAME', 'LAST NAME', 1, 1),('FIRST NAME', 'LAST NAME', 2, 1);


