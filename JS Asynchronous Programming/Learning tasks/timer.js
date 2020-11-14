// Реализуйте таймер в виде промиса.
//
//     import wait from './timer.js';
//
// wait(100).then(() => console.log('time is over!'));
// Экспортируйте функцию по умолчанию.

// @ts-check
// BEGIN (write your solution here)
import util from 'util';

export const timer = (timer) =>
    new Promise((resolve) => setTimeout(resolve, timer));

export default timer;
// END
