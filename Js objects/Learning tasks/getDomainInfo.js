// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:
//
//     import getDomainInfo from './domain.js';
//
// // Если домен передан без указания протокола,
// // то по умолчанию берется http
// getDomainInfo('yandex.ru')
// // {
// //   scheme: 'http',
// //   name: 'yandex.ru',
// // }
//
// getDomainInfo('https://hexlet.io');
// // {
// //   scheme: 'https',
// //   name: 'hexlet.io',
// // }
//
// getDomainInfo('http://google.com');
// // {
// //   scheme: 'http',
// //   name: 'google.com',
// // }
// Подсказки
// startsWith
// replace

// @ts-check
import _ from 'lodash';

// BEGIN (write your solution here)
export const getDomainInfo = (website) => {
    let scheme;
    if (website.startsWith('https')) {
        scheme = 'https';
    } else {
        scheme = 'http';
    }
    const name = _.last(website.split('/'));
    return { scheme, name };
};

export default getDomainInfo;
// END
