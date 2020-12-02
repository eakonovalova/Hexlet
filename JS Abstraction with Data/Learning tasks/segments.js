// Отрезок — еще один графический примитив. В коде описывается парой точек, одна из которых — начало отрезка, другая — конец. Обычный отрезок не имеет направления, поэтому вы сами вольны выбирать то, какую точку считать началом, а какую концом.
//
//     В этом задании подразумевается, что вы уже понимаете принцип построения абстракции и способны самостоятельно принять решение о том, как она будет реализована. Напомню, что сделать это можно разными способами и нет одного правильного.
//
//     segments.js
// Реализуйте и экспортируйте указанные ниже функции:
//
//     makeSegment(). Принимает на вход две точки и возвращает отрезок.
// getMidpointOfSegment(). Принимает на вход отрезок и возвращает точку находящуюся на середине отрезка.
// getBeginPoint(). Принимает на вход отрезок и возвращает точку начала отрезка.
// getEndPoint(). Принимает на вход отрезок и возвращает точку конца отрезка.
//     Пример
// const beginPoint = makeDecartPoint(3, 2);
// const endPoint = makeDecartPoint(0, 0);
// segment = makeSegment(beginPoint, endPoint);
//
// getMidpointOfSegment(segment); // (1.5, 1)
// getBeginPoint(segment); // (3, 2)
// getEndPoint(segment); // (0, 0)
// Подсказки
// Средняя точка вычисляется по формуле x = (x1 + x2) / 2 и y = (y1 + y2) / 2.

// @ts-check

import { makeDecartPoint, getX, getY } from './points.js';

// BEGIN (write your solution here)
export const makeSegment = (x, y) => {
    const segment = {
        beginPoint: { x: getX(x), y: getY(x) },
        endPoint: { x: getX(y), y: getY(y) },
    };
    return segment;
};

export const getBeginPoint = (segment) => segment.beginPoint;
export const getEndPoint = (segment) => segment.endPoint;

export const getMidpointOfSegment = (segment) => {
    const formula = (a, b) => (a + b) / 2;
    const x = formula(getX(segment.beginPoint), getX(segment.endPoint));
    const y = formula(getY(segment.beginPoint), getY(segment.endPoint));
    return makeDecartPoint(x, y);
};
// END
