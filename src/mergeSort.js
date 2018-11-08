'use strict';

const _merge = (preSortedLeft, preSortedRight) => {
  const sortedValues = [];
  while (preSortedLeft.length > 0 && preSortedRight.length > 0) {
    if (preSortedLeft[0] <= preSortedRight[0]) {
      sortedValues.push(preSortedLeft.shift());
    } else {
      sortedValues.push(preSortedRight.shift());
    }
  }
  if (preSortedLeft.length > 0) {
    sortedValues.push(...preSortedLeft);
  }
  if (preSortedRight.length > 0) {
    sortedValues.push(...preSortedRight);
  }
  return sortedValues;
};

const _mergeSortHelper = (items) => {
  if (items.length === 1) {
    return items;
  }
  const middleIndex = Math.floor(items.length / 2);
  const leftItems = items.slice(0, middleIndex);
  const rightItems = items.slice(middleIndex);
  return _merge(_mergeSortHelper(leftItems), _mergeSortHelper(rightItems));
};

const mergeSort = (items) => {
  if (!Array.isArray(items)) {
    throw new TypeError('Input should be an array');
  }
  return _mergeSortHelper(items);
};
