const assertEqual = function(actual, expected) {
  if(actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`)
  } else { 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  }
};

const countLetters = function(str) {
  const lowerCaseStr = str.toLowerCase();  
  let letterCount = 
    {
    l: 0,
    i: 0,
    g: 0,
    h: 0,
    t: 0,
    o: 0,
    u: 0,
    s: 0,
    e: 0,
    n: 0,
  }
  for (let letter of lowerCaseStr) {
    //if we see 'a', aCount++
	  if (letter === 'l') {
	    letterCount.l++;}
		if (letter === 'i') {
	    letterCount.i++;}
		if (letter === 'g') {
	    letterCount.g++;}
		if (letter === 'h') {
	    letterCount.h++;}
		if (letter === 't') {
	    letterCount.t++;}
		if (letter === 'o') {
	    letterCount.o++;}
    if (letter === 'u') {
        letterCount.u++;}
    if (letter === 's') {
        letterCount.s++;}
    if (letter === 'e') {
        letterCount.e++;}
    if (letter === 'n') {
        letterCount.n++;}
  }
	return letterCount;

};


console.log(countLetters("lighthouse in the house"));







