import { createInputStream } from './stream.js';

const stream = createInputStream('abc');

const a = stream.peek();
stream.next();
const b = stream.peek();

console.log({ a, b });
