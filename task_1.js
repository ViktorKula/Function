const array = [0, 1, 2, 3, 4, 5, -0, "hello", null, NaN]
function getSum(self) {

	let even = 0,
		odd = 0,
		zero = 0;

	for (let i = 0; i < self.length; i++) {
		if (typeof self[i] === 'number' && !isNaN(self[i])) {
			if (self[i] === 0) {
				zero += 1;
			} else if (self[i] % 2 === 0) {
				even += 1;
			} else {
				odd += 1;
			}
		}
	}

	console.log('четных элементов: ', even)
	console.log('нечетных элементов: ', odd)
	console.log('нулей: ', zero)
}

getSum(array);