// tests/indexOf.test.js
// Напишите тесты для функции indexOf(items, value, [fromIndex=0]), которая возвращает индекс первого вхождения переданного элемента в массив, начиная поиск с индекса fromIndex, значение которого по умолчанию равно нулю:
//
//     indexOf([1, 2, 1, 2], 2); // 1
// indexOf([1, 2, 1, 2], 2, 2); // 3
// indexOf([2, 'one', 'cat', false], 8); // -1
// Подсказки
// _.indexOf

// @ts-check

import assert from 'power-assert';
import getFunction from '../functions.js';

const indexOf = getFunction();

// BEGIN (write your solution here)
// assert(indexOf([1, 2, 1, 2], 2, 2), 3);
// assert(indexOf([1, 2, 1, 2], 2), 1);
// assert(indexOf([], 2), -1);
// assert(indexOf([0, 1, 2, 3, 4], 1), 0);
//assert(indexOf([1, 2, 3, 4], 2) === 1);
//assert(indexOf([1, 2, 3, 2, 4], 2, 1) === 1);
assert(indexOf([1, 2, 3, 2, 4], 2, 2) === 3);
//assert(indexOf([1], 1) === 0);
//assert(indexOf([], 1) === -1);
// END