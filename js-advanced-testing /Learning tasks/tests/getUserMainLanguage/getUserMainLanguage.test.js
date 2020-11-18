// Протестируйте функцию getUserMainLanguage(username, client), которая определяет язык на котором пользователь создал больше всего репозиториев. Для реализации этой задачи, функция getUserMainLanguage() выполняет запрос через @octokit/rest, который извлекает все репозитории указанного пользователя (по первому параметру username). Каждый репозиторий в этом списке содержит указание основного языка репозитория. Эта информация используется для поиска того языка, которые используется чаще.
//
//     Пример:
// // Запрос который выполняет функция getUserByUsername
// // Именно этот метод нужно будет подменить в фейковом клиенте
// const { data } = await client.repos.listForUser({ username });
// // data – список репозиториев. У каждого репозитория может быть много полей
// // но нас интересует ровно одно – language
// // Эти данные нужно подготовить в тестах для фейкового клиента
// console.log(data);
// // [{ language: 'php', ... }, { language: 'javascript', ... }, ...]
// support/OctokitFake.js
// Реализуйте фейковый клиент по такому же принципу как это было сделано в теории. Используйте этот клиент в тестах для подмены.

// @ts-check

import OctokitFake from 'OctokitFake.js';
import getFunction from 'functions.js';

const getUserMainLanguage = getFunction();

// BEGIN (write your solution here)
test('getUserMainLanguage', async () => {
    const data = [{ language: 'php' }, { language: 'javascript' }];
    const client = new OctokitFake(data);
    const userMainLanguage = await getUserMainLanguage('Alex', client);
    expect(userMainLanguage).toEqual('php');
});

test('getUserMainLanguage when empty', async () => {
    const client = new OctokitFake([]);
    const userMainLanguage = await getUserMainLanguage('Alex', client);
    expect(userMainLanguage).toBeNull();
});
// END
