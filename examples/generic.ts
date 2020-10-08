const promise:Promise<string> = new Promise((res,rej)=>{
	setTimeout(() => res('hi there'),2000);
});
promise.then( data => console.log(data.split(' ')));

const promise2:Promise<number> = new Promise((res,rej)=>{
	setTimeout(() => res('hi there'),2000);
});

function merge(objA: Object, objB: Object){
	return Object.assign(objA, objB);
}

const res = merge({name:'Tom'}, {age:30});
console.log(res.age);

function merge2<T,U>(objA: T, objB: U){
	return Object.assign(objA, objB);
}
const res2 = merge2({name:'Tom'}, {age:30});
console.log(res2.age);

function merge3<T,U>(objA: T, objB: U):T&U{
	return Object.assign(objA, objB);
}
const res3 = merge3({name:'Tom'}, {age:30});
console.log(res3.age);

function merge4<T extends object,U extends object>(objA: T, objB: U){
	return Object.assign(objA, objB);
}
const res4 = merge4({name:'Tom'}, 30);
console.log(res4);

interface Lengthy {
	length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value.';
	if (element.length === 1) {
		descriptionText = 'Got 1 element.';
	} else if (element.length > 1) {
		descriptionText = 'Got ' + element.length + ' elements.';
	}
	return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T,U extends keyof T>(obj:T, key:U){
	return obj[key];
}
extractAndConvert({name:'Tom',age:30},'age1');

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];
	addItem(item: T) {
		this.data.push(item);
	}
	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1); // -1
	}
	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// // const maxObj = {name: 'Max'};
// // objStorage.addItem(maxObj);
// // objStorage.addItem({name: 'Manu'});
// // // ...
// // objStorage.removeItem(maxObj);
// // console.log(objStorage.getItems());

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}
function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;
	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// // names.pop();
