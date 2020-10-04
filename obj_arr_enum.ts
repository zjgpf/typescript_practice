const person = {
	name: 'bill',
	age: 35
};

console.log(person.nickName);

const person2: { name: string, age: number } = {
	name: 'tom',
	age: 20
}

console.log(person2.name);

let hobbies: string[];
hobbies = ['anime', 3];

const person3: { 
	name: string, 
	age: number,
 	hobbies: string[],
	role: [number, string]	
} = {
	name: 'tom',
	age: 20,
	hobbies: ['anime', 'music'],
	role: [0, 'write']
}

person3.role[0] = 1;
person3.role[0] = 'a';

enum Role { ADMIN=4, READ_ONLY, AUTHOER }; 

const person4 = {
	name: 'tom',
	age: 20,
	hobbies: ['anime', 'music'],
	role: Role.ADMIN
}
