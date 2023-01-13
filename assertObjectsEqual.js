

const eqObjects = function(object1, object2) {
  if( (Object.entries(object1)).length === (Object.entries(object2)).length) {
    const obj1 = (Object.entries(object1)).flat;
    const obj2 = (Object.entries(object2)).flat;
    if(obj1 === obj2) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
     console.log(false);
  }
};

const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(actual, expected)) {
    console.log("✅✅✅ Assertion Passed: [object Object] === [object Object]")
  } else { 
    console.log("🛑🛑🛑 Assertion Failed: [object Object] !== [object Object]")
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);