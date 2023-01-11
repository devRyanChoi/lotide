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

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  }
};