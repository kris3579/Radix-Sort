'use strict';

const mergeSortTest = require('../mergeSort');

const testArray = [7, 3, 2, 5, 1, 4, 6];

const testObject = { 1: true, 2: true, 3: true };

describe('mergeSort', () => {
  test('Successfully sorts given array', () => {
    const result = mergeSortTest(testArray);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
  test('If input is not an array, return null', () => {
    const result = mergeSortTest(testObject);
    expect(result).toEqual(null);
  });
});
