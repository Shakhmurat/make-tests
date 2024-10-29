import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('hello'), 'Hello', 'Функция не сделала первую букву заглавной');

assert.equal(capitalize(''), '', 'Функция не вернула пустую строку');

console.log('Все тесты пройдены!');