// groupBy.js
// Реализуйте и экспортируйте по умолчанию функцию для группировки объектов по заданному свойству. Функция принимает аргументами массив объектов и название свойству для группировки. Она должна возвращать объект, где ключ - это значение по заданному свойству, а значение - массив с данными, подходящими для группы.
//
//     import groupBy from './groupBy.js';
//
// const students = [
//     { name: 'Tirion', class: 'B', mark: 3 },
//     { name: 'Keit', class: 'A', mark: 3 },
//     { name: 'Ramsey', class: 'A', mark: 4 },
// ];
//
// groupBy([], ''); // {}
// groupBy(students, 'mark');
// // {
// //   3: [
// //     { name: "Tirion", class: "B", mark: 3 },
// //     { name: "Keit", class: "A", mark: 3 },
// //   ],
// //   4: [
// //     { name: "Ramsey", class: "A", mark: 4 },
// //   ],
// // }
// Примечания
// Для решения используйте только reduce().
//     Аналогичная функция есть в lodash, но вам её нужно создать самостоятельно.

// @ts-check
import _ from 'lodash';
// BEGIN (write your solution here)
const groupBy = (students, key) => {

    const callback = (acc, student) => {
        if (!_.has(acc, student[key])) {
            acc[student[key]] = [];
        }
        acc[student[key]].push(student);
        return acc;
    };

    //   const callback = (acc, student) => {
    //   if (!_.has(acc, student.key)) {
    //     acc[student.key] = [];
    //   }
    //   acc[student.key].push(student);
    //   return acc;
    // };

    const arrByKey = students.reduce(callback, {});
    return arrByKey;
};

export default groupBy;
// END
