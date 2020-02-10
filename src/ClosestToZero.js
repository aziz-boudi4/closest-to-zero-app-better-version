export const closestToZero = (arr) => {
  if(typeof(arr) === 'undefined' || arr.length === 0) {
      return 0;
  }

  let result = arr[0];

  for(let i = 1; i <= arr.length; i++){
    if(Math.abs(result) >= Math.abs(arr[i])) {
      if(Math.abs(result) === Math.abs(arr[i])){
        result = Math.max(result, arr[i])
      } else {
        result = arr[i]
      }
    }
  }
  return result
}

//[8, 2, 3, -2]


// another alternative version
function absSmallest(arr){
   if (!arr || arr.length === 0 ) return 0            // address requirement to return 0 when arr is undefined or empty
   let res = undefined                                // smallest value seen so far
   for (let i = 0; i < arr.length; i++){
      if (res === undefined || Math.abs(arr[i]) <= Math.abs(res)){
         res = Math.abs(arr[i]) === Math.abs(res)    // address requirement of positive value when there's a tie
         ? Math.max(res, arr[i] )
         : res = arr[i]
      }
   }
   return res
}

console.log(absSmallest([5, 4, -9, 6, -10, -1, 8] ))
console.log(absSmallest([8, -2, 3, 2] ))
// check order of tied values
console.log(absSmallest([8, 2, 3, -2] ))

// edge case empty list returns 0:
console.log(absSmallest())
console.log(absSmallest([]))
