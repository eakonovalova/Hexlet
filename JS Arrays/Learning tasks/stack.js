// Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
//
//     import isBracketStructureBalanced from './strings.js';
//
// // Пример вложенности
// isBracketStructureBalanced('(>');  // false
// isBracketStructureBalanced('()');  // true
// isBracketStructureBalanced('[()]');  // true
// isBracketStructureBalanced('{<>}}'); // false
// Функция должна поддерживать, минимум, четыре вида скобок: круглые — (), квадратные — [], фигурные — {} и угловые — <>.
//
// Подсказки
// Решение учителя использует метод indexOf

// @ts-check
/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

// BEGIN (write your solution here)
const isBracketStructureBalanced = (str) => {
    const stack = [];
    for (const item of str) {
        if (openingSymbols.includes(item)) {
            stack.push(item);
        } else {
            const i = closingSymbols.indexOf(item);
            const pairItem = openingSymbols[i];
            if (stack.pop() !== pairItem) return false;
        }
    }
    return stack.length === 0;
};
export default isBracketStructureBalanced;
// END
