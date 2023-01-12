const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

let genres = (Object.keys(bestTVShowsByGenre));
console.log(genres)

const findKeyByValue = function (array) {
  
  for ( let show of Object.keys(bestTVShowsByGenre)) {
    console.log(show);
    
  } 
};

//console.log(findKeyByValue(genres));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

