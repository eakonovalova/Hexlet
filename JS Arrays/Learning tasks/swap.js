// Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
//
//     Примеры
// import { swap } from '../arrays';
//
// swap([]); // []
// swap([1]); // [1]
// swap([1, 2]); // [2, 1]
// swap(['one', 'two', 'three']); // ['three', 'two', 'one']
// Подсказки
// Чтобы поменять местами значения, нужно использовать третью переменную

// @ts-check
/* eslint-disable no-param-reassign, prefer-destructuring, import/prefer-default-export */

// BEGIN (write your solution here)
export const swap = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const first = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;
    return arr;
};

export default swap;
// END
