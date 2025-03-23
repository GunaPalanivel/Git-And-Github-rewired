const greet = (name = "Guest") => `Hello, ${name.trim() || "Guest"}!`;

console.log(greet("Guna"));
console.log(greet(""));
console.log(greet());
