// Перед тем, как делать упражнение, обязательно попробуйте поиграйте с этой утилитой в терминале, посмотрите её опции через man du. Экспериментировать нужно в локально установленной операционной системе.
//
//     du.js
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход директорию, а возвращает список узлов вложенных, (директорий и файлов) в указанную директорию на один уровень, и место которое, они занимают. Размер файла задается в метаданных. Размер директории складывается из сумм всех размеров файлов, находящихся внутри во всех поддиректориях. Сами директории размера не имеют.
//
//     Пример
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
// import du from '../du.js';
//
// const tree = mkdir('/', [
//     mkdir('etc', [
//         mkdir('apache'),
//         mkdir('nginx', [
//             mkfile('nginx.conf', { size: 800 }),
//         ]),
//         mkdir('consul', [
//             mkfile('config.json', { size: 1200 }),
//             mkfile('data', { size: 8200 }),
//             mkfile('raft', { size: 80 }),
//         ]),
//     ]),
//     mkfile('hosts', { size: 3500 }),
//     mkfile('resolve', { size: 1000 }),
// ]);
//
// du(tree);
// // [
// //   ['etc', 10280],
// //   ['hosts', 3500],
// //   ['resolve', 1000],
// // ]
// Примечания
// Обратите внимание на структуру результирующего массива. Каждый элемент — массив с двумя значениями: именем директории и размером файлов внутри.
//     Результат отсортирован по размеру в обратном порядке. То есть сверху самые тяжёлые, внизу самые лёгкие.
//     Подсказки
// sort

// @ts-check

import _ from 'lodash';
import {
    isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const du = (tree) => {
    const countSize = (node) => {
        if (isFile(node)) {
            const fileSize = getMeta(node).size;
            return fileSize;
        }
        const children = getChildren(node);
        const childrenSizes = children.map(countSize);
        return _.sum(childrenSizes);
    };

    const children = getChildren(tree);
    const result = children
        .reduce((acc, child) => {
            const name = getName(child);
            const size = countSize(child);
            acc.push([name, size]);
            return acc;
        }, []);
    return result.sort((a, b) => b[1] - a[1]);
};
// END
export default du;
