let obj = {};
Object.defineProperty(obj, 'name', {
    value: "Manish",
    writable: false,
    enumerable: false,
    configurable: true
});
console.log(obj);
obj.name = "Men";//NO error but it won't give you to change value of it
console.log(obj);//This will print previous value only

const obj1 = {
    name: "John",
    age: 23,
    accno: "1001"
};
Object.defineProperty(obj1, "accno", {
    writable: false,
});
obj1.accno = "50000";
console.log(obj1);

const customer = {
    name: "Manish",
    age: 24,
    accno: 1001,
    balance: 120
};
Object.defineProperty(customer, "balance", {
    enumerable:false,
    configurable:false
})
for(let key in customer){
    console.log(key);
}

let customer2 = Object.create(customer);//create clone of customer and assign to customer2 now customer2 can inherit property from customer
customer2.school = "TNSS";
customer2.city = "Gangtok";
customer2.state = "Sikkim";
Object.defineProperty(customer2, "city", {
    enumerable: false,
    configurable: false
})
console.log(customer2);

Object.defineProperty(Object.prototype, 'toString', {
    enumerable:true
})


for(let key in customer2){
    console.log(key, customer2[key]);
}