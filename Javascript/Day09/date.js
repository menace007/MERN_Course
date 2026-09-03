const d = new Date();
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getTime());
const now = Date.now();
console.log(now);
const date = new Date("2025-10-20");
console.log(date);
const date1 = new Date(2024,4,28,10,12,45,231);
console.log(date1.toString());

//Countdown timer for next olympics (days, hour, mins, secs)
const date2 = new Date();
const date3 = new Date("2028-07-14T00:00:00");
const date4 = date2-date1;
const days = Math.floor(date4/(1000*60*60*24));
const hour = Math.floor((date2/(1000*60*60))%24);
const minutes = Math.floor((date2/(100*60))%60);
const seconds = Math.floor((date2/(1000))%60);
console.log("Countdown timer: ", days, hour, minutes, seconds);
