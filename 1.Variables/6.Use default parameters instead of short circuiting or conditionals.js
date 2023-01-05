// Bad Code
function createTrainingRequest(number) {
  const requestNumber = number || "TRQ00123";
  // ...
}

// Good Code
function createTrainingRequest(requestNumber = "TRQ00123") {
  // ...
}
