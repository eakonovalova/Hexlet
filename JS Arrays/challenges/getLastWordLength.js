// Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов.
//
//     Примеры
// getLastWordLength(''); // 0
//
// getLastWordLength('man in BlacK'); // 5
//
// getLastWordLength('hello, world!  '); // 6

// BEGIN (write your solution here)
const getLastWordLength = (str) => {
    if (str.length === 0) {
        return 0;
    }

    const wordsArray = str.split(' ');

    const wordsWithoutSpases = [];
    for (const word of wordsArray) {
        if (word !== ' ' && word !== '' ) {
            wordsWithoutSpases.push(word)
        }
    }

    const lastWord = wordsWithoutSpases[wordsWithoutSpases.length - 1];
    return lastWord.length;
};

export default getLastWordLength;
// END
//
// // BEGIN
// export default (str) => {
//     const words = str.trim().split(' ');
//     const lastWord = words[words.length - 1];
//     return lastWord.length;
// };
// // END