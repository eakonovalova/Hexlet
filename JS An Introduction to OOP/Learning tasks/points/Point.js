// Реализуйте и экспортируйте по умолчанию функцию-конструктор Point с двумя свойствами, представляющими координаты на плоскости x и y.
//

// @ts-check

// BEGIN (write your solution here)
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.getX = this.x;
    this.getY = this.y;
}
// END
export default Point;
