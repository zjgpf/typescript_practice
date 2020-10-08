const UI_btn = document.querySelector('#btn1')!;

function clickMe(message: string) {
	debugger
	console.log('hello'+message);
}

UI_btn.addEventListener('click', clickMe.bind(null, ' there'));
