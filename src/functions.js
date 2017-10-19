/**
 * Generates random integer in the given range
 * @param {Number} min Minimum range number
 * @param {Number} max Maximum range number
 * @returns {Number}
 */
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates random color Hex string
 * @returns {String}
 */
function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export { random, randomColor };