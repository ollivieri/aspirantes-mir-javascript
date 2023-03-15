// escribe la función max acá
const max = arr => {
    let maxNum = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] > maxNum) 
        maxNum = arr[i];
    }
    return maxNum;
  } 
// escribe tu solución acá

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined