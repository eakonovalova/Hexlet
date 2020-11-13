// Реализуйте и экспортируйте по умолчанию асинхронную функцию, которая читает данные файла по указанному пути и выводит их в консоль.
//
//     Примеры:
//
// import print from './printer.js';
// print('./myfile');
// Подсказки
// В теории был пример асинхронного чтения файла. Нужно сделать по аналогии.

// @ts-check
/* eslint-disable no-console */
// import fs from 'fs';
//
// BEGIN (write your solution here) (write your solution here)
const cb = (_error, data) => console.log(data);

const print = (path, a = 'utf-8') => {
    fs.readFile(path, 'utf-8', cb);
};

export default print;
// END
