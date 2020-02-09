/* eslint-disable new-cap */
'use strict';

let bainary = require('../lib/array-binary-search')

describe('return an index of an item',()=>{
  it('return a specific index of the item',()=>{
    expect(bainary.BinarySearch([1,2,3], 2)).toBe(1);
  });
  it('return a falsy value for the item which does not exist in the array',()=>{
    expect(bainary.BinarySearch([1,2,3], 4)).toBe(-1);
  });
})
