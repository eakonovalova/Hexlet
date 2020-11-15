// Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:
//
//     Массив
// Индекс
// Значение по умолчанию (равно null)
// Примеры
// const cities = ['moscow', 'london', 'berlin', 'porto'];
//
// get(cities, 1); // 'london'
// get(cities, 4); // null
// get(cities, 10, 'paris'); // 'paris'
// get(cities, -1, 'oops'); // 'oops'

// BEGIN (write your solution here)
export const get = (arr, index, i = null) => {
    if (index > arr.length - 1 || index < 0) {
        return i;
    }
    return arr[index];
};

export default get;
// END
