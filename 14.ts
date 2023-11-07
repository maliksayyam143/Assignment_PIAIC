//15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let GuestList: string[] = ["Zia ul Din", "Engineer Salam", "M.Jafar"];
const guestwhocannotmakeit ="M.Jafar";
const newGuest = "Hamid";
// For update :The guest which con't  make the dinner
GuestList[GuestList.indexOf(guestwhocannotmakeit)]=newGuest;
for (const guest of GuestList) {
    console.log(`Dear ${guest},I would like to invite you to dinner. It would be a pleasure to have you join me for a wonderful evening of food & conversation.`);
}
const messages = "/n"; // this added for line break
console.log()



//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
let guestlist: string[]=["Murtaza","Faheem","Adnan"];
const unabletoattend ="Faheem";
guestlist.forEach((guest)=>{
    if(guest !==unabletoattend){
        console.log(`Dear ${guest}, you are invited to dinner at my place!`);
    }
})
console.log(`${unabletoattend} can't make it to the dinner.`);
const messageS = "/n";// this added for line break
console.log()




// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let GuestLists : string[] =["Umair","Sami","Ayesha"];
const unabletoattenddiner = "Ayesha";
GuestLists.forEach((guest)=>{
    if(guest !==unabletoattenddiner){
        console.log(`Dear ${guest}, You are invited to dinner at my Home.`);
    }
})
console.log(`Dear ${unabletoattenddiner}, You can cannot invited in this dinner. Because today dinner of only boys.`);
const make = "/n";
console.log();



//• Print a second set of invitation messages, one for each person who is still in your list.
let GUESTLIST: string[]=["Hamid","Ali","Farhan","Adnan"];
const unabletoattendDinner = "Adnan";
GUESTLIST.forEach((guest)=>{
    if(guest !==unabletoattendDinner){
        console.log(`Dear ${guest}, you are invited to dinner at my place!`);
    }
})
console.log(`Dear ${unabletoattendDinner},you are still invited to dinner. We hope to see you there!`);