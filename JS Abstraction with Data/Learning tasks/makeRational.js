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

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

// BEGIN (write your solution here)
const makeRational = (a, b) => {
    const commonDivisor = getGcd(a, b);
    const number = a / commonDivisor;
    const denom = b / commonDivisor;
    return { number, denom };
};

const getNumer = (rat) => rat.number;
const getDenom = (rat) => rat.denom;

const add = (rat1, rat2) => {
    const rat1Number = getNumer(rat1) * getDenom(rat2);
    const rat2Number = getNumer(rat2) * getDenom(rat1);
    const ratsDenom = getDenom(rat1) * getDenom(rat2);
    const numberSum = rat1Number + rat2Number;
    return makeRational(numberSum, ratsDenom);
};

const sub = (rat1, rat2) => {
    const rat1Number = getNumer(rat1) * getDenom(rat2);
    const rat2Number = getNumer(rat2) * getDenom(rat1);
    const ratsDenom = getDenom(rat1) * getDenom(rat2);
    const numberSum = rat1Number - rat2Number;
    return makeRational(numberSum, ratsDenom);
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
