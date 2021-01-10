// Реализуйте абстракцию для работы с урлами. Она должна извлекать и менять части адреса. Интерфейс:
//
// make(url) - Конструктор. Создает урл.
// setProtocol(data, protocol) - Сеттер. Меняет схему.
// getProtocol(data) - Селектор (геттер). Извлекает схему.
// setHost(data, host) - Сеттер. Меняет хост.
// getHost(data) - Геттер. Извлекает хост.
// setPath(data, path) - Сеттер. Меняет строку запроса.
// getPath(data) - Геттер. Извлекает строку запроса.
// setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
// getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса. Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда, когда в запросе не было такого параметра
// toString(data) - Геттер. Преобразует урл в строковой вид.
//     const url = make('https://hexlet.io/community?q=low');
//
// setProtocol(url, 'http:');
// toString(url); // 'http://hexlet.io/community?q=low'
//
// setPath(url, '/404');
// toString(url); // 'http://hexlet.io/404?q=low'
//
// setQueryParam(url, 'page', 5);
// toString(url); // 'http://hexlet.io/404?q=low&page=5'
//
// setQueryParam(url, 'q', 'high');
// toString(url); // 'http://hexlet.io/404?q=high&page=5'
// Подсказки
// Работа с адресами и структура ссылок — URL

const make = (str) => new URL(str);
const toString = (url) => url.href;

const getProtocol = (url) => url.protocol;
const getHost = (url) => url.host;
const getPath = (url) => url.pathname;
const getQueryParam = (url, paramName, defaultValue = null) =>
    url.searchParams.get(paramName) || defaultValue;

const setProtocol = (url, protocol) => (url.protocol = protocol);
const setHost = (url, host) => (url.host = host);
const setPath = (url, path) => (url.pathname = path);
const setQueryParam = (url, key, value) => url.searchParams.set(key, value);

export {
    make,
    getProtocol,
    getHost,
    getPath,
    setProtocol,
    setHost,
    setPath,
    getQueryParam,
    setQueryParam,
    toString,
};
