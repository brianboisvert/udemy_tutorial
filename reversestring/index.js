// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  let arr = []
  str.split('').map(letter => {
    arr.unshift(letter)
  })
  return arr.join('')
}

reverse('hello');

module.exports = reverse;
