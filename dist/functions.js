"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function add2(n1, n2) {
    return n1 + n2;
}
function printRes(n1) {
    console.log(n1);
}
let combineValues;
combineValues = 5;
combineValues = add;
console.log(combineValues(1, 2));
let combineValues2;
combineValues2 = printRes;
combineValues2 = add;
console.log(combineValues2(1, 2));
function addAndHandle(a, b, cb) {
    const res = a + b;
    const res2 = cb(res);
    console.log(res2);
}
//typescript allow return in cb even if it defined void
addAndHandle(2, 12, (num) => { console.info(num); return num; });
//# sourceMappingURL=functions.js.map