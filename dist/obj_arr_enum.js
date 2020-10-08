"use strict";
const person = {
    name: 'bill',
    age: 35
};
console.log(person.nickName);
const person2 = {
    name: 'tom',
    age: 20
};
console.log(person2.name);
let hobbies;
hobbies = ['anime', 3];
const person3 = {
    name: 'tom',
    age: 20,
    hobbies: ['anime', 'music'],
    role: [0, 'write']
};
person3.role[0] = 1;
person3.role[0] = 'a';
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 4] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOER"] = 6] = "AUTHOER";
})(Role || (Role = {}));
;
const person4 = {
    name: 'tom',
    age: 20,
    hobbies: ['anime', 'music'],
    role: Role.ADMIN
};
//# sourceMappingURL=obj_arr_enum.js.map