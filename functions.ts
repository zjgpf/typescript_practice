function add(n1:number, n2:number):number{
	return n1+n2;
}

function add2(n1:number, n2:number):string{
	return n1+n2;
}

function printRes(n1:number):void{
	console.log(n1);
}

let combineValues:Function;
combineValues=5;
combineValues=add;
console.log(combineValues(1,2));

let combineValues2: (a:number, b:number)=>number;
combineValues2 = printRes;
combineValues2 = add;
console.log(combineValues2(1,2));

function addAndHandle(a:number, b:number, cb:(a:number)=>void){
	const res = a+b;
	const res2 = cb(res);
	console.log(res2);
}

//typescript allow return in cb even if it defined void
addAndHandle(2,12, (num)=>{ console.info(num); return num });
