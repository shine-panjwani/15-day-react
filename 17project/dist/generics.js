"use strict";
function identity(value) {
    return value;
}
console.log(identity(6));
console.log(identity("Shine"));
console.log(identity(true));
console.log(identity([1, 2, 3]));
function giveParcel(item) {
    console.log("Delivering", item);
    return item;
}
console.log(giveParcel(3));
console.log(giveParcel("Shine"));
function makePair(a, b) {
    console.log(a, b);
    return [a, b];
}
;
console.log(makePair(3, "shine"));
