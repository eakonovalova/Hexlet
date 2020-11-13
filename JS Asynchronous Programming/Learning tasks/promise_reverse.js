// Реализуйте и экспортируйте асинхронную функцию reverse(), которая изменяет порядок расположения строк в файле на обратный.
//
//     import { reverse } from './file.js';
//
// // До
// // one
// // two
// reverse(filepath);
//
// // После
// // two
// // one

// @ts-check
/* eslint-disable import/prefer-default-export */
import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const reverse = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
        .then((data1) => data1.split("\n").reverse().join("\n"))
        .then((data2) => fs.writeFile(filepath, data2))
};

export default reverse;
// END
