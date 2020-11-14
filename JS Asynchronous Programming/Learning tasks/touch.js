// file.js
// Реализуйте и экспортируйте асинхронную функцию touch(), которая создаёт файл, если его не существует.
//
//     import { touch } from './file.js';
//
// touch('/myfile').then(() => console.log('created!'));
// Подсказка
// fsPromises.access — проверка существования файла

// @ts-check
/* eslint-disable import/prefer-default-export */

import { promises as fs } from 'fs';

// BEGIN (write your solution here)
export const touch = (filepath) => {
    return fs.access(filepath)
        .catch((err) => {
            return fs.writeFile(filepath, '')
            throw err;
        })
};
export default touch;
// END
