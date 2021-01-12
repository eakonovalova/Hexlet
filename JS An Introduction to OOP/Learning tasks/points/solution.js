// Реализуйте функцию reverse, которая принимает на вход отрезок и возвращает новый отрезок с точками, добавленными в обратном порядке (begin меняется местами с end).
//
// Точки в результирующем отрезке должны быть копиями (по значению) соответствующих точек исходного отрезка. То есть они не должны быть ссылкой на один и тот же объект, так как это разные объекты (пускай и с одинаковыми координатами).
// const beginPoint = new Point(1, 10);
// const endPoint = new Point(11, -3);
//
// const segment = new Segment(beginPoint, endPoint);
// const reversedSegment = reverse(segment);
//
// // прямое обращение к свойствам приведено только в демонстрационных целях
// console.log(
//     segment.beginPoint.x,
//     segment.beginPoint.y,
//     segment.endPoint.x,
//     segment.endPoint.y,
// );// => 1 10 11 -3
//
// console.log(
//     reversedSegment.beginPoint.x,
//     reversedSegment.beginPoint.y,
//     reversedSegment.endPoint.x,
//     reversedSegment.endPoint.y,
// ); // => 11 -3 1 10
// Подсказки
// Есть разные способы организовать работу абстракции Point. Выберите тот, который считаете нужным, на основе пройденного материала.

// @ts-check

import Point from './Point.js';
import Segment from './Segment.js';

// BEGIN (write your solution here)
function reverse(segment) {
    const beginPoint = new Point(segment.getEndPoint().x, segment.getEndPoint().y);
    const endPoint = new Point(segment.getBeginPoint().x, segment.getBeginPoint().y);
    return new Segment(beginPoint, endPoint);
}
// END
export default reverse;
