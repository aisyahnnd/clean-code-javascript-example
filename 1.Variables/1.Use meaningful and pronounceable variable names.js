// Bad Code
const yyyymmdstr = moment().format("YYYY/MM/DD");
const module = ["Training", "Recruitment", "Payroll"];
const data = {
  first: "Bimo",
  addr: "Bintaro, Tangerang Selatan",
  active: true,
};

// Good Code
const currentDate = moment().format("YYYY/MM/DD");
const modules = ["Training", "Recruitment", "Payroll"];
const employee = {
  firstName: "Bimo",
  address: "Bintaro, Tangerang Selatan",
  isActive: true,
};
