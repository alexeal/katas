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
