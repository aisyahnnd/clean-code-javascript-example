// Bad Code
function addToDate(date, month) {
  // ...
}

const date = new Date();

// It's hard to tell from the function name what is added
addToDate(date, 1);

// Good Code
function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);
