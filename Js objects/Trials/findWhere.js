// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив (элементы которого — это объекты) и пары ключ-значение (тоже в виде объекта), а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть null.
//
//     Примеры
// findWhere(
//     [
//         { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
//         { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
//         { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
//         { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
//         { title: 'Still foooing', author: 'FooBar', year: 3333 },
//         { title: 'Happy Foo', author: 'FooBar', year: 4444 },
//     ],
//     { author: 'Shakespeare', year: 1611 }
// ); // { title: 'Cymbeline', 'author: 'Shakespeare', 'year: 1611 }

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
// BEGIN (write your solution here)
const findWhere = (books, keys) => {
    const objKeys = Object.keys(keys);
    for (const book of books) {
        let match = 0;
        for (let key of objKeys) {
            if (book[key] === keys[key]) match += 1;
        }
        if (match === objKeys.length) return book;
    }
    return null;
};

export default findWhere;
// END
