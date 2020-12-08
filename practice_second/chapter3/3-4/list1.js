//3-33 date
var dat = new Date(2016, 11, 25, 11, 37, 15, 999);

console.log(dat);
console.log(dat.getFullYear());
console.log(dat.getMonth());
console.log(dat.getDate());
console.log(dat.getDay());
console.log(dat.getHours());
console.log(dat.getMinutes());
console.log(dat.getSeconds());
console.log(dat.getMilliseconds());
console.log(dat.getTime());
console.log(dat.getTimezoneOffset());
console.log(dat.getUTCFullYear());
console.log(dat.getUTCMonth());
console.log(dat.getUTCDate());
console.log(dat.getUTCDay());
console.log(dat.getUTCHours());
console.log(dat.getUTCMinutes());
console.log(dat.getUTCSeconds());
console.log(dat.getUTCMilliseconds());

var dat2 = new Date();

dat2.setFullYear(2017);
dat2.setMonth(7);
dat2.setDate(5);
dat2.setHours(11);
dat2.setMinutes(37);
dat2.setSeconds(15);
dat2.setMilliseconds(513);

console.log(dat2.toLocaleString());
console.log(dat2.toUTCString());
console.log(dat2.toDateString());
console.log(dat2.toTimeString());
console.log(dat2.toLocaleDateString());
console.log(dat2.toLocaleTimeString());
console.log(dat2.toJSON());
console.log(Date.parse('2016/11/05'));
console.log(Date.UTC(2016, 11, 5));
console.log(Date.now());

//3-34 add
var dat = new Date(2017, 4, 15, 11, 40);

console.log(dat.toLocaleString());

dat.setMonth(dat.getMonth() + 3);
console.log(dat.toLocaleString());

dat.setDate(dat.getDate() - 20);
console.log(dat.toLocaleString());

//3-35 add_last
var dat = new Date(2017, 4, 15, 11, 40);

console.log(dat.toLocaleString());

dat.setMonth(dat.getMonth() + 1);
dat.setDate(0);

console.log(dat.toLocaleString());

//3-36 subtract
var dat1 = new Date(2017, 4, 15);
var dat2 = new Date(2017, 5, 20);
var diff = (dat2.getTime() - dat1.getTime()) / (1000 * 60 * 60 * 24);
console.log(diff);
