// Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.
//
//     import write from './writer.js';
//
// write('./myfile', 'data', () => {
//     console.log('success');
// });
// Подсказки:
//     для записи в файл используйте функцию fs.writeFile().

// @ts-check

import fs from 'fs';

// BEGIN (write your solution here)
const writer = (filepath, data, cb) => {
    fs.writeFile(filepath, data, cb);
};
export default writer;
// END