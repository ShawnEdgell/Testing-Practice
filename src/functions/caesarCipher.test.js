import { caesarCipher } from './caesarCipher';

test('shift characters by given factor', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('wrap from z to a', () => {
  expect(caesarCipher('z', 1)).toBe('a');
});

test('keep the same case', () => {
  expect(caesarCipher('AbC', 1)).toBe('BcD');
});

test('handle punctuation', () => {
  expect(caesarCipher('hello!', 1)).toBe('ifmmp!');
});