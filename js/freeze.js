// P:01
const bottle = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
const onlyKeys = Object.keys(bottle);
// console.log(onlyKeys);
const onlyValues = Object.values(bottle);
// console.log(onlyValues);
const pair = Object.entries(bottle)
// console.log(pair);
// Object.freeze(bottle)
Object.seal(bottle);
bottle.height = 5.1;
bottle.price = 5.1;
delete bottle.isClined;
// console.log(bottle);
// P:02


const bottle1 = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
const onlyKeys1 = Object.keys(bottle1);
// console.log(onlyKeys1);
const onlyValues1 = Object.values(bottle1)
// console.log(onlyValues1);
// P:03
const bottle3 = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
const onlyKeys3 = Object.keys(bottle3)
// console.log(onlyKeys3);
const onlyValues3 = Object.values(bottle3);
// console.log(onlyValues3);
const pair3 = Object.entries(bottle3);
// console.log(pair3);
// P:04
const bottle4 = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
const onlyKeys4 = Object.keys(bottle4);
console.log(onlyKeys4);
const onlyValues4 = Object.values(bottle4);
console.log(onlyValues4);
const pair4 = Object.entries(bottle4);
console.log(pair4);
