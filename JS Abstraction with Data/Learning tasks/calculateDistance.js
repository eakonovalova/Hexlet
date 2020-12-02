// Реализуйте и экспортируйте по умолчанию функцию, которая находит расстояние между двумя точками на плоскости:
//
//     Примеры
// point1 = [0, 0];
// point2 = [3, 4];
// calculateDistance(point1, point2); // 5
// Подсказки
// Формула расчёта расстояния между двумя точками

// @ts-check
// BEGIN (write your solution here)
const calculateDistance = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;
    const ac = x2 - x1;
    const bc = y2 - y1;

    return Math.sqrt((ac * ac) + (bc * bc));
};

export default calculateDistance;
// END
