//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Program written by [Sayyam Shahid]
// Date: 2023-11-06
// This TypeScript program calculates the sum of the first 10 natural numbers.
var sum = 0;
for (var i_1 = 1; i_1 <= 10; i_1++) {
    sum += i_1;
}
console.log("The sum of the first 10 natural numbers is: ".concat(sum));
// Program written by [Sayyam Shahid]
// Date: 2023-11-06
// This TypeScript program calculates and prints the  table of 15.
var number = 15;
var i = 1;
console.log("Table of ".concat(number, ":"));
while (i <= 10) {
    var result = number * i;
    console.log("".concat(number, " x ").concat(i, " = ").concat(result));
    i++;
}
