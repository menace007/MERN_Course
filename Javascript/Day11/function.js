function greet(){
    console.log("Hello!!");
}
function sum(num1, num2){
    console.log(num1+num2);
}
function mul(n1, n2){
    console.log(n1*n2);
}
// greet();
// sum(1,2);
// mul(4,5);
const fun = function(){
    console.log("Hello");
}
// console.log(fun);
// fun();

//Arrow function
function myFun(a, b) {
    return a * b;
}
console.log(myFun(3,4));
//OR
const fun1 = ()=>{
    console.log("hello there.....");
}
fun1();
const add = (num1, num2)=>{
    return num1+num2;
}
console.log(add(8,7));
const multiply = (num1, num2)=> num1*num2;
console.log(multiply(4,5));
//If you have one parameter then no need of parenthesis ()
const cube = num => num*num*num;
console.log(cube(2));

const sum1 = function(...number){
    console.log(number);
    let add = 0;
    for(let i=0;i<number.length;i++){
        add = add + number[i];
    }
    return add;
}
sum1(1,2,3,4);
console.log(sum1(1,2,3,4));

let obj = {
    name: "Manesh",
    age: 25,
    amount: 400
};
function fun2({name, amount}){
    console.log(name, amount);
}
fun2(obj);