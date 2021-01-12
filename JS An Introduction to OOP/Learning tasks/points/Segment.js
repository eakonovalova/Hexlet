// Реализуйте и экспортируйте по умолчанию функцию-конструктор Segment с двумя свойствами beginPoint и endPoint и геттеры для извлечения этих свойств: getBeginPoint и getEndPoint.

// @ts-check

// BEGIN (write your solution here)


function getBeginPoint() {
    return this.beginPoint;
}

function getEndPoint() {
    return this.endPoint;
}

function Segment(beginPoint, endPoint) {
    this.beginPoint = beginPoint;
    this.endPoint = endPoint;
    this.getBeginPoint = getBeginPoint;
    this.getEndPoint = getEndPoint;
}

// END
export default Segment;
