// Реализуйте абстракцию для работы с рациональными числами включающую в себя следующие функции:
//
//     Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь.
//     Селектор getNumer() - возвращает числитель
// Селектор getDenom() - возвращает знаменатель
// Сложение add() - складывает переданные дроби
// Вычитание sub() - находит разность между двумя дробями
// Не забудьте реализовать нормализацию дробей удобным для вас способом.
//
//     const rat1 = makeRational(3, 9);
// getNumer(rat1); // 1
// getDenom(rat1); // 3
//
// const rat2 = makeRational(10, 3);
//
// const rat3 = add(rat1, rat2);
// ratToString(rat3); // '11/3'
//
// const rat4 = sub(rat1, rat2);
// ratToString(rat4); // '-3/1'
// Подсказки
// Действия с дробями
// Функция getGcd() находит наибольший общий делитель двух чисел (уже импортирована в модуль)
// Функция ratToString() возвращает строковое представление числа (используется для отладки)

// @ts-check

import getGcd from './utils.js';

// BEGIN (write your solution here)
const greatestDivisor = (a, b) => {
    if (!b) return a;
    return Math.abs(greatestDivisor(b, a % b));
};

const makeRational = (numer, denom) => {
    const grDiv = greatestDivisor(numer, denom);
    return { numer: numer / grDiv, denom: denom / grDiv };
};

const getNumer = (rational) => rational.numer;
const getDenom = (rational) => rational.denom;

const add = (rat1, rat2) => {
    const numer1 = getNumer(rat1);
    const numer2 = getNumer(rat2);
    const denom1 = getDenom(rat1);
    const denom2 = getDenom(rat2);
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    return makeRational(numer, denom);
};

const sub = (rat1, rat2) => {
    const numer1 = getNumer(rat1);
    const numer2 = getNumer(rat2);
    const denom1 = getDenom(rat1);
    const denom2 = getDenom(rat2);
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 - numer2 * denom1;
    return makeRational(numer, denom);
};
// END

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

export {
    makeRational,
    getNumer,
    getDenom,
    add,
    sub,
    ratToString,
};
