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

const middle = function(array) {
  let al = array.length;
  
    //1,2 elements
  if (al >= 3) {
    //even numbers
    if (al % 2 === 0) {
      let evenMiddle = Math.floor([al/2]);
      let evenArrMiddle = array.slice(evenMiddle - 1, evenMiddle+1);
      return evenArrMiddle;
    } else {
      let oddIndex = Math.floor([al/2]);
      let oddArr = array.slice(oddIndex,oddIndex+1);
      // let value = array[oddMiddle]; 
      return oddArr;
    }
  } else {
    return [];
  }
  

}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]