/**
* Returns a number between a min value (inclusive) and a max value (inclusive)
* @param   {number} max
* @param   {number} min
* @returns {number} between min and max (inclusive)
*/
module.exports = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
