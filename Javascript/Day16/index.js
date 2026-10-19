//this keyword
//global object: 
// console.log("Hello world");
// console.log(globalThis.Math.random()); 
// console.log(Math);
// console.log(parseInt("33"));
// function show(){
//     console.log(this);
// }
// show();
// const person = { name: "John", show: () => { console.log(this); } };
// person.show();
// console.log(this);

//Non strict mode function
function greet(){
    console.log(this);
}
greet();