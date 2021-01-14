// Реализуйте и экспортируйте по умолчанию класс Cart, представляющий из себя покупательскую корзину. Интерфейс:
//
// addItem(item, count) – добавляет в корзину товары и их количество. Товар это объект у которого два свойства: name – имя и price – стоимость.
//     getItems – возвращает товары в формате [{ item, count }, { item, count }, ...]
// getCost – возвращает стоимость корзины. Общая стоимость корзины высчитывается как стоимость всех добавленных товаров с учетом их количества.
//     getCount – возвращает количество товаров в корзине
// Примеры
// const cart = new Cart();
// cart.addItem({ name: 'car', price: 3 }, 5);
// cart.addItem({ name: 'house', price: 10 }, 2);
// cart.getItems().length; // 2
// cart.getCost(); // 35

// @ts-check

import _ from 'lodash';

// BEGIN (write your solution here)
class Cart {
    constructor() {
        this.goods = [];
    }

    getItems() {
        return this.goods;
    }

    addItem(item, count) {
        this.goods.push({ item, count });
    }

    getCount() {
        // return _.sumBy(this.getItems(), (goods) => goods.count);
        const cart = this.getItems();
        let sum = 0;
        for (const good of cart) {
            const { count } = good;
            sum += count;
        }
        return sum;
    }

    getCost() {
        // return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
        const cart = this.getItems();
        let sum = 0;
        for (const good of cart) {
            const { count } = good;
            const { price } = good.item;
            sum += price * count;
        }
        return sum;
    }
}

export default Cart;
// END
