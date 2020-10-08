"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('Max', ' Schwarz');
result.split(' ');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = undefined;
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
// type UnknownEmployee = Employee | Admin;
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }
// printEmployeeInformation({ name: 'Manu', startDate: new Date() });
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a truck...');
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo ...' + amount);
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }
// useVehicle(v1);
// useVehicle(v2);
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }
// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case 'bird':
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed;
//   }
//   console.log('Moving at speed: ' + speed);
// }
// moveAnimal({type: 'bird', flyingSpeed: 10});
// // const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }
// interface ErrorContainer { // { email: 'Not a valid email', username: 'Must start with a character!' }
//   [prop: string]: string;
// }
// const errorBag: ErrorContainer = {
//   email: 'Not a valid email!',
//   username: 'Must start with a capital character!'
// };
//# sourceMappingURL=advancedTypes.js.map