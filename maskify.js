/* **************************************** MASKIFY KATA *********************************************** */
//  Source: https://www.codewars.com
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
function maskify_(cc) {
  // slice get last four digits
  // padStart complete with # until initial string length
  return cc.slice(-4).padStart(cc.length,'#');
}

