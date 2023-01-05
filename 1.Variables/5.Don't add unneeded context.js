// Bad Code
const Employee = {
  employeeName: "Bambang",
  employeeStatus: "Active",
  employeePosition: "HR Manager",
};

function listEmployee(employee, name) {
  employee.employeeName = name;
}

// Good Code
const Employee = {
  name: "Bambang",
  status: "Active",
  position: "HR Manager",
};

function listEmployee(employee, name) {
  employee.name = name;
}
