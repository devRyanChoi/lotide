const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
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



eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);




/*
//length  filter
const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
  return false;
}

for (let i = 0; i < arr1.length; i++) {
  const element1 = arr1[i] ;
  const element2 = arr1[i] ;

  if(element1 !== element2) {
    return false;
  }
  return true;
}
};
*/

