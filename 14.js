//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var GuestList = ["Zia ul Din", "Engineer Salam", "M.Jafar"];
var guestwhocannotmakeit = "M.Jafar";
var newGuest = "Hamid";
// For update :The guest which con't  make the dinner
GuestList[GuestList.indexOf(guestwhocannotmakeit)] = newGuest;
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    var guest = GuestList_1[_i];
    console.log("Dear ".concat(guest, ",I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation."));
}
var messages = "/n"; // this added for line break
console.log();
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
var guestlist = ["Murtaza", "Faheem", "Adnan"];
var unabletoattend = "Faheem";
guestlist.forEach(function (guest) {
    if (guest !== unabletoattend) {
        console.log("Dear ".concat(guest, ", you are invited to dinner at my place!"));
    }
});
console.log("".concat(unabletoattend, " can't make it to the dinner."));
var messageS = "/n"; // this added for line break
console.log();
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
var GuestLists = ["Umair", "Sami", "Ayesha"];
var unabletoattenddiner = "Ayesha";
GuestLists.forEach(function (guest) {
    if (guest !== unabletoattenddiner) {
        console.log("Dear ".concat(guest, ", You are invited to dinner at my Home."));
    }
});
console.log("Dear ".concat(unabletoattenddiner, ", You can cannot invited in this dinner. Because today dinner of only boys."));
var make = "/n";
console.log();
//• Print a second set of invitation messages, one for each person who is still in your list.
var GUESTLIST = ["Hamid", "Ali", "Farhan", "Adnan"];
var unabletoattendDinner = "Adnan";
GUESTLIST.forEach(function (guest) {
    if (guest !== unabletoattendDinner) {
        console.log("Dear ".concat(guest, ", you are invited to dinner at my place!"));
    }
});
console.log("Dear ".concat(unabletoattendDinner, ",you are still invited to dinner. We hope to see you there!"));
