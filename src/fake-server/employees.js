const employeesData = require("./fake-server/employees.json");
const salariesData = require("./fake-server/salaries.json");

function getEmployees(sortOrder = "asc") {
  const mergedData = employeesData.map((employee) => {
    const salaryObj = salariesData.find((salary) => salary.employeeId === employee.id);
    return {
      ...employee,
      salary: salaryObj ? salaryObj.salary : null,
    };
  });

  if (sortOrder === "asc") {
    mergedData.sort((a, b) => (a.salary || 0) - (b.salary || 0));
  } else if (sortOrder === "desc") {
    mergedData.sort((a, b) => (b.salary || 0) - (a.salary || 0));
  }

  return mergedData;
}

module.exports = {
  getEmployees,
};
