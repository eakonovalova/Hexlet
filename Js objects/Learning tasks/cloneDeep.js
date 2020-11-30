// Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.
//
//     import cloneDeep from '../objects.js';
//
// const data = {
//     key: 'value',
//     key2: {
//         key: 'innerValue',
//         innerKey: {
//             anotherKey: 'anotherValue',
//         },
//     },
// };
//
// // result имеет такую же структуру как и data
// const result = cloneDeep(data);
//
// // Но внутри другие объекты
// result.key2 !== data.key2; // true
// result.key2.innerKey !== data.key2.innerKey; // true
// Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.
//
//     Подсказки
// Для рекурсивного запуска понадобится имя для функции
// _.isObject()
// Рекурсия
// Для реализации этой задачи нельзя использовать функцию cloneDeep() библиотеки lodash.

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

import _ from 'lodash';

// BEGIN (write your solution here)
const cloneDeep = (obj) => {
    const newObj = {};
    const keysArr = Object.keys(obj);
    for (const key of keysArr) {
        if (_.isObject(obj[key])) {
            newObj[key] = _.cloneDeep(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};
export default cloneDeep;
// END
