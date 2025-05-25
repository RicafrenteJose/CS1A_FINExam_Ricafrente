let numInput = prompt("Enter numbers separated by commas (e.g., 24,65,21,5,9,32,42,80,57):");
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

let numbers = numInput ? numInput.split(',').map(Number) : [];
let names = nameInput ? nameInput.split(',').map(name => name.trim()) : [];

let merged = [...numbers, ...names];
console.log("Merged Array:", merged);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in descending:", sortedNumbers);

let sortedNames = [...names].sort();
console.log("Names sorted alphabetically:", sortedNames);
