// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел.
//
//     import addPrefix from './arrays.js';
//
// const names = ['john', 'smith', 'karl'];
//
// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
// // => ['Mr john', 'Mr smith', 'Mr karl'];
//
// console.log(names); // Старый массив не меняется!
// // => ['john', 'smith', 'karl'];

// BEGIN (write your solution here)

export const addPrefix = (names, prefix) => {
    const newNames = [];
    for (const name of names) {
        newNames.push(`${prefix} ${name}`);
    }
    return newNames;
};

export default addPrefix;
// END
