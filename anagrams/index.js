// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const objA = charMap(stringA)
  const objB = charMap(stringB)

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false
  }

  for (let char in objA) {
    if(objA[char] !== objB[char]) {
      return false
    }
  }
  debugger;
  return true
}

function charMap(str) {
  let obj = {}
  for (let char of str.replace(/[^\w]/g, "").toLowerCaser()) {
    if (obj[char]) {
      obj[char] += 1
    } else {
      obj[char] = 1
    }
  }
}

anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')


module.exports = anagrams;

// word.replace(/[^\w]/g, "")
