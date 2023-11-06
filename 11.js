//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Name = ["Farhan", "Hamid", "Sham", "Zia"];
for (var _i = 0, Name_1 = Name; _i < Name_1.length; _i++) {
    var name_1 = Name_1[_i];
    console.log("Hello, ".concat(name_1, " have a Nice day."));
}
