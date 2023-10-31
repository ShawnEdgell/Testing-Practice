import { capitalize } from './capitalize';

test('capitalize first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
});
