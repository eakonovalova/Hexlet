// Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.
//
//     Например:
//
// import reverse from './reverse';
//
// reverse('str');    // rts
// reverse('hexlet'); // telxeh
// Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().
//
//     Подсказки
// Чтобы узнать длину строки, используйте свойство length:
//
//     'welcome'.length; // 7
// Чтобы получить подстроку из строки, используйте метод slice():
//
// 'welcome'.slice(1, 4); // 'elc';

// @ts-check
// BEGIN (write your solution here)
const reverse = (str) => {
    const reversedStr = [];
    for (let i = str.length - 1; i >= 0; i -= 1) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join('');
};

export default reverse;
// END
