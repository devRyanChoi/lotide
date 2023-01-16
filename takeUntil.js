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

const takeUntil = function(array, callback) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  }
  return results;
};

_.takeWhile(users, function(o) { return !o.active; });

//Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


//Expected
[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]



const takeUntil = function(array, callback) {
  const results = [];


  for (const item of array) {
    
    if(callback(item)) {
      return results;
    }

    results.push(item);
  }

  return results;
}

// const myCallback = function(x) {
//   return x > 3;
// };

const myCallback = (x) => {
  return x > 3;
};