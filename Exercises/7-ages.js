"use strict";

// Use for..in to calculate age for each person
// For example ages({
//   lenin: { born: 1870, died: 1924 },
//   mao: { born: 1893, died: 1976 },
//   gandhi: { born: 1869, died: 1948 },
//   hirohito: { born: 1901, died: 1989 },
// })
// should return {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }

const ages = (persons) => {
  const converted = {};
  for (const name in persons) {
    const person = persons[name];
    converted[name] = person.died - person.born;
  }
  return converted;
};

module.exports = { ages };
