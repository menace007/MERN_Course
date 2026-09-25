//reduce()
const arr = [10,20,30,40,50];
const ans = arr.reduce((acc, curr)=>acc+curr, 0);
console.log(ans);

const arr1 = ["apple", "orange", "banana", "grapes", "apple", "orange", "banana", "grapes", "banana", "grapes", "apple"];
const result = arr1.reduce((acc, curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;
    return acc;
},{})
console.log(result);

//Set
const set1 = new Set([10,20,30,40,30,20,10]);
set1.add(100);
set1.delete(40);
let answ = set1.has(10);
set1.clear();
console.log(answ);
console.log(set1);

const set2 = new Set([1,2,3,4,1,1,2,3,77]);
console.log(set2);
for(let num of set2){
    console.log(num);
}

const nums = [1,2,3,4,4,1,2,4,3,5,6,7,7];
const setnums = [...new Set(nums)];
console.log(setnums);

//Real world use case of set
const userid = new Set(["rohit_neg19", "menace_007", "manish_sh__", "rare_case_12"]);
let new_user = "rohitbhai1102";
if(userid.has(new_user)){
    console.log("User with that username already exists");
}
else{
    console.log("Username added successfully");
    userid.add(new_user);
}
userid.delete("Username added");
console.log(userid);