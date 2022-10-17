const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("\'arr\' parameter must be an instance of the Array!")
//   }
//   if (arr.length === 0) {
//     return []
//   }
//   let workArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     workArr.push(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (workArr[i] === '--discard-next') {
//       workArr.splice(i, 2, "deleted")
//     } else
//     if (workArr[i] === '--discard-prev') {
//       workArr.splice(i - 1, 2,'deleted')
//     } else
//     if (workArr[i] === '--double-next') {
//       if(workArr[i+1] instanceof Number || workArr[i] !== workArr[workArr.length - 1]){
//         workArr.splice(i, 1, workArr[i + 1])
//       } else workArr.splice(i,1,'deleted')
//     } else
//     if (workArr[i] === '--double-prev') {
//       if(workArr[i-1] instanceof Number || workArr[i] !== workArr[0] ){
//         workArr.splice(i, 1, workArr[i - 1])
//       } else workArr.splice(i,1, 'deleted')
//     }
//   }
//   return workArr.filter(el => el === 'deleted')
// }


function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }
  if (arr.length === 0) {
    return []
  }
  const controls = [
    '--double-next', '--discard-next', '--double-prev', '--discard-prev'
  ]
  const outputArr = arr.slice(0);
  for (let i=0;i<arr.length;i++) {
    if(outputArr[0] === '--double-prev' || outputArr[0] === '--discard-prev'){
      continue;
    }
    if(outputArr[outputArr.length-1] === '--double-next' || outputArr[outputArr.length-1] === '--discard-next'){
      break;
    }
    if (outputArr[i] === '--double-prev') {
      if (outputArr[i] && !controls.includes(outputArr[i - 1])) {
        outputArr.splice(i - 1, 0, outputArr[i - 1]);
        i++
        console.log(outputArr)
      }
    } else
    if (outputArr[i] === '--double-next') {
      if (outputArr[i+1] && !controls.includes(outputArr[i + 1])) {
        outputArr.splice(i + 1, 0, outputArr[i + 1]);
        console.log(outputArr)

      }
    } else
    if (outputArr[i] === '--discard-prev') {
      if (outputArr[i-1] && !controls.includes(outputArr[i - 1])) {
        outputArr.splice(i - 1, 1);
        console.log(outputArr)

      }
    } else
    if (outputArr[i] === '--discard-next') {
      if (outputArr[i+1] && !controls.includes(outputArr[i + 1])) {
        outputArr.splice(i+1 , 1);
        console.log(outputArr)

      }
    }
  }
  return outputArr.filter(el => !controls.includes(el))
}


module.exports = {
  transform
};
