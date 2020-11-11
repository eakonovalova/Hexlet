// tests/take.test.js
// Напишите тесты для функции without(coll, [values]), которая принимает первым параметром массив и возвращает его копию, из которой исключены значения, переданные вторым и последующими параметрами.
//
// _.without([2, 1, 2, 3], 1, 2); // [3]
// Подсказки
// _.without
// @ts-check

import getFunction from '../functions.js';

const without = getFunction();

// BEGIN (write your solution here)
test('without', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    expect(without([])).toEqual([]);
});
// END
