// Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
//
//     Примеры:
//
// reverseInt(13); // 31
// reverseInt(-123); // -321
// reverseInt(8900); // 98
// Подсказки
// Длина строки str находится так: str.length

// @ts-check
// BEGIN (write your solution here)
const reverseInt = (num) => {
    const str = Math.abs(num).toString();
    let result = '';

    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }

    return (num < 0) ? -parseInt(result, 10) : parseInt(result, 10);
};

export default reverseInt;
// END
