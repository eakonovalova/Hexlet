// Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы внутри него в обратном порядке.
//
//     Примеры
// import { reverse } from './arrays';
//
// const names = ['john', 'smith', 'karl'];
//
// reverse(names);
// console.log(names); // => ['karl', 'smith', 'john']
//
// reverse(names);
// console.log(names); // => ['john', 'smith', 'karl']
// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().
//
//     Подсказки
// Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний, второй и предпоследний и так далее до середины.

// @ts-check
/* eslint-disable no-param-reassign, import/prefer-default-export */

// BEGIN (write your solution here)
export const reverse = (arr) => {
    let lastIndex = arr.length - 1;
    let i = 0;
    let keeper;
    while (i < arr.length / 2) {
        keeper = arr[i];
        arr[i] = arr[lastIndex];
        arr[lastIndex] = keeper;
        i += 1;
        lastIndex -= 1;
    }
    return arr;
};
export default reverse;
// END
