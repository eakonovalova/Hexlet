// Протестируйте функцию getFilesCount(path, log), которая считает количество всех файлов в указанной директории и всех поддиректориях. В отличие от предыдущей версии задания, здесь нас интересует только то, что эта функция выполняет логирование. Мы хотим убедиться, что она отправляет сообщение в лог. Для этого придётся воспользоваться моком.
//
//     Подсказки
// toHaveBeenCalledTimes
// toHaveBeenCalledWith
// обратите внимание в документации где создаётся мок.


// @ts-check

import path from 'path';
import { jest } from '@jest/globals';
import getFunction from '../functions.js';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('__fixtures__', name);

// BEGIN (write your solution here)
test('getFilesCount', () => {
    const callback = jest.fn();
    const fixturePath = getFixturePath('nested');
    getFilesCount(fixturePath, callback);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith('Go!');
});
// END
