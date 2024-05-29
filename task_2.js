function defineNum(num) {
    let propertyNum;
    let result;
    propertyNum = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                propertyNum = false;
            }
        }
        result = propertyNum ? `Это число ${num} - простое` : `Это число ${num} - составное`;
    } else if (num > 1000) {
        result = `Выход за диапазон`;
    }
    return result;

}

console.log(defineNum(0))
console.log(defineNum(2))
console.log(defineNum(237))
console.log(defineNum(2376))