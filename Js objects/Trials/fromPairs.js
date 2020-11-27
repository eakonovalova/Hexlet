// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.
//
//     Примечания
// Если при конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары:
// fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// // { 'cat': 11, 'dog': 6 }
// Примеры
// fromPairs([['fred', 30], ['barney', 40]]);
// // { 'fred': 30, 'barney': 40 }

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const fromPairs = (arr) => {
    const result = {};
    for (const [key, value] of arr) {
        result[key] = value;
    }
    return result;
};

export default fromPairs;
// END
