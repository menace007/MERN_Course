let a = 10;
let b = a;
b = 30;
// console.log(b);
// console.log(a);

// Object
let obj1={
    id:20,
    name: "Manesh"
}

let obj2=obj1;
obj2.id = 30;
// console.log(obj1);
// console.log(obj2);

const num = 32;
// num = 90; // not allowed
// console.log(num);

const obj = {
    id: 39,
    name: "Men"
}

obj.id = 100;
console.log(obj);

let obj2 = {
    id: 20, 
    money: 30
}
obj = obj2;
console.log(obj);