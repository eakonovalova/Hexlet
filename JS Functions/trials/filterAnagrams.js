// Анаграммы — это слова, которые состоят из одинаковых букв. Например:
//
// спаниель — апельсин
// карат — карта — катар
// топор — ропот — отпор
// filterAnagrams.js
// Реализуйте и экспортируйте по умолчанию функцию, которая находит все анаграммы слова. Функция принимает исходное слово и список для проверки (массив), а возвращает массив всех анаграмм. Если в списке слов отсутствуют анаграммы, то возвращается пустой массив.
//
//     Примеры
// filterAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// // ['aabb', 'bbaa']
//
// filterAnagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// // ['carer', 'racer']
//
// filterAnagrams('laser', ['lazing', 'lazy',  'lacer']);


// @ts-check

// BEGIN (write your solution here)

const filterAnagrams = (word, wordsArr) => {
    let result = [];
    const sortedWord = word.split("").sort().join("");

    for (const wordForChek of wordsArr) {
        let search = wordForChek.split("").sort().join("");
        if (search === sortedWord) result.push(wordForChek);
    }
    return result;
};

export default filterAnagrams;

// END
