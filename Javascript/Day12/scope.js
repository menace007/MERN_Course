// Scope in js
let a = 10;
var b = 20;
const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
function hello(){
    console.log(a);
    console.log(b);
    console.log(c);
}
function greet(){
    let z = 20;
    var x = 40;
    let i = 99;
    console.log(z);
    console.log(x);
    console.log(i);
}
// hello();
// greet();
// console.log(z);
// console.log(x);
// console.log(i);

//Block scope
if(true){
    let x = 10;
    var y = 20;
    const z = 30;
}
console.log(y);//This is the problem with var
