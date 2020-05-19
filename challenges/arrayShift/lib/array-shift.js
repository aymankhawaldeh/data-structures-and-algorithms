'use strict';

let insertShiftArr = module.exports = {};

insertShiftArr.insertShiftArray = (arr,val) => {
  let long = Math.ceil(arr.length/2);
  let arr2=[];
  for(let i=0; i<arr.length; i++){
    if(i<long){
      arr2[i]=arr[i]
    }
    if(i=== long){
      arr2[i]=val
    }
    if(i>= long){
      arr2[i+1]=arr[i]
    }

  }
  return arr2;


}
