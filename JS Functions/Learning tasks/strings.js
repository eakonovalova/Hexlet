// strings.js
// Реализуйте внутреннюю функцию takeLast(), которая возвращает последние n символов строки в обратном порядке. Количество символов передаётся в takeLast() вторым параметром. Если передаётся пустая строка или строка меньше необходимой длины, функция должна вернуть null.
// @ts-check

const run = (text) => {
    // BEGIN (write your solution here)
    const takeLast = (str, n) => {
        if (str.length === 0 || str.length < n) {
            return null;
        }
        const result = str.split('').reverse().join('');
        return result.split('', n).join('');
    };
    // END

    return takeLast(text, 4);
};

export default run;
