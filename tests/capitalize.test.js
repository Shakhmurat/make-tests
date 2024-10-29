import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция не сделала первую букву заглавной');
}

if (capitalize('') !== '') {
  throw new Error('Функция не вернула пустую строку');
}

console.log('Все тесты пройдены!');