'use strict';
const arrayShift = require('../lib/array-shift.js');

describe('inserting item & sorting', ()=>{
  it('insert item into middle of array',()=>{
    expect(arrayShift.insertShiftArray(['a','b','d','e'], 'c')).toStrictEqual(['a','b','c','d','e'])
  });
  it('insert item into middle of array',()=>{
    expect(arrayShift.insertShiftArray([2,4,8,16,42], 9)).toStrictEqual([2,4,8,9,16,42])
  })
})
