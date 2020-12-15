// Реализуйте и экспортируйте по умолчанию функцию, которая создает рациональное число. Рациональное число должно быть представлено объектом со следующими методами:
//
//     Геттер getNumer() - возвращает числитель
// Геттер getDenom() - возвращает знаменатель
// Геттер toString() - возвращает строковое представление числа
// Метод add() - складывает дробь на которой он был вызван с переданной дробью и возвращает новое рациональное число (не изменяет текущее!)
// import make from './rational.js';
//
// const rat1 = make(3, 9);
// rat1.getNumer(); // 3
// rat1.getDenom(); // 9
//
// const rat2 = make(10, 3);
//
// // Формула сложения: a / b + c / d = (a * d + b * c) / (b * d)
// const rat3 = rat1.add(rat2);
// rat3.toString(); // '99/27'

export const make = (numer, denom) => {
    const rational = {
        numer,
        denom,
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${this.numer}/${this.denom}`;
        },
        add(rat) {
            const a = this.numer;
            const b = this.denom;
            const c = rat.getNumer();
            const d = rat.getDenom();
            const newNumer = (a * d) + (b * c);
            const newDenom = (b * d);
            return make(newNumer, newDenom);
        },
    };
    return rational;
};

export default make;
// END
