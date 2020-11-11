// tests/set.test.js
// Напишите тесты для функции set(obj, path, value) возвращающей объект, в котором она изменяет (или добавляет) значение по указанному пути. Функция мутирует объект.
//
//     const object = { a: [{ b: { c: 3 } }] };
//
// set(object, 'a[0].b.c', 4);
// console.log(object.a[0].b.c); // => 4
//
// set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object.x[0].y.z); // => 5
// Подсказки
// Переиспользуйте объект данных
// _.set
import _ from 'lodash';
import getFunction from '../functions';

const set = getFunction();
// BEGIN
let data;
let dataCopy;

beforeEach(() => {
    data = {
        a: [
            {
                b: {
                    c: 3,
                },
            },
        ],
    };
    dataCopy = _.cloneDeep(data);
});

test('plain set', () => {
    set(data, 'a', 'value');
    dataCopy.a = 'value';
    expect(data).toEqual(dataCopy);
});

test('nested set', () => {
    set(data, 'a[0].b.c', true);
    dataCopy.a[0].b.c = true;
    expect(data).toEqual(dataCopy);
});

test('set new property', () => {
    set(data, 'a[0].b.d', false);
    dataCopy.a[0].b.d = false;
    expect(data).toEqual(dataCopy);
});
// END