const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
    
    


const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false