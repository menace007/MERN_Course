// Callback functions: It is a function that is passed as an argument to another function and is called later.
function greet(name, callback){
    console.log("Hello " + name);
    callback();
}
function saybye(){
    console.log("goodbye!");
}
// greet("Manish", saybye);

function sayHello(callback){
    console.log("I am a callback function");
    callback();
}
function name(){
    console.log("Hello i am name");
}
// sayHello(name);

//Callback with setTimeout()
// setTimeout(function(){
//     console.log("Hello!");
// }, 3000);
//Arrow function version
// setTimeout(()=>{
//     console.log("Hello again!");
// }, 4000);

//Callback with forEach()
let arr = ["Mango", "Apple", "Banana"];
arr.forEach(function(item){
    console.log(item);
});
arr.forEach(item=>{
    console.log(item);
})