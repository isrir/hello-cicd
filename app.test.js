const { greet, add, multiply } = require('./app');

test('greet returns a greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});

test('add adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply multiplies two numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});
