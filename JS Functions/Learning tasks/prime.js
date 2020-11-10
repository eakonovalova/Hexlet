//
// Реализуйте и экспортируйте по умолчанию функцию, которая проверяет переданное число на простоту и печатает на экран yes или no.
//
//     Примеры
// sayPrimeOrNot(5); // 'yes'
// sayPrimeOrNot(4); // 'no'
// Подсказки
// Цель этой задачи — научиться отделять чистый код от кода с побочными эффектами.
//
//     Для этого выделите процесс определения того, является ли число простым, в отдельную функцию, возвращающую логическое значение. Это функция, с помощью которой мы отделяем чистый код от кода, интерпретирующего логическое значение (как 'yes' или 'no') и делающего побочный эффект (печать на экран).
//
// @ts-check
/* eslint-disable no-console */
// BEGIN (write your solution here)
const easyChek = (x) => {
    if (x === 2 || x === 3) {
        return true;
    }
    if (x < 2 || (x % 2 === 0)) {
        return false;
    }

    for (let i = 2; i < x; i = i + 1) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
};

const prime = (x) => {
    if (easyChek(x) === false) {
        console.log('no');
    }
    if (easyChek(x) === true) {
        console.log('yes');
    }
};

// END
export default prime;
