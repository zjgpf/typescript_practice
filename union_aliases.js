"use strict";
function combine(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number')
        return n1 + n2;
    return n1.toString() + n2.toString();
}
var resNum1 = combine(3, 1);
console.log(resNum1);
var resStr1 = combine('a', 'b');
console.log(resStr1);
function combine2(n1, n2, resConversion) {
    if (typeof n1 === 'number' && typeof n2 === 'number' || resConversion === 'as-number')
        return +n1 + +n2;
    return n1.toString() + n2.toString();
}
var resNum2_1 = combine2('3', '1', 'as-text');
console.log(resNum2_1);
var resStr2_2 = combine2('2', '1', 'as-num');
console.log(resStr2_2);
var resStr2_3 = combine2('2', '1', 'as-number');
console.log(resStr2_3);
function combine3(n1, n2, resConversion) {
    if (typeof n1 === 'number' && typeof n2 === 'number' || resConversion === 'as-number')
        return +n1 + +n2;
    return n1.toString() + n2.toString();
}
var resNum3_1 = combine3('3', '1', 'as-text');
console.log(resNum3_1);
var resStr3_2 = combine3('2', '1', 'as-num');
console.log(resStr3_2);
var resStr3_3 = combine3('2', '1', 'as-number');
console.log(resStr3_3);
