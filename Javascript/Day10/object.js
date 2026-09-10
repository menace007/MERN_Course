//How to create object
const obj = {
    name: "Rahul",
    email: "xyz@y.com",
    acc_bal: 420,
    0:1,
    1:2,
    3:3
}
// console.log(obj);
// console.log(obj.name);
// console.log(obj["email"]);

const arrobj = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    undefined: 50
}
// for(let i = 0;i<4;i++){
//     console.log(arrobj[i]);
// }
// const arr = [20,30,40];
// console.log(arr[0], obj['0']);
// console.log(arrobj.undefined, arrobj['undefined']);

//Second way to create object
const person = new Object();
person.name = "Menace";
person.age = 25;
person.gender = "Male";
// console.log(person);
//Delete
delete person.age;
// console.log(person);

//Third way to create object using class
class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
// let person1 = new People("Manish", 27, "Male");
// console.log(person1);
// let person2 = new People("Riya", 23, "Female");
// console.log(person2);

//Common methods for object
let obj1 = {
    name: "Menace",
    age: 24,
    acc_bal: 420,
    gender: "Male"
};
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));

let obj2 = {a:1, b:2};
let obj3 = {c:3, d:4};
let obj4 = obj2+obj3;
// console.log(obj4);
obj4 = Object.assign({},obj2, obj3);
console.log(obj4);
// console.log(obj4, obj2, obj3);
obj4 = {...obj2, ...obj3};
console.log(obj4);