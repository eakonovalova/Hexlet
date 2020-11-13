// info.js
// Реализуйте и экспортируйте асинхронную функцию compareFileSizes(), которая сравнивает размеры двух файлов. Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.
//
// import { compareFileSizes } from './info.js';
//
// compareFileSizes('filepath1', 'filepath2', (_err, result) => console.log(result));
// Подсказка
// Для реализации этого задания, нужно воспользоваться функцией fs.stat, которая использовалась в примерах теории
// Math.sign

// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const compareFileSizes = (filepath1, filepath2, cbForLast) => {

    fs.stat(filepath1, (_error1, data1) => {
        fs.stat(filepath2, (_error2, data2) => {
            const result = Math.sign(data1.size - data2.size);
            cbForLast(null, result);
        })
    })

};

export default compareFileSizes;
// END
