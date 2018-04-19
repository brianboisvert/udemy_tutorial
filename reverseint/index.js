// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let str = ''
  let arr = n.toString().split('')
  if (arr[0] === "-") {
    arr.map((el, i) => {
      str.unshift(el)
    })
  }
}

module.exports = reverseInt;
