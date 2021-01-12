// В программировании иногда приходится иметь дело с деньгами. В отличие от большинства других значений, деньги могут существовать в разных валютах, которые конвертируются друг в друга по определенным ставкам (они меняются со временем!). Из-за этого, часто, недостаточно просто хранить количество денег, нужно хранить и их валюту.
//
//     Достаточно давно разработчики заметили, что работа с деньгами происходит во всех проектах примерно одинаково. Это привело к созданию определенного подхода (шаблона проектирования) при работе с деньгами. В этом задании мы частично реализуем его.
//
//     Money.js
// Реализуйте абстракцию "Деньги". Она знает о валюте денег, позволяет их конвертировать в другие валюты, выполнять арифметические операции и форматировать вывод. Список методов:
//
//     Money(value, currency = 'usd') – создает объект-деньги.
// Money.prototype.getValue() – возвращает стоимость в виде числа
// Money.prototype.exchangeTo(currency) – возвращает новый объект-деньги, где значение конвертировано в указанную валюту
// Money.prototype.add(money) – возвращает новый объект-деньги, который представляет из себя сумму исходных и переданных денег, в валюте исходных денег (внутри возможна конвертация если валюты не совпадают)
// Money.prototype.format() – возвращает локализованное представление денег удобное для вывода
// const money1 = new Money(100);
//
// // Возвращает значение
// money1.getValue(); // 100
//
// // Конвертирует в указанную валюту и возвращает новое значение
// money1.exchangeTo('eur').getValue(); // 70
//
// const money2 = new Money(200, 'eur');
// money2.getValue(); // 200
// const money3 = money2.add(money1);
// money3.getValue(); // 270
// const money4 = money1.add(money2);
// money4.getValue(); // 340
//
// money1.format(); // "$100.00"
// money2.format(); // "€200.00"
//
// const money5 = new Money(10000);
// money5.format(); // "$10,000.00"
// Наша реализация поддерживает только две валюты: usd и eur без возможности расширения. Коэффициенты конверсии:
//
//     usd -> eur = 0.7
// eur -> usd = 1.2
// Подсказки
// Number.prototype.toLocaleString() – умеет форматировать вывод денег в нужной локали. Если передать undefined первым параметром, то установится текущая локаль.
//     Пример реализации денег на js

// @ts-check
// BEGIN (write your solution here)
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
}

Money.prototype.getValue = function getValue() {
    return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
    return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency2) {
    let newValue = this.getValue();
    let newCurrency = this.getCurrency();
    if (this.getCurrency() === 'eur' && currency2 === 'usd') {
        newValue *= 1.2;
        newCurrency = 'eur';
    }
    if (this.getCurrency() === 'usd' && currency2 === 'eur') {
        newValue *= 0.7;
        newCurrency = 'eur';
    }
    return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(moneyToAdd) {
    const mainCurrency = this.getCurrency();
    const currentValue = this.getValue();
    let sum = 0;
    if (mainCurrency === moneyToAdd.getCurrency()) {
        sum = currentValue + moneyToAdd.getValue();
    } else {
        sum = currentValue + moneyToAdd.exchangeTo(mainCurrency).getValue();
    }
    return new Money(sum, mainCurrency);
};

Money.prototype.format = function format() {
    return (this.getCurrency() === 'usd')
        ? this.getValue().toLocaleString('en-US', { style: 'currency', currency: 'USD' })
        : this.getValue().toLocaleString('en-EN', { style: 'currency', currency: 'EUR' });
};

export default Money;
// END
