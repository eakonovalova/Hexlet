// Это задание напрямую не связано с теорией урока, но позволяет еще больше прокачаться в работе с асинхронным кодом.
//
//     В библиотеке async есть функция waterfall(), которая позволяет строить цепочки асинхронных функций без необходимости вкладывать их друг в друга. Подробнее о том как она работает, посмотрите в документации. Попробуйте решить данное упражнение с применением этой функции.
//
//     file.js
// Реализуйте и экспортируйте асинхронную функцию unionFiles(), которую мы рассматривали в предыдущих уроках. Вот её обычное решение на колбеках:
//
//     Примеры
// import fs from 'fs';
//
// const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
//     fs.readFile(inputPath1, 'utf-8', (error1, data1) => {
//         if (error1) {
//             cb(error1);
//             return;
//         }
//         fs.readFile(inputPath2, 'utf-8', (error2, data2) => {
//             if (error2) {
//                 cb(error2);
//                 return;
//             }
//             fs.writeFile(outputPath, `${data1}${data2}`, (error3) => {
//                 if (error3) {
//                     cb(error3);
//                     return;
//                 }
//                 cb(null); // не забываем последний успешный вызов
//             });
//         });
//     });
// };
// Подсказки
// Попробуйте написать её, используя указанную выше функцию waterfall.

// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';
import async from 'async';

const { waterfall } = async;

// BEGIN (write your solution here)
export const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
    async.waterfall(
        [
            (cb) => {
                fs.readFile(inputPath1, (err1, data1) => cb(err1, data1));
            },
            (data1, cb) => {
                fs.readFile(inputPath2, (err2, data2) => cb(err2, data1, data2));
            },
            (data1, data2, cb) => {
                fs.writeFile(outputPath, `${data1}${data2}`, (err3, data3) => cb(err3, data3))
            }
        ], cb);
};

export default unionFiles;
// END
