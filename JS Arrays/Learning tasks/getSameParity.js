// Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.
//
//     Примеры
// getSameParity([]);        // []
// getSameParity([1, 2, 3]); // [1, 3]
// getSameParity([1, 2, 8]); // [1]
// getSameParity([2, 2, 8]); // [2, 2, 8]
// Подсказки
// Проверка чётности - остаток от деления: item % 2 === 0 — чётное число.
//     Если на вход функции передан пустой массив, то она должна вернуть пустой массив.
//     Для работы с отрицательными числами может понадобиться функция нахождения модуля Math.abs


// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const getSameParity = (arr) => {
    const result = [];
    if (arr[0] % 2 === 0) {
        for (const num of arr) {
            if (num % 2 === 0) {
                result.push(num);
            }
        }
    }
    for (const num of arr) {
        if (num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
};

export default getSameParity;
// END
