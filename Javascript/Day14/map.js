// Map: Key value pair and key should be unique
const map1 = new Map();
map1.set(3,90);
map1.set("Manish", 23);
map1.set(20, "Mohan");
// map1.set("Manish", 200);
map1.delete("Manish");
console.log(map1);
console.log(map1.size);
console.log(map1.has(3));
//Looping
for(let [key, value] of map1){
    console.log(key, value);
}