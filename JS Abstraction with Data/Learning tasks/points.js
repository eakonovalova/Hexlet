// В этой задаче, тесты написаны для отрезков, которые в свою очередь используют точки. Ваша задача, реализовать интерфейсные функции для работы с точками. Внутреннее представление точек должно быть основано на полярной системе координат, хотя интерфейс предполагает работу с декартовой системой (снаружи). Для обозначения координат используются целые числа.
//
//     points.js
// Реализуйте интерфейсные функции точек:
//
//     getX(point)
// getY(point)
// makeDecartPoint(x, y). Принимает на вход координаты и возвращает точку. Уже реализован.
//
//     Примеры
// const x = 4;
// const y = 8;
//
// // point хранит в себе данные в полярной системе координат
// const point = makeDecartPoint(x, y);
//
// // Здесь происходит преобразование из полярной в декартову
// getX(point); // 4
// getY(point); // 8
// Подсказки
// Трансляция декартовых координат в полярные была описана в теории
// Получить x можно по формуле radius * cos(angle)
// Получить y можно по формуле radius * sin(angle)
// Результат вычислений необходимо округлить к ближайшему целому

// @ts-check

const makeDecartPoint = (x, y) => {
    const point = {
        angle: Math.atan2(y, x),
        radius: Math.sqrt((x ** 2) + (y ** 2)),
    };

    return point;
};

// BEGIN (write your solution here)
const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));

const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));

export { makeDecartPoint, getX, getY };
