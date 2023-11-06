//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
/*
If I could invite anyone to dinner, I'd choose the following three individuals:

1. Zia ul Din
2. Engineer Salam
3. M.Jaffar */
let guestList: string[] = ["Zia ul Din", "Engineer Salam", "M.Jafar"];

// Print invitation messages to each person
for (const guest of guestList) {
    console.log(`Dear ${guest},I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation.`);
}
