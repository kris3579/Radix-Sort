'use strict';

const _swap = () => {

};

const _partition = () => {

};

const _quickSortHelper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    const pivotIndex = _partition(items, leftIndex, rightIndex);
    _quickSortHelper(items, leftIndex, pivotIndex - 1);
    _quickSortHelper(items, pivotIndex + 1, rightIndex);
  }
};

const quickSort = (items) => {
  if (!Array.isArray(items)) {
    throw new TypeError('Input should be an array');
  }
  return _quickSortHelper(items, 0, items.length - 1);
};
