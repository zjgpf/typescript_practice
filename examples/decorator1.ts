function Logger(constructor: Function){
	console.log('logging...');
	console.log(constructor);
}
@Logger
class Person {
	name = 'Tim';
	constructor() {
		console.log('Creating person obj...');
	}
}
const pers = new Person();

function Logger2(msg: string){
	console.log('logging2...');
	return function(constructor: Function){
		console.log(msg);	
	};
}
@Logger2('hi there')
class Person2 {
	name = 'Anna';
	constructor() {
		console.log('Creating person2 obj...');
	}
}
const pers2 = new Person2();

function WithTemplate(template: string, hookId: string){
	return function(_:Function){
		const hookEl = document.querySelector(hookId);	
		if (hookEl) hookEl.innerHTML = template;
	}
}
@WithTemplate('hi there', '#h1_1')
class Person3 {
	name = 'Max';
	constructor() {
		console.log('Creating person3 obj...');
	}
}
const pers3 = new Person3();

function WithTemplate2(template: string, hookId: string){
	return function(constructor:any){
		const hookEl = document.querySelector(hookId);	
		const p = new constructor();
		if (hookEl) hookEl.innerHTML = template+', I\'m '+p.name;
	}
}
@WithTemplate2('hi there', '#h1_2')
class Person4 {
	name = 'Lucy';
	constructor() {
		console.log('Creating person4 obj...');
	}
}
const pers4 = new Person4();
