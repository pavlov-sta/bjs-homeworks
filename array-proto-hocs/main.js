function compareArrays(arr, arr2){
    arr.length==arr2.length && arr.every((v,i)=> v === arr2[i])
 };
 
 
 function memoize(fn, limit) {
   return function () {
     const results  = {
     args: Array.from(arguments),
     result: fn.apply(null, Array.from(arguments))
   };
     return results.result
   }
 }