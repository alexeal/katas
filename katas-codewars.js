/* *********************** JS KATAS FROM CODEWARS.COM ************************  */

/* **************************************** MASKIFY KATA *********************************************** */
//  Usually when you buy something, you're asked whether your credit card number, phone number 
//  or answer to your most secret question is still correct. However, since someone could look over 
//  your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
//  Your task is to write a function maskify, which changes all but the last four characters into '#'.
//  Examples (input --> output):
//
//  "4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""
//  "Skippy" --> "##ippy"
//  "Nananananananananananananananana Batman!" --> "####################################man!"
/* ***************************************************************************************************** */

// First iteration
function maskify(cc) {
  const len = cc.length;
  if(len <= 1) {
    return cc;
  }
  for(let i = 0; i < len-4; i++) {
    // Split string into array
    // Replace char at index i by #
    // Join array to get the new string
    cc = cc.split('');
    cc.splice(i, 1, '#');
    cc = cc.join('');
  }
  return cc;
}

// Second iteration
function maskify(cc) {
  // slice get last four digits
  // padStart complete with # until initial string length
  return cc.slice(-4).padStart(cc.length,'#');
}

/* **************************************** PLAYING WITH DIGITS KATA ***************************************** */
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such 
// that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
// (a^p+b^{p+1}+c^{p+2}+d{p+3}+...) = n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) 
// = n * k(a^p+b^{p+1}+c^{p+2}+d^{p+3}+...) = n∗k
// If it is the case we will return k, if not return -1.
/* *********************************************************************************************************** */

// Solution submitted
function digPow(n, p){
  let result=0;
  const nArr = n.toString().split('').map(Number);
  for(let i = 0; i < nArr.length; i++) {
    result+=Math.pow(nArr[i], p);
    p++;
  }
  const k=result/n;
  return Number.isInteger(k) ? k : -1;
}

// Solution given by g964 on codewars
function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}

/* ****************** SUM OF SMALLEST NUMBERS OF AN ARRAY ********************** */
//  Create a function that returns the sum of the two lowest positive numbers 
//  given an array of minimum 4 positive integers. 
//  No floats or non-positive integers will be passed.
/* ***************************************************************************** */

// First iteration
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => {
    return a - b;
  });
  return numbers[0] + numbers[1];
}

// Second iteration
function sumTwoSmallestNumbers(numbers) {  
  return numbers
    .sort((a, b) => { return a - b; })
    .splice(0,2)
    .reduce((a, b) => a + b);
}

// Alternative submitted by some devs on codewars
const sumTwoSmallestNumbers = numbers => numbers.sort((x, y) => x - y).slice(0, 2).reduce((x, y) => x + y);

/* ****************** EXES AND OHS ********************** */
//  Check to see if a string has the same amount of 
//  'x's and 'o's. The method must return a boolean and be 
//  case insensitive. The string can contain any char.
/* ****************************************************** */
// Solution submitted
function XO(str) {
    return str.toLowerCase().replaceAll('x', '').length === str.toLowerCase().replaceAll('o', '').length;
}

// Another solutions given on codewars
// using split()
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
// using filter()
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
// using regex
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

/* *********************** PERSISTENT BUGGER **********************  */
// Write a function, persistence, that takes in a positive 
// parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits 
// in num until you reach a single digit.
// Examples: 
// persistence(39) returns 3 because:
// 3*9 = 27, 2*7 = 14, 1*4 = 4 
// persistence(4) returns 0 because 4 is already a one-digit number
/* ***************************************************************** */
// Solution submitted
function persistence(num) {
    let arr = (''+num).split('').map(Number);
    let nbOfIterations=0;
    while(arr.length > 1) {
        let res = arr.reduce((accumulator, currentValue) => accumulator * currentValue);
        arr = (''+res).split('').map(Number);
        nbOfIterations++;
    }
    return nbOfIterations;
}
// Solution by abetss
function persistence(num, cnt=0) {
  let arrayNum = num.toString().split('');
  return arrayNum.length === 1 ?
    cnt :
    persistence(arrayNum.reduce((x,y) => x*y), ++cnt)
}

/* ************************* LIST FILTERING ************************* */
// In this kata you will create a function that takes 
// a list of non-negative integers and strings and returns a new list 
// with the strings filtered out.
/* ****************************************************************** */
function filter_list(l) {
  return l.filter((item) => !(typeof item === 'string' || item instanceof String));
}

/* ************************ COMPLEMENTARY DNA ************************ */
// Iteration 1
function dnaStrand(dna){
  let str = '';
  for(let letter of dna) {
    switch (letter) {
        case 'A': str+='T'; break;
        case 'T': str+='A'; break;
        case 'G': str+='C'; break;
        case 'C': str+='G'; break;
        default:break;
    }
  }
  return str;
}
// Iteration 2
function dnaStrand(dna){
  var letters = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};
  let str = '';
  for(let letter of dna) {
    str += letters[letter];
  }
  return str;
}
// Iteration 3
var letters = {'A':'T','T':'A','C':'G','G':'C'};

function dnaStrand(dna){
  return dna.split('').map((letter) => letters[letter]).join('');
}

/* ************************ YOUR ORDER, PLEASE ************************ */
// Your task is to sort a given string. 
// Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
/* ******************************************************************** */
// Using a regex to compare only the numbers
function order(words){
  return words
  .split(' ')
  .sort((a, b) => a.match(/\d+/)[0] - b.match(/\d+/)[0])
  .join(' ');
}

/* ******************* EXTRACT DOMAIN NAME FROM URL ******************* */
// Write a function that when given a URL as a string, 
// Ex: https://google.com --> google
/* ******************************************************************** */
// 1st iteration
function domainName(url){
  return url
    .replace('www.', '')
    .slice(0, url.replace('www.', '').indexOf("."))
    .replace('http://', '')
    .replace('https://', '');
}
// 2nd iteration
function domainName(url){
    url = url
        .replace('www.', '')
        .replace('http://', '')
        .replace('https://', '');
    return url.split('.')[0];
}
// Code to improve because it won't work with cowww.com

/* ******************* THE HASTAG GENERATOR ******************* */
// 1st iteration
function generateHashtag (str) {
  hashtag=str
              .replace("#", "")
              .split(' ')
              .map((word) => { 
                  return word ? word[0].toUpperCase() + word.substring(1) : ' ';
              }).join(" ").replace(/ /g, '');
  return hashtag.length !== 0 && hashtag.length < 140 ? "#".concat(hashtag) : false;
}
// 2nd iteration
function generateHashtag (str) {
  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

/* ****************************** WHO LIKES IT ****************************** */
// Input (array)                     -->  Output (string)
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
/* ************************************************************************** */
// Solution submitted
function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}
// Interesting solution given on codewars
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

/* ****************************** SUM OF DIGITS ****************************** */
// Input (number) -->  Output (number)
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
/* *************************************************************************** */
// Congruence Formula (https://en.wikipedia.org/wiki/Digital_root)
function digitalRoot(n) {
  return (n-1) % 9 + 1;
}

/* ********************************** ROT13 ********************************** */
// ROT13 (Rotate13, "rotate by 13 places", sometimes hyphenated ROT-13) is a
// simple letter substitution cipher that replaces a letter with the 13th 
// letter after it
// Input (string) -->  Output (string)
// A --> N
// "EBG13 rknzcyr." --> "ROT13 example."
// "This is my first ROT13 excercise!" --> "Guvf vf zl svefg EBG13 rkprepvfr!"
/* *************************************************************************** */
// Solution given: rotation +13
 function rot13(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + 13]);
}
// Interesting solution given on codewars, cleaner
const rot13 = str =>
  str.replace(/[a-z]/gi, val => String.fromCharCode(val.charCodeAt() + (/[a-m]/i.test(val) ? 13 : -13)));
// Another solution would be a dictionnary and a loop, but I find this too much work for a simple required result 

/* ****************************** GREED IS GOOD ****************************** */
function score( dice ) {
  const counter = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  for (let i = 0; i < dice.length; i++) {
    counter[dice[i]]++
  }

  const totalScore = Object.values(counter).reduce((accumulator, currentValue, i) => {
    if (i === 0) {
      return accumulator + (currentValue % 3) * 100 + Math.trunc(currentValue / 3) * 1000
    } else if (i === 4) {
      return accumulator + (currentValue % 3) * 50 + Math.trunc(currentValue / 3) * 500
    } else {
      return accumulator + Math.trunc(currentValue / 3) * ((i + 1) * 100)
    }
  }, 0);

  return totalScore;
}

/* ****************************** PICK PEAKS ****************************** */
function pickPeaks(arr){
    const response = { pos: [], peaks: [] };
    for (let index = 1; i < arr.length - 1; i++) {
        let cursor = 1;
        while (arr[index] === arr[index + cursor]) next++;
        if (arr[index] > arr[index - 1] && arr[index] > arr[index + cursor]) {
            response.pos.push(index);
            response.peaks.push(arr[index]);
        };
    };
    return response;
}

/* ****************************** INT32 TO IPv4 ****************************** */
// Given an unsigned integer
// Get IP address, ex:
// 2149583361 ==> "128.32.10.1"
// 32         ==> "0.0.0.32"
// 0          ==> "0.0.0.0"
/* *************************************************************************** */
function int32ToIp(int32){
  // convert to binary then complete with 0 to get 32bits
  let binaryNumber = int32.toString(2).padStart(32, '0');
  let buffer = [];
  let result = [];
  let i = 8; // 32bits = 4bytes = 4*8bits
  // get an array of 4 bytes
  for (let index = 0; index < 4; index++) {
    buffer[index] = binaryNumber.slice(i - 8, i);
    i += 8;
    if (!buffer[index]) {
      buffer[index] = '0';
    }
  }
  // convert each bytes into integer
  for (let i = 0; i < buffer.length; i++) {
    result[i] = parseInt(buffer[i], 2);
  }
  return result.toString().replace(/,/g, '.');
}

/* ************************** HUMAN READABLE DURATION FORMAT ************************** */
/*
    Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

    The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    It is much easier to understand with an example:

    For seconds = 62, your function should return 
        "1 minute and 2 seconds"
    For seconds = 3662, your function should return
        "1 hour, 1 minute and 2 seconds"
*/
/* ************************************************************************************ */
// First iteration, basics
function formatDuration (seconds){
  if(seconds == 0) return "now";
  var s = {
    "year" : (60 * 60 * 24 * 365),
    "day" : (60 * 60 * 24),
    "hour" : (60 * 60),
    "minute" : 60
  }
  var output = new Array();
  var years = Math.floor(seconds / s.year);
  if(years > 0){
    output.push(years + " year" + (years == 1 ? "" : "s"));
    seconds = seconds % s.year;
  }
  var days = Math.floor(seconds / s.day);
  if(days > 0){
    output.push(days + " day" + (days == 1 ? "" : "s"));
    seconds = seconds % s.day;
  }
  var hours = Math.floor(seconds / s.hour);
  if(hours > 0){
    output.push(hours + " hour" + (hours == 1 ? "" : "s"));
    seconds = seconds % s.hour;
  }
  var minutes = Math.floor(seconds / s.minute);
  if(minutes > 0){
    output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
    seconds = seconds % s.minute;
  }
  if(seconds > 0){
    output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
  }
  if(output.length > 1){
    var last = output.pop();
    return output.join(", ") + " and " + last;
  } else {
    return output[0];
  }
}
// Refactoring (with the help of MDN docs and Google)
function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  // 1 minute = 60 seconds
  // 1 hour = 3600 seconds
  // 1 day = 86400 seconds
  // 1 year = 31536000 seconds
  const date = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  const readableDate = [];
  for (const key in date) {
    let curr = Math.floor(seconds / date[key]);
    if (curr) readableDate.push(`${curr} ${key}${curr !== 1 ? 's' : ''}`);
    seconds %= date[key];
  }
  return readableDate.length > 1 ? readableDate.join(', ').replace(/, ([^,]+)$/, ' and $1') : readableDate[0];
}