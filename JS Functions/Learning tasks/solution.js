// solution.js
// Реализуйте функцию, которая конвертирует даты в массив человеко-читаемых строк на английском языке. Каждая из дат представлена массивом [2001, 10, 18], в котором первый элемент — это год, второй — месяц, и третий — число. Функция на вход должна принимать любое количество параметров. Если в функцию ничего не было передано, она должна вернуть пустой массив. Экспортируйте функцию по умолчанию.
//
//     Примеры:
// convert();
// // []
//
// convert([1993, 3, 24]);
// // ['Sat Apr 24 1993']
//
// convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18]);
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
// Подсказки
// Для работы с датами воспользуйтесь объектом new Date() и его методом toDateString()

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
const solution = (...dates) => {
    const result = [];
    for (const data of dates) {
        const date = new Date(...data);
        date.toDateString();
        result.push(date.toDateString());
    }
    return result;
};

// END
export default solution;

