// p:01

const bottle = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}
// p:02
const bottle1 = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
for (const key in bottle1) {
    const propValue = bottle1[key];
    // console.log(key, propValue);
}
// p:03
const bottle2 = { color: 'yellow', price: 100, isClined: true, capacity: 1 };
for (const key in bottle2){
    const value = bottle2[key];
    console.log(key, value);
}