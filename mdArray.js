let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");

let subArray1 = namesInput ? namesInput.split(',').map(name => name.trim()) : [];
let subArray2 = agesInput ? agesInput.split(',').map(age => parseInt(age)) : [];

let structuredArray = subArray1.map((name, index) => [name, subArray2[index]]);

console.log("Restructured Array [name, age]:");
structuredArray.forEach(item => console.log(item));
