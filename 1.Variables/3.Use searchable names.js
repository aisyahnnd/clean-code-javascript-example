// Bad Code
setTimeout(blastOff, 86400000);

if (codeStatus === 54) {
  // ...
}

// Good Code
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;

setTimeout(blastOff, MILLISECONDS_PER_DAY);
