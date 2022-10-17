const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date){
    return "Unable to determine the time of year!";
  }
  if(!(date instanceof Date)){
    throw new Error('Invalid date!');
  }
  if (!date.getMilliseconds){
    throw new Error('Invalid date!');
  }
  if(Object.getOwnPropertyNames(date).length > 0){
    throw new Error('Invalid date!');
  }
  if(date.getMonth() + 1 == 1 || date.getMonth() +1 == 2 || date.getMonth() +1 == 12) return 'winter';
  else if(date.getMonth() +1 == 3 || date.getMonth() +1 == 4 || date.getMonth() +1 == 5) return 'spring';
  else if(date.getMonth() +1 == 6 || date.getMonth() +1 == 7 || date.getMonth() +1 == 8) return 'summer';
  else if(date.getMonth() +1 == 9 || date.getMonth() +1 == 10 || date.getMonth() +1 == 11) return 'autumn';

}

module.exports = {
  getSeason
};
