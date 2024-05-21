/* **************************************** PLAYING WITH DIGITS KATA ***************************************** */
// Source: https://www.codewars.com
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such 
// that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
// (a^p+b^{p+1}+c^{p+2}+d{p+3}+...) = n∗k(a^p + b^{p + 1} + c^{p + 2} + d^{p + 3} + ...) 
// = n * k(a^p+b^{p+1}+c^{p+2}+d^{p+3}+...) = n∗k
// If it is the case we will return k, if not return -1.
/* *********************************************************************************************************** */

// Iteration I made
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

// Answer given by g964 on codewars
function digPow_(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}
