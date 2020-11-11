// tests/cart.test.js
// Напишите тесты для корзины интернет-магазина. Интерфейс:
//
// makeCart – создает новую корзину (объект).
// addItem(good, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
//     getItems – возвращает товары в формате [{ good, count }, { good, count }, ...]
// getCost – возвращает стоимость корзины. Стоимость корзины высчитывается как сумма всех добавленных товаров с учетом их количества.
//     getCount – возвращает количество товаров в корзине
// const cart = makeCart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35
// cart.addItem({ name: 'house', price: 10 }, 1);
// cart.getItems().length; // 3
// cart.getCost(); // 45

// @ts-check

import getImpelementation from '../implementations/index.js';

const makeCart = getImpelementation();

// BEGIN (write your solution here)
test('Cart', () => {
    const cart = makeCart();
    expect(cart.getItems()).toHaveLength(0);

    cart.addItem({ name: 'car', price: 3 }, 5);
    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getCost()).toBe(15);
    expect(cart.getCount()).toBe(5);

    cart.addItem({ name: 'house', price: 10 }, 2);
    expect(cart.getItems()).toHaveLength(2);
    expect(cart.getCost()).toBe(35);
    expect(cart.getCount()).toBe(7);
});
// END
