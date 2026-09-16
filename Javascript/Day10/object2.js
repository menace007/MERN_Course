// const original = {
//     name: "John",
//     address: {
//         city: "Delhi"
//     }
// }
// console.log(original.name, original.address.city);
// const copy = {...original};
// copy.name="Sam";
// copy.address.city="Mumbai";
// console.log(copy.name, copy.address.city);
// console.log(original.name, original.address.city);

//Perfect example of shallow copy

let obj1 = {
    a:1,
    b:2,
    c:{
        d:100
    }
};
let obj2 = {...obj1};
// console.log(obj1);
// console.log(obj2);
obj2.a = 10;
obj2.b = 29;
// console.log(obj1);
// console.log(obj2);
obj2.c.d=200;
// console.log(obj1);
// console.log(obj2);

//Deep copy
let obj3 = structuredClone(obj1);
obj3.c.d = 1000;
// console.log(obj3, obj1);


//Destructuring object
let obj = {
    name: "Manesh",
    money: 400,
    balance: 20,
    age: 40
}

const {name: fname, age, ...obj4} = obj;
console.log(fname, age);
console.log(obj4);

//Destructuring array
const arr = [3,2,1,5,10];
const [first, second, third, ...arr1] = arr;
console.log(first, second, third);
console.log(arr1);

//Destructuring nested object
let n = {
    name: "Hello",
    age: 2000,
    address: {
        pin: 737139,
        city: "Rajapur",
        state: "Mehfil"
    }
}

const {address:{pin, city, state}}=n;
console.log(pin, city, state);

//Destructing array inside object
let x = {
    name: "Men",
    arr: [90,100,79, 34]
};

const {arr: [fst]} = x;
console.log(fst);

let u = {
    name: "Manish",
    amount: 400,
    greet: function(){
        return "Hello there!"
    }
};

console.log(u.greet());