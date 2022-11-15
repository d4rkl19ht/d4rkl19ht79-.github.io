const myHeader = document.querySelector('h1');
const btnChangeUser_ = document.getElementById('btnChangeUser');
const btnClearUser_ = document.getElementById('btnClearUser');

function setHeader()
{
	if(localStorage.getItem('name')!= null) {
		myHeader.textContent = 'Welcome ' + localStorage.getItem('name') + '!';
	} else {
		myHeader.textContent = 'Mozilla is cool!';
	}
};

alert('hit')


btnChangeUser.onclick = () => {
	alert('btnChangeUser clicked!');
	const name = prompt('Enter user name: ');
	localStorage.setItem('name', name);
	setHeader();
}

setHeader();

btnClearUser.onclick = () => {
	alert('btnClearUser clicked!');
	localStorage.clear();
	setHeader();
}