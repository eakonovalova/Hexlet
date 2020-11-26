// На многих картах, например, google maps реализован поиск мест, находящихся рядом с выбранной точкой, например, с текущим расположением. В этом задании мы реализуем подобную задачу в очень упрощенном варианте.
//
//     location.js
// Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее место к указанной точке на карте и возвращает его. Параметры функции:
//
//     locations – массив мест на карте. Каждое место - это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
// point – текущая точка на карте. Массив из двух элементов-координат x и y.
//     import { getTheNearestLocation } from '../location.js';
//
// const locations = [
//     ['Park', [10, 5]],
//     ['Sea', [1, 3]],
//     ['Museum', [8, 4]],
// ];
//
// const currentPoint = [5, 5];
//
// // Если точек нет, то возвращается null
// getTheNearestLocation([], currentPoint); // null
//
// getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
// Для решения этой задачи деструктуризация не нужна, но мы хотим её потренировать. Поэтому решите эту задачу без обращения к индексам массивов.
//
//     Подсказки
// Расстояние между точками высчитывается с помощью функции getDistance.

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

export const getTheNearestLocation = (location, point) => {
    if (location.length === 0) {
        return null;
    }
    let smallest = getDistance([x1, x2], point);
    for (const [, [x1, x2]] of location) {
        const difference = getDistance([x1, x2], point);
        if (smallest > difference) {
            smallest = difference;
        }
    }
};

export default getTheNearestLocation;