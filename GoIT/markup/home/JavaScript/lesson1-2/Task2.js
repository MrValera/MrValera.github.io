var arrNames = new Array(5);
for (var i = 0; i < 5; i++) {
	arrNames[i] = prompt('Enter the name');
}
var myName = prompt('Please enter your name');

function compare(arrName, name) {
	for (var i = 0; i < arrName.length; i++) {
		if (arrName[i] == name) {
			return(alert(name + ", вы успешно вошли"));
		}
	}
		return(alert('Ошибка: такого имени нет в списке имен'));
}

	 compare(arrNames, myName);
