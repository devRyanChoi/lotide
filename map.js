const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  }
};

const eqArrays = function(arr1, arr2) {

  if ( arr1.length === arr2.length) {
      for (let i = 0; i < arr2.length; i++) {
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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word.length)
assertArraysEqual(results1, [6, 7, 2, 5, 3]);

const results2 = map(words, word => word[0]);
assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ]);

const results3 = map(words, word => word + ' ' + 'call')
assertArraysEqual(results2, ["ground call", "control call", "to call", "major call", "tom call"]);
