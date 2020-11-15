// Напишите негативный тест функции read() (читает содержимое файла), проверяющий ошибочные ситуации. Рассмотрите следующие ситуации:
//
//     Файл не найден
// В функцию передан путь до директории read($filepath).
// read('/undefined'); // boom!
// read('/etc'); // boom!
// @ts-check

import fs from 'fs';

const functions = {
    right1: fs.readFileSync,
    wrong1: (path) => fs.readdirSync(path),
    wrong2: (path) => {
        if (!fs.existsSync(path)) {
            return;
        }
        fs.readFileSync(path);
    },
};

export default () => {
    const name = process.env.FUNCTION_VERSION || 'right1';
    return functions[name];
};

const read = getFunction();

// BEGIN (write your solution here)
test('read', () => {
    expect(() => read('/undefined')).toThrow();
    expect(() => read('/etc')).toThrow();
});
// END
