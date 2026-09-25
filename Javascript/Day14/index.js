let user = {
    name: "rohit",
    age: 30
};

// console.log(Object.getOwnPropertyDescriptor(user, "name"));
Object.defineProperty(user, "name",{
    writable: false
});
user.name = "Menace";
// console.log(user);

//for...of loop: commonly used to get the actual values/items of the iterable. Mainly used in arrays, strings, maps, sets
const arr = [10,20,30,40];
// for(let item of arr){
//     console.log(item);
// }
const name = "Manish";
// for(let char of name){
//     console.log(char);
// }
let obj = {
    name: "Chaava",
    age: 23,
    school: "TNSS"
};
// for(let value of Object.keys(obj)){
//     console.log(value);
// }

//forEach() function
// let arra = [10,20,30,40];
// arra.forEach(function(elem){
//     console.log(elem);
// })
// arra.forEach(elem=>{
//     console.log(elem);
// })

// let a = [1,2,3,4];
// a.forEach((elem, index, ar)=>{
//     ar[index] = elem * 2; 
// })
// console.log(a);

//filter()
// let numbers = [9,11,10,20,30,35];
// let evennumbers = numbers.filter(num=>num%2==0);
// console.log(evennumbers);
const students = [
    {name: "Adarsh", age: 24, marks: 99},
    {name: "Manesh", age: 25, marks: 80},
    {name: "Aqib", age:25, marks: 88},
    {name: "Dip", age: 24, marks: 94}
];

const result = students.filter((obj)=>{
    return obj.marks>=88;
});
// console.log(result);

//map()
const numbers = [1,2,3,4,5];
const doubled = numbers.map(num=>num*2);
console.log(doubled);