const sweep = require('./sweep');


test('sweep is a function', () => {
  expect(typeof sweep).toBe('function');
});

test('sweep has 3 parameters', () => {
  expect(sweep.length).toBe(3);
});

const grid = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];

test('sweep returns kaboom if coordinates point to bomb', () => {
  expect(sweep(grid, 1, 1)).toBe("kaboom");
});

test('sweep returns kaboom if coordinates point to bomb', () => {
  expect(sweep(grid, 0, 3)).toBe("kaboom");
});

test('sweep returns kaboom if coordinates point to bomb', () => {
  expect(sweep(grid, 2, 0)).toBe("kaboom");
});

test('sweep return 1 as the number of adjacent bombs', () => {
  expect(sweep(grid, 0, 0)).toBe(1);
});

test('sweep return 2 as the number of adjacent bombs', () => {
  expect(sweep(grid, 1, 2)).toBe(2);
});

test('sweep return 0 when no adjacent bombs', () => {
  expect(sweep(grid, 2, 3)).toBe(0);
});

test('null grid throw a TypeError', () => {
  expect(sweep(null, 1, 1)).toThrowError(TypeError);
});
test('wrong grid type value throw a TypeError', () => {
  expect(sweep("a", 1, 1)).toThrowError(TypeError);
});
test('wrong type value in grid throw a TypeError', () => {
  expect(sweep(
    [
      [0, 0, "0", 1],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  )).toThrowError(TypeError);
});
test('negative value in grid throw a TypeError', () => {
  expect(sweep(
    [
      [0, 0, 0, 1],
      [0, -1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  )).toThrowError(TypeError);
});
test('null value in grid throw a TypeError', () => {
  expect(sweep(
    [
      [0, 0, 0, 1],
      [0, 1, null, 1],
      [1, 0, 0, 0],
    ],
    0,
    1
  )).toThrowError(TypeError);
});

test('invalid row value throw a RangeError', () => {
  expect(sweep(grid, -1, 1)).toThrowError(RangeError);
});
test('invalid column value throw a RangeError', () => {
  expect(sweep(grid, 1, 5)).toThrowError(RangeError);
});


// End of tests