// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let rowLength = n % 2 === 0 ? n * 2 - 1 : n + 2

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < rowLength; j++) {
      if (j + 1 === n) {
        str += "#";
      } else {
        str += ' ';
      }
    }
    console.log(str)
  }
}

module.exports = pyramid;
