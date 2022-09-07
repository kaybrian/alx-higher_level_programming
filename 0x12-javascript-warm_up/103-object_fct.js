#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,

  incr: function () {
    const newVal = this.value += 1;
    return newVal;
  }
};
console.log(myObject);

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
