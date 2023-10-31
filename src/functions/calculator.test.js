import { calculator } from './calculator';

test('add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(5, 2)).toBe(10);
});

test('divide two numbers', () => {
  expect(calculator.divide(6, 3)).toBe(2);
});