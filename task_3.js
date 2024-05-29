function example(num){

 // возвращаем функцию

  return function(num2){

    return num+num2

  }

}

// в переменную func записываем результат выполнения функции example

// функция, которая передаётся как аргумент, должна быть без круглых скобок

const func = example(23);
const sum = func (77)

console.log(sum)