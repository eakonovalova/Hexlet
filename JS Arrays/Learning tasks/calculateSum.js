// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).
//
//     Примеры
// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// calculateSum(coll1); // 48
//
// const coll2 = [2, 0, 17, 3, 9, 15, 4];
// calculateSum(coll2); // 27
// В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression):
//
// const coll = [];
// calculateSum(coll); // 0

/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
export const calculateSum = (arr) => {
    if (arr.length === 0) 0;
    let okay = 0;
    for (const el of arr) {
        if (el % 3 === 0) okay = okay + el;
    }
    return okay;
};
export default calculateSum;
// END
