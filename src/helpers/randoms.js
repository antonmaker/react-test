/**
 * Generates random integer in the given range
 * @param {Number} min Minimum range number
 * @param {Number} max Maximum range number
 * @returns {Number}
 */
export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates random boolean
 * @returns {Boolean}
 */
export function randomBoolean() {
  return !!randomNumber(0, 1);
}

/**
 * Generates random color Hex string
 * @returns {String}
 */
export function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}