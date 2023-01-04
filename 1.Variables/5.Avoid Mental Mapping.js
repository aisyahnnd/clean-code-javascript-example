// Bad Code
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  dispatch(l);
});

// Good Code
