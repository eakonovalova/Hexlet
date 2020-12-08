// Реализуйте абстракцию для работы с рациональными числами включающую в себя следующие функции:
//
//     Конструктор makeRational() - принимает на вход числитель и знаменатель, возвращает дробь.
//     Селектор getNumer() - возвращает числитель
// Селектор getDenom() - возвращает знаменатель
// Сложение add() - складывает переданные дроби
// Вычитание sub() - находит разность между двумя дробями
// Не забудьте реализовать нормализацию дробей удобным для вас способом.
//
//     const num1 = makeRational(3, 9);
// getNumer(num1); // 1
// getDenom(num1); // 3
//
// const num2 = makeRational(10, 3);
//
// const num3 = add(num1, num2);
// numToString(num3); // '11/3'
//
// const num4 = sub(num1, num2);
// numToString(num4); // '-3/1'
// Подсказки
// Действия с дробями
// Функция getGcd() находит наибольший общий делитель двух чисел (уже импортирована в модуль)
// Функция numToString() возвращает строковое представление числа (используется для отладки)

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

const getNumer = (numional) => numional.numer;
const getDenom = (numional) => numional.denom;

const add = (num1, num2) => {
    const numer1 = getNumer(num1);
    const numer2 = getNumer(num2);
    const denom1 = getDenom(num1);
    const denom2 = getDenom(num2);
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    return makeRational(numer, denom);
};

const sub = (num1, num2) => {
    const numer1 = getNumer(num1);
    const numer2 = getNumer(num2);
    const denom1 = getDenom(num1);
    const denom2 = getDenom(num2);
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 - numer2 * denom1;
    return makeRational(numer, denom);
};
// END

const numToString = (num) => `${getNumer(num)}/${getDenom(num)}`;

export {
    makeRational,
    getNumer,
    getDenom,
    add,
    sub,
    numToString,
};
