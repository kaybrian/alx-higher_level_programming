#!/usr/bin/node
const value = parseInt(process.argv[2]);

if (typeof (value) === 'undefined' || isNaN(value)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i <= value; i++) {
    console.log('C is fun');
  }
}
