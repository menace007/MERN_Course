//Inheritance
let user1 = {
    name: "Manish",
    age: 23
}
let user2 = {
    amount: 20,
    accno: 1234
}
user2.__proto__ = user1;//Inherit properties from user1 object

console.log(user2.amount);
console.log(user2.name);
