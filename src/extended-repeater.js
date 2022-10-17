const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater( str, options ) {
//   let mainArr = [];
//   let addArr = [];
//   let sepPart = '+';
//   if(options.separator === undefined){
//     options.separator = '+';
//   }
//   if(options.additionSeparator === undefined){
//     options.additionSeparator = '|';
//   }
//   if(options.repeatTimes === undefined){
//     return str + options.addition;
//   }
//   console.log(str)
//   console.log(options)
//   for (let i=0; i<(options.repeatTimes);i++){
//     mainArr.push(str);
//   }
//   console.log(mainArr)
//   console.log(mainArr.join(options.separator))
//   console.log('-----------------------')
//   if(options.additionRepeatTimes === undefined) {
//     let rezStr = mainArr.join(options.separator) + options.addition
//     // return mainArr.join(options.separator)
//     return rezStr
//   } else {
//       for(let k=0; k<options.additionRepeatTimes;k++){
//         addArr.push(options.addition)
//       }
//        sepPart = addArr.join(options.additionSeparator) + options.separator
//     console.log('==========================')
//     console.log(sepPart)
//     console.log(mainArr.join(sepPart))
//     console.log('==========================')
//       return mainArr.join(sepPart)
//   }
// }

function repeater(str,options){
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if(str === null){
    str = 'null';
  }
  if(options.addition === null){
    options.addition = 'null';
  }
  let mainRep = (stroka = '', separator, repeatTimes = 1) => {
    let array = [];
    for (let i=0; i<repeatTimes;i++){
      array.push(stroka)
    }
    return array.join(separator)
  }
  let extraRepeat = mainRep(options.addition, options.additionSeparator, options.additionRepeatTimes);
  options.separator = extraRepeat + options.separator;
  return mainRep(str, options.separator, options.repeatTimes) + extraRepeat;
}

module.exports = {
  repeater
};
