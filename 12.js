//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var cars = ["Audi", "Fortuner", "BMW", "Revo"];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var brand = cars_1[_i];
    console.log("I would like to own a ".concat(brand, " car."));
}
