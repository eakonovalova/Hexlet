// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество слов в предложении и возвращает объект в котором свойства это слова (приведенные к нижнему регистру), а значения — это то сколько раз слово встретилось в предложении. Слова в предложении могут находиться в разных регистрах. Перед подсчетом их нужно приводить в нижний регистр, чтобы не пропускались дубли.
//
//     import countWords from './words.js';
//
// // Если предложение пустое, то возвращается пустой объект
// countWords('');
// // {}
//
// const text1 = 'one two three two ONE one wow';
// countWords(text);
// // {
// //   one: 3,
// //   two: 2,
// //   three: 1,
// //   wow: 1,
// // }
//
// const text2 = 'another one sentence with strange Words words';
// countWords(text);
// // {
// //   another: 1,
// //   one: 1,
// //   sentence: 1,
// //   with: 1,
// //   strange: 1,
// //   words: 2,
// // }
// Подсказки
// Для формирования массива слов поможет функция _.words
// toLowerCase – приведение к нижнему регистру

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
export const countWords = (str) => {
    const newStr = str.toLowerCase();
    const arr = _.words(newStr);

    const result = {};

    for (const word of arr) {
        if (_.has(result, word)) {
            result[word] += 1;
        } else {
            result[word] = 1;
        }
    }
    return result;
};

export default countWords;
// END