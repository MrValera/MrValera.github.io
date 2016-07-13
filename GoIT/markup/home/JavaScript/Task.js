var number = prompt('Enter the number');
var exponent = prompt('Enter the exponent');

// функция для определения четности возводимого в степень числа
var isEven = function(someNumber) {
	return (someNumber % 2 == 0) ? true : false;
};

// функция возведения числа в степень
function pow(number, exponent) {
	var result = 1;
	if (exponent > 0) {
		for (var i = 0; i < exponent; i++) {
			result = result * number;
		}
	}
		else
			if (exponent < 0) {
				for (var i = 0; i < Math.abs(exponent); i++) {
				result = result * number;
				}
			result = 1 / result;
		}
		else {
			result = 'The exponent can`t be "0" ';
		}

	if (number < 0 && isEven(number) == false) {
	console.log('Your result is -', result);
	}
	else {
		console.log('Your result is ', result);
	}
}

var calculationResult = pow (number, exponent);
