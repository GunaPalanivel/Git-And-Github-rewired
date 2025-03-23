const greet = (name = "Guest") => {
  const trimmedName = name.trim();
  return `Hello, ${trimmedName || "Guest"}!`;
};

console.log(greet("Guna"));
console.log(greet(""));
console.log(greet());
