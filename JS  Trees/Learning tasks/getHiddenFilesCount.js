// Реализуйте и экспортируйте по умолчанию функцию, которая считает количество скрытых файлов в директории и всех поддиректориях. Скрытым файлом в Linux системах считается файл, название которого начинается с точки.
//
//     Пример
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
// import getHiddenFilesCount from '../getHiddenFilesCount.js';
//
// const tree = mkdir('/', [
//     mkdir('etc', [
//         mkdir('apache'),
//         mkdir('nginx', [
//             mkfile('.nginx.conf', { size: 800 }),
//         ]),
//         mkdir('.consul', [
//             mkfile('.config.json', { size: 1200 }),
//             mkfile('data', { size: 8200 }),
//             mkfile('raft', { size: 80 }),
//         ]),
//     ]),
//     mkfile('.hosts', { size: 3500 }),
//     mkfile('resolve', { size: 1000 }),
// ]);
//
// getHiddenFilesCount(tree); // 3

// @ts-check

import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)
const getHiddenFilesCount = (tree) => {
    const name = getName(tree);

    if (isFile(tree)) {
        return _.startsWith(name, '.') ? 1 : 0;
    }

    const children = getChildren(tree);

    const decedantCounts = children.map(getHiddenFilesCount);
    return _.sum(decedantCounts);
};

export default getHiddenFilesCount;
// END
