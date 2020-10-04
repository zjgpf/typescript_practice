function combine(n1:number|string, n2:number|string){
	if (typeof n1 === 'number' && typeof n2 === 'number') return n1+n2;
	return n1.toString()+n2.toString();
}

const resNum1 = combine(3,1);
console.log(resNum1);

const resStr1 = combine('a', 'b');
console.log(resStr1);

function combine2(n1:number|string, n2:number|string, resConversion: 'as-number' | 'as-text'){
	if (typeof n1 === 'number' && typeof n2 === 'number' || resConversion === 'as-number') return +n1 + +n2;
	return n1.toString()+n2.toString();
}

const resNum2_1 = combine2('3','1', 'as-text');
console.log(resNum2_1);

const resStr2_2 = combine2('2', '1', 'as-num');
console.log(resStr2_2);

const resStr2_3 = combine2('2', '1', 'as-number');
console.log(resStr2_3);


type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine3(n1:Combinable, n2:Combinable, resConversion:ConversionDescriptor){
	if (typeof n1 === 'number' && typeof n2 === 'number' || resConversion === 'as-number') return +n1 + +n2;
	return n1.toString()+n2.toString();
}

const resNum3_1 = combine3('3','1', 'as-text');
console.log(resNum3_1);

const resStr3_2 = combine3('2', '1', 'as-num');
console.log(resStr3_2);

const resStr3_3 = combine3('2', '1', 'as-number');
console.log(resStr3_3);

