//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestList: string[] = ["Zia ul Din", "Engineer Salam", "M.Jafar"];
const guestwhocannotmakeit ="M.Jafar";
const newGuest = "Hamid";
// For update the the guest
GuestList[GuestList.indexOf(guestwhocannotmakeit)]=newGuest;
for (const guest of GuestList) {
    console.log(`Dear ${guest},I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation.`);
}
