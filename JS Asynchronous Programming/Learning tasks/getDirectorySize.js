// Это упражнение вы уже делали, но теперь то же самое нужно сделать с помощью промисов.
//
//     file.js
// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории).
//
// Пример:
//     import { getDirectorySize } from './file.js';
//
// getDirectorySize('/usr/local/bin').then(console.log);
// Подсказка
// fsPromises.readdir - чтение содержимого директории
// path.join - конструирует пути
// fsPromises.stat - информация о файле
// _.sumBy - нахождение суммы в массиве

// @ts-check
/* eslint-disable import/prefer-default-export */

import path from 'path';
import _ from 'lodash';
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const getDirectorySize = (dirPath) =>
    fs
        .readdir(dirPath)
        .then((files) => files.map((file) => fs.stat(path.join(dirPath, file))))
        .then((arr) => Promise.all(arr))
        .then((stats) => stats.filter((stat) => stat.isFile()))
        .then((filtered) => _.sumBy(filtered, "size"));

export default getDirectorySize;
// END
