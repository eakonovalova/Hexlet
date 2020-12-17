// Вес Хэмминга — это количество единиц в двоичном представлении числа.
//
//     solution.js
// Реализуйте и экспортируйте по умолчанию функцию, которая считает вес Хэмминга.
//
//     Примеры
// hammingWeight(0); // 0
// hammingWeight(4); // 1
// hammingWeight(101); // 4

// BEGIN (write your solution here)
const hammingWeight = (num) => {

    const num01 = +(num).toString(2);
    const str = String(num01);
    const arr = str.split('');
    let ones = 0;

    for (const el of arr) {
        if (el === '1') {
            ones = ones + 1;
        }
    }
    return ones;
};
export default hammingWeight;
// END
