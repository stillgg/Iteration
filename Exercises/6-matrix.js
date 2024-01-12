"use strict";

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

const max = (matrix) => {
  let max = -Infinity;

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      max = Math.max(max, matrix[row][column]);
    }
  }

  return max;
};

module.exports = { max };
