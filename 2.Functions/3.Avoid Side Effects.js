// Bad Code
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];

// Good Code

// Bad Code
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};

// Good Code
