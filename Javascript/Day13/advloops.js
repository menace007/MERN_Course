let obj = {
    name: "Manish",
    age: 24,
    gender: "Male",
    city: "Agartala"
};
//for...in loop: Mainly used to loop through the keys/properties of an object.
for(let key in obj){
    // console.log(key, obj[key]);
}
//Before for in loop the task was very tough to do
//Put keys in array 
let keys = Object.keys(obj);
// console.log(keys);
//Print values using loop from keys
for(let i=0;i<keys.length;i++){
    // console.log(obj[keys[i]]);
} 

let obj2 = Object.create(obj);//Inherit property from obj
obj2.id = 1234;
obj2.money = 400;
console.log(obj2);
console.log(Object.keys(obj2));