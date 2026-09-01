const arr = [2,3,4,55,88,"Menace"];
console.log(arr);
console.log(arr.length);
console.log(arr.at(-5));
const newarr = arr;
console.log(newarr);
console.log(newarr == arr);
const newarr1 = structuredClone(arr);
console.log(newarr1);
console.log(newarr1 == arr);
//Push
arr.push(30);
arr.push(50);
console.log(arr, newarr);
console.log(newarr1);
//Pop
arr.pop();
console.log(arr, newarr);
console.log(newarr1);
//Unshift: Insert element at the starting position of the array
arr.unshift("Manish the great");
console.log(arr, newarr);
//Shift: Delete the first element of the array
arr.shift();
console.log(arr, newarr);
//Delete: delete from particular index but drawback is that the space will still be reserved
// delete arr[0];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr.indexOf(88));
//includes
console.log(arr.includes('Menace'));
console.log(arr.includes(0));

//Slice
console.log(arr.slice(1,4));
//Splice
console.log(arr.splice(1,4));
console.log(arr);
arr.splice(1,3,"A","B","C");
console.log(arr);

let a = [1,2,3,4,5,'a'];
console.log(a);
a.splice(2,3,"hello", "world", "i", "am", "back");
console.log(a);
console.log(a.toString());
console.log(a.join("&"));

let arr1 = [2,35,6,11];
let arr2 = [5,12,19,25];
let ab =arr1.concat(arr2);
console.log(ab);

let x2d = [[1,2,3], [4,5,6], [7,8,9]];
console.log(x2d);
let x1d = x2d.flat();
console.log(x1d);
