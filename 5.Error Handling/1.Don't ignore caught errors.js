// Bad Code
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}

// Good Code
try {
  functionThatMightThrow();
} catch (error) {
  // One option (more noisy than console.log):
  console.error(error);
  // Another option:
  notifyUserOfError(error);
  // Another option:
  reportErrorToService(error);
  // OR do all three!
}
