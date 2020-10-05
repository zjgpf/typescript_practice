"use strict";
var person = {
    name: 'bill',
    age: 35
};
console.log(person.nickName);
var person2 = {
    name: 'tom',
    age: 20
};
console.log(person2.name);
var hobbies;
hobbies = ['anime', 3];
var person3 = {
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
var person4 = {
    name: 'tom',
    age: 20,
    hobbies: ['anime', 'music'],
    role: Role.ADMIN
};
