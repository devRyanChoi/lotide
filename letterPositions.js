const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  }
};

const eqArrays = function(arr1, arr2) {
if ( arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
          return true;
        } else {
          return false;
        }
      };
    } else {
    return false;     
  }
}


const letterPositions = function(sentence) {
  const result = {};

  for (const [index, letter] of Object.entries(sentence)) {
    
    if (!result[letter]) {
      result[letter] = [];
      } 
      result[letter].push(index);
  }

  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);

