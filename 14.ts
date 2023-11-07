//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestList: string[] = ["Zia ul Din", "Engineer Salam", "M.Jafar"];
const guestwhocannotmakeit ="M.Jafar";
const newGuest = "Hamid";
// For update :The guest which con't  make the dinner
GuestList[GuestList.indexOf(guestwhocannotmakeit)]=newGuest;
for (const guest of GuestList) {
    console.log(`Dear ${guest},I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation.`);
}


//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.