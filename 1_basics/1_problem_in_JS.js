function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
console.log(add(2, "3")); // 23

function addTypeSafe(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments should be numbers");
  }
  return a + b;
}

console.log(addTypeSafe(2, 3)); // 5
console.log(addTypeSafe(2, "3")); // Error: Both arguments should be numbers
