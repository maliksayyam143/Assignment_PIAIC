//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var variable2 = "Sami";
console.log("Lowercase: " + variable2.toLowerCase());
console.log("Uppercase:" + variable2.toUpperCase());
var words = variable2.split(" ");
var titleCaseName = words.map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); }).join(" ");
console.log("Title Case: " + titleCaseName);
