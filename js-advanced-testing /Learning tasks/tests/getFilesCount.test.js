// Протестируйте функцию getFilesCount(), которая считает количество всех файлов в указанной директории и всех поддиректориях.
//
//     const filesCount = getFilesCount('/path/to/directory');
// У этой функции есть дополнительное поведение. Во время обхода файлов, она записывает информацию об этом (какие файлы были задействованы) в специальный файл, который называется журналом действий или логом.
//
//     Запись в файл является нежелательным побочным эффектом. Каждый запуск будет заполнять какой-то файл, который мы никак не используем. От него нужно избавиться. Все что мы хотим – чтобы функция считала количество файлов. Сделать это можно так. Для записи в файл, функция getFilesCount(), использует другую функцию, которую можно подменить:
//
//     const getFilesCount = (path, log = writeDataToFile) => {
//         // Где-то внутри  во время работы
//         writeDataToFile(`file ${name} has been processed`);
//     };
// Для подмены нужно передать вторым параметром функцию-пустышку, которая не будет ничего делать. В таком случае ее вызов внутри getFilesCount() хоть и отработает, но не породит побочного эффекта.
//
//     Подсказки
// Передайте этой функции путь до директории внутри fixtures и убедитесь в том что она правильно посчитала количество файлов внутри

// @ts-check

import path from 'path';
import _ from 'lodash';
import getFunction from '../functions.js';

const getFilesCount = getFunction();

const getFixturePath = (name) => path.join('__fixtures__', name);

// BEGIN (write your solution here)

test('get files count from flat', () => {
    const pathToFlat = getFixturePath('flat');
    const actual = getFilesCount(pathToFlat, _.noop);
    expect(actual).toBe(3);
});

test('get files count from nested', () => {
    const pathToFlat = getFixturePath('nested');
    const actual = getFilesCount(pathToFlat, _.noop);
    expect(actual).toBe(4);
});
// END
