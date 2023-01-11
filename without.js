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


const without = function(source, itemsToRemove) {
  
  for (let i = 0; i < source.length; i++) {
    
      if (source[i] === itemsToRemove) {
        source.splice(i, 1);
      }
  }
  console.log(source);  
  return source;      
}; 


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

let words = ["hello", "world", "lighthouse"];
words = without(words, "lighthouse"); // no need to capture return value for this test case
console.log(words);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);