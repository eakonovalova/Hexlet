// Класс Time, предназначен для создания объекта-времени. Его конструктор принимает на вход количество часов и минут в виде двух отдельных параметров.
//
//     const time = new Time(10, 15);
// console.log(`The time is ${time}`); // => 'The time is 10:15'
// Time.js
// Добавьте в класс Time статический метод fromString(), который позволяет создавать инстансы Time на основе времени переданного строкой формата часы:минуты.
//
//     const time = Time.fromString('10:23');
// // автоматически вызывается метод toString()
// console.log(`The time is ${time}`); // 'The time is 10:23'

// @ts-check

export default class Time {
    // BEGIN (write your solution here)
    static fromString(timeStr) {
        this.hours = timeStr.split(':')[0];
        this.minutes = timeStr.split(':')[1];
        return new Time(this.hours, this.minutes);
    }
    // END

    constructor(hours, minutes) {
        this.minutes = minutes;
        this.hours = hours;
    }

    toString() {
        return `${this.hours}:${this.minutes}`;
    }
}
