const greet = (name) => {
  const validName = typeof name === "string" ? name.trim() : "Guest";
  return `Hello, ${validName || "Guest"}!`;
};

console.log(greet("Guna")); // Output: Hello, Guna!
console.log(greet("")); // Output: Hello, Guest!
console.log(greet()); // Output: Hello, Guest!
console.log(greet(undefined)); // Output: Hello, Guest!
console.log(greet(null)); // Output: Hello, Guest!
console.log(greet("   ")); // Output: Hello, Guest!
