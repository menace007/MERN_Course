// If else and loops in javascript
//->If else
/*
let age = 0;
if(age>=18){
    console.log("You are eligible to vote...");
}
else{
    console.log("You are not eligible to vote...");
}
*/

// ->If elseif else
/*
let age =32;
if(age<0){
    console.log("Enter valid age");
}
else if(age<18){
    console.log("You are a kid");
}
else if(age>=18 && age<=45){
    console.log("You are adult");
}
else{
    console.log("You are old");
}
*/

//Switch case: for multiple conditions
/*
let day = 0;
switch(day){
    case 0: 
        console.log("Sunday");
        break;
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid Choice");
}
*/

//Loop: Do repetitive task
/*
for(let i=0;i<10;i++){
    console.log("Hello there!");
}
    */


//Nested for loop
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(j);
//     }
//     console.log("\n");
// }
 
// while loop
// let i = 1;
// while(i<6){
//     console.log(i);
//     i++;
// } 

let obj = {
    name: "Manesh",
    age: 24,
    amount: 10,
    city: "Agartala"
}
//Put keys in array 
let keys = Object.keys(obj);
console.log(keys);
//Print values using loop from keys
for(let i=0;i<keys.length;i++){
    console.log(obj[keys[i]]);
}

