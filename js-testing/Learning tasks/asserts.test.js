// Напишите тесты для функции take(items, n), которая возвращает первые n элементов из массива:
//
//     take([1, 2, 3], 2); // [1, 2]
// take([], 2); // []
// take([4, 3], 9); // [4, 3]
// Подсказки
// _.take
// Asserts
// Выберите правильный способ сравнения: по ссылке или по значению
import { strict as assert } from 'assert';
import getFunction from '../functions.js';

const take = getFunction();

// BEGIN (write your solution here)
assert.deepStrictEqual(take([1, 2, 3, {a:1, b:2}], 2), [1, 2]);
assert.deepStrictEqual(take([1, 2, 3, {a:1, b:2}]), [1] );
assert.deepStrictEqual(take([]), [] );
assert.deepStrictEqual(take([1, 2, 3, {a:1, b:2}], 5), [1, 2, 3, {a:1, b:2}] );
// END
