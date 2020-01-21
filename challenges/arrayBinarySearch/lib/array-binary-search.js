'use strict';

let arrayBainarySearch = module.exports= {};

arrayBainarySearch.BinarySearch = (arr, input)=>{
  for(let i=0; i<arr.length; i++){
    if (arr[i]===input){
     return i;
   
    }
  }
  return -1;
}