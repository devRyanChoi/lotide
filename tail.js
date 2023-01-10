const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`);
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray[i - 1] = array[i];
  }
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); 