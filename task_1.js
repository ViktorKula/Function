const array = [0, 1, 2, 3, 4, 5, -0, "hello", null, NaN]

function getSum(variable) {

	let even = 0,
		odd = 0,
		zero = 0;

	for (let i = 0; i < variable.length; i++) {
		if (typeof variable[i] === 'number' && !isNaN(variable[i])) {
			if (variable[i] === 0) {
				zero += 1;
			} else if (variable[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

	console.log('четных элементов: ', even,'|', 'нечетных элементов: ', odd)
	console.log('нулей: ', zero)
}

getSum(array);