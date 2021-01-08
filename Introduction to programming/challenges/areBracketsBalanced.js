// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет, является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.
//
//     Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
//
//     Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
//     Закрывающая скобка не должна идти впереди открывающей.
//     import areBracketsBalanced from 'roundBracketsValidator';
//
// areBracketsBalanced('(())');  // true
// areBracketsBalanced('((())'); // false

// @ts-check
// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
    if (str.length % 2 !== 0 || str[0] === ')' || str[str.length - 1] === '(') return false;

    let acc = 0;
    for (let i = 0; i < str.length; i += 1) {
        acc += (str[i] === '(') ? 1 : -1;
        if (acc < 0) return false;
    }
    return (acc === 0);
};

export default areBracketsBalanced;
// END
