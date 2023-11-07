//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// Store the person's name with whitespace characters and i used Myname instead of name because the name is define in the typescript for another purpose .It is pre-define. 
var Myname = "\t\n  Sayyam Shahid  \t\n";
// Print the name with whitespace
console.log("Name with whitespace:");
console.log();
// Remove leading and trailing whitespace and print the stripped name
var strippedName = Myname.trim();
console.log("Stripped Name:");
console.log(strippedName);
