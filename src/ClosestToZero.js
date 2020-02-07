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
