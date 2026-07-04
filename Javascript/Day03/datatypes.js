// Non primitive datatypes
// Array
let arr = [10,20,50, "Manish"];
// console.log(arr[0], arr[1], arr[2]);
// console.log(arr, typeof(arr));

//Object
let obj = {
    username: "Manish",
    accountno: 34569033,
    balance: 4200
};
// console.log(obj, typeof(obj));

// Function
let greet = function(){
    console.log("Hello user!");
}
// greet();
// console.log(typeof(greet));

// Type Conversion
let account_bal = "100";
// console.log(account_bal, typeof account_bal);
account_bal = Number(account_bal);
// console.log(account_bal, typeof account_bal);

let x = false;
// console.log(Number(x));

let x1 = null;
// console.log(Number(x1));

let x2 = undefined;
// console.log(Number(x2));

let acc = "234stx";
// console.log(Number(acc));

let x3 = true;
// console.log(String(x3), typeof(String(x3)));
