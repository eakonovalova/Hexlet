// Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:
//
// Исходный объект
// Список ключей которые нужно заменить
// Данные, которые нужно сливать в исходный объект
// В случае, когда список ключей пустой, нужно сливать все данные полностью.
//
//     import fill from '../objects.js';
//
// const company = {
//     name: null,
//     state: 'moderating',
// };
//
// const data = {
//     name: 'Hexlet',
//     state: 'published',
// };
//
// // Вызовы ниже нужно рассматривать как независимые
//
// fill(company, ['name'], data);
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// // }
//
// fill(company, [], data);
// // {
// //   name: 'Hexlet',
// //   state: 'published',
// // }
// Попробуйте решить эту задачу с помощью слияния.
//
//     Подсказки
// _.pick()

// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
export const fill = (obj, keys, data) => {
    if (keys.length === 0) {
        Object.assign(obj, data);
    }
    else {
        const adds = _.pick(data, keys);
        Object.assign(obj, adds);
    }
    return;
};
export default fill;
// END
