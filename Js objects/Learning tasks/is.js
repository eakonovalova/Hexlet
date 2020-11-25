// objects.js
// Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true если их структура одинаковая и false в обратном случае. Проверка должна проходить по свойствам name, state, website.
//
//     import is from './company.js';
//
// const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
// is(company1, company2); // false
//
// const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
// is(company1, company2); // true

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

// BEGIN (write your solution here)
export const is = (company1, company2) => {
    if (company1.name !== company2.name) {
        return false;
    }
    if (company1.state !== company2.state) {
        return false;
    }
    if (company1.website !== company2.website) {
        return false;
    }
    return true;
};

export default is;
// END