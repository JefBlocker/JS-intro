///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

var x = 3;
var y = 7;
function sum() {
  return x + y;
}
undefined
sum();
10


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg() {
  var a = 1;
  var b = 2;
  var c = 3;
  return (a + b + c) / 3;
}
undefined
avg();
2


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length


function getLength() {
  var str = 'Call me Ishmael.';
  return str.length;
}
undefined
getLength();
16



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

var x = 4;
var y = 7;

function greaterThan() {
  if (y > x) 
    return true;
  else 
  return false;
}
undefined
greaterThan();
true

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

name = 'Beetlejuice';

function greet() {
  return 'Hello, ' + name + '!';
}
"Beetlejuice"
greet();
"Hello, Beetlejuice!"


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

  var word1 = 'antsy';
  var word2 = 'ardvark';
  var word3 = 'boogies';
  var word4 = 'yurt';

function madlib() {
  return 'The ' + word1 + ' ' + word2 + ' ' + word3 + ' around the ' + word4 + '.';
};
undefined
madlib();
"The antsy ardvark boogies around the yurt."

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

var a = 2;
var b = 5;

function max(){
    if (a > b )
    return a;
  else
    return b;
}
undefined
max();
5

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

var a = 1;
var b = 2;
var c = 3;

function maxOfThree(){
    if ((a > b) && (a > c))
      return a;
    else
    if ((b > a) && (b > c))
        return b;
    else
    if ((c > a) && (c > b))
          return c;
}
undefined
maxOfThree();
3

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

var char = 'e';
var vowels = 'aeiou';


function isVowel(char) {
  switch (char) {
    case 'a':
      return true;
      break;
    case 'e':
      return true;
      break;
    case 'i':
      return true;
      break;
    case 'o':
      return true;
      break;
    case 'u':
      return true;
      break;
    default:
      return false;
  }
}
undefined
isVowel(char);
true

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function checkConsonants(letterToCheck) {
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var isConsonant = false;

    for (i = 0; i < consonants.length; i++) {
        if (letterToCheck == consonants[i]) {
            isConsonant = true;
        }
    }
    return isConsonant;
}

function translate(funString, letterO) {

    var newString = '';

    for (var i = 0; i < funString.length; i++) {
        if (checkConsonants(funString[i])) {
            newString += funString[i] + letterO + funString[i];
        } else {
            newString += funString[i];
        }
    }
    console.log('The "rövarspråket" result is: ' + '"' + newString + '"');
}

translate('I am too sexy for my cat', 'o');
VM3919:25 The "rövarspråket" result is: "I amom totoo sosexoxyoy foforor momyoy cocatot"


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
    var newStr = '';
    for (var i = string.length - 1; i>= 0; i--) {
        newStr += string[i];
    }
    return newStr;
}
undefined
reverse('redrum');
"murder"

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(array) {
  var longestWord = array[0];
  for (var i = 1; i < array.length; i++) {
    if (longestWord.length < array[i].length) {
      longestWord = array[i];
    }
  }
  return longestWord.length;
}

myArray = ['a', 'ba', 'cat', 'doom', 'every', 'foobar', 'girlboi'];
["a", "ba", "cat", "doom", "every", "foobar", "girlboi"]
findLongestWord(myArray);
7

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(array, i) {
  return array.filter(function(elem) {
    if (elem.length > i) {
      return elem;
    }
  });
}

var myArray = ['thingie', 'brainwashers', 'doodad', 'radioactive', 'who', 'Supercalifragilisticexpialidocious'];
undefined
filterLongWords(myArray, 10);
["brainwashers", "radioactive", "Supercalifragilisticexpialidocious"]

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a 
// Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
  var obj = {};
  for (var i = 0; i < string.length; i++) {
    if (obj.hasOwnProperty(string[i])) {
      obj[string[i]] += 1;
    }
    else {
      obj[string[i]] = 1;
    }
  }
  return obj;
}

myStr  = 'abbabcbdbabdbdbabababcbcbab';
"abbabcbdbabdbdbabababcbcbab"
charFreq(myStr);
Object {a: 7, b: 14, c: 3, d: 3}