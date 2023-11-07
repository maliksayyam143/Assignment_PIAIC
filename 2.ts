//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const variable2 : string = "Sami";

console.log("Lowercase: " + variable2.toLowerCase());
console.log("Uppercase:" + variable2.toUpperCase());
const words = variable2.split(" ");

const titleCaseName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
console.log("Title Case: " + titleCaseName);