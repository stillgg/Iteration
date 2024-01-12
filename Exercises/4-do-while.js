"use strict";

// Use do..while loop and accumulator variable
// to calculate sum of all given arguments
// For example sum(1, 2, 3) should return 6

const sum = (...args) => {
  if (!args.length) return 0;
  let total = 0;
  let i = 0;
  do {
    total += args[i];
    i++;
  } while (i < args.length);

  return total;
};

module.exports = { sum };
