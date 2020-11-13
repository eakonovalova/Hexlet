// Реализуйте и экспортируйте асинхронную функцию getDirectorySize(), которая считает размер переданной директории (не включая поддиректории). Анализ размера файла должен происходить параллельно, для этого воспользуйтесь библиотекой async
//
// Примеры
// import { getDirectorySize } from './info.js';
//
// getDirectorySize('/usr/local/bin', (err, size) => {
//     console.log(size);
// });
// Подсказки
// fs.readdir() - чтение содержимого директории
// path.join() - конструирует пути
// async.map()
// fs.stat() - информация о файле
// _.sumBy() - нахождение суммы в массиве

// @ts-checkhttps://ide-js-asynchronous-programming-parallel-execution-1978992.evaluator6-3.hexlet.io/?#
/* eslint-disable import/prefer-default-export */

import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN (write your solution here)
export const getDirectorySize = (dir, cb) => {

    fs.readdir(dir, (err1,  children) => {
        if (err1) {
            cb(err1);
            return;
        }

        const childsPath = children.map((child) => path.join(dir, child));

        async.map(childsPath, fs.stat, (err2, filesData) => {
            if (err2) {
                cb(err2);
                return;
            }
            const fileSizes = filesData.filter((file) => file.isFile());
            const totalSize = _.sumBy(fileSizes, 'size');
            cb(null, totalSize);
        })
    })
};

export default getDirectorySize;
// END
