//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var GuestList = ["Zia ul Din", "Engineer Salam", "M.Jafar"];
var guestwhocannotmakeit = "M.Jafar";
var newGuest = "Hamid";
// For update the the guest
GuestList[GuestList.indexOf(guestwhocannotmakeit)] = newGuest;
for (var _i = 0, GuestList_1 = GuestList; _i < GuestList_1.length; _i++) {
    var guest = GuestList_1[_i];
    console.log("Dear ".concat(guest, ",I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation."));
}
