//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Program written by [Sayyam Shahid]
// Date: 2023-11-06
// This TypeScript program calculates the sum of the first 10 natural numbers.

var sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log(`The sum of the first 10 natural numbers is: ${sum}`);

// Program written by [Sayyam Shahid]
// Date: 2023-11-06
// This TypeScript program calculates and prints the  table of 15.

const Numbers = 15;
var i = 1;

console.log(`Table of ${Numbers}:`);
while (i <= 10) {
    const result = Numbers * i;
    console.log(`${Numbers} x ${i} = ${result}`);
    i++;
}
