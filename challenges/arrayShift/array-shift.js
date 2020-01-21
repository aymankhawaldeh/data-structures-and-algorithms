
let arr = ['a','b','d','e'];
let val = 'c';
let long = Math.floor(arr.length/2);
function insertShiftArray  (arr,val){
  let arr2=[];
  for(i=0; i<arr.length; i++){
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
insertShiftArray (arr,val)