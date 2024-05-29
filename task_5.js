const exponent = (x, n) => {

    // тут производятся сложные вычисления на несколько строк кода.

    // если нужно что-то вернуть из такой функции — используйте return

    // иначе функция будет вести себя как процедура
    let result = x;
    for (let exp = 1; exp < n; exp++) {
        result *=x;
    }


    return result;

};

// const result = exponent(0,8)
// const result = exponent(1,3)
// const result = exponent(5,8)
const result = exponent(2,2)

console.log(result)