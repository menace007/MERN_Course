// Hoisting
// console.log(x);
// var x = 10;
// console.log(y);
// let y = 20;

greet();

function greet(){
    console.log("Hello there...");
}

meet();

const meet = function(){
    console.log("Hello i am meet...");
}