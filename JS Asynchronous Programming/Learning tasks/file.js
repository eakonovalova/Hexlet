// Реализуйте и экспортируйте функцию move, которая асинхронно перемещает файл из одного места в другое. Ее параметры:
//
//     Путь до файла исходника
// Путь по которому нужно копировать файл
// Колбек, у которого единственный аргумент — ошибка.
//     Алгоритм работы функции следующий:
//
//     Читаем исходный файл
// Создаём новый файл и записываем туда данные исходного файла (это важно сделать до попытки удаления исходного файла!)
// Удаляем исходный файл
// Реальная функция move устроена не так. Если исходник и приемник находятся на одном устройстве, то копирования не происходит, меняются лишь указатели в фс
//
// import { move } from './file.js';
//
// move('/opt/myfile', '/tmp/newfile', (error) => {
//     if (error) {
//         console.log('oops');
//         return;
//     }
//     console.log('yes!')
// });
// Другие примеры смотрите в тестах
//
// Подсказки
// fs.unlink - удаление файла
// fs.readFile - чтение файла
// fs.writeFile - запись в файл

// @ts-check
/* eslint-disable import/prefer-default-export */
import fs from 'fs';

// BEGIN (write your solution here)
export const move = (pathfrom, pathwhere, cb) => {
    fs.readFile(pathfrom, (error1, data) => {
        if (error1) {
            cb(error1);
            return;
        }
        fs.writeFile(pathwhere, data, (error2, data) => {
            if (error2) {
                cb(error2);
                return;
            }
            fs.unlink(pathfrom, (error3) => {
                if (error3) {
                    cb(error3);
                    return;
                }
                cb(null);
            })
        })
    })
};

export default move;
// END
