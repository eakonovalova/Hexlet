// tests/gt.test.js
// Напишите тесты для функции _.gt(value, other), которая возвращает true в том случае, если value > other, и false в иных случаях.
//
// gt(3, 1); // true
//
// gt(3, 3); // false
//
// gt(1, 3); // false
// Подсказки
// _.gt

// @ts-check

import getFunction from '../functions.js';

const gt = getFunction();

// BEGIN (write your solution here)
test ('dt', () => {
    expect(gt(3, 1)).toBeTruthy();
    expect(gt(3, 3)).toBeFalsy();
    expect(gt(1, 3)).toBeFalsy();
});
// END
