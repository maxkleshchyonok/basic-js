const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let oneArray = [];
  let number = 0;
  for (let i=0; i<matrix.length;i++){
    for (let elem of matrix[i]){
      oneArray.push(elem)
    }
  }
  for(let elem of oneArray){
    if(elem === '^^'){
      number += 1;
    }
  }
  return number
}

module.exports = {
  countCats
};
