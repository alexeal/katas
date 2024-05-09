// FIZZBUZZ
// input: an interger
// returns Fizz if the input is a multiple of 3
// returns Buzz if the input is a multiple of 5
// returns FizzBuzz if the input is a multiple of 3 and 5
// returns the number if not a multiple of 3 or 5
function isMultipleOf3(numberToTest: number): boolean {
  return numberToTest % 3 === 0;
}
function isMultipleOf5(numberToTest: number): boolean {
  return numberToTest % 5 === 0;
}
function fizzbuzz(numberToTest: number): string {
  if (isMultipleOf3(numberToTest) && isMultipleOf5(numberToTest)) {
    return 'FizzBuzz';
  }
  if (isMultipleOf3(numberToTest)) {
    return 'Fizz';
  }
  if (isMultipleOf5(numberToTest)) {
    return 'Buzz';
  }
  return numberToTest.toString();
}
describe('FizzBuzz', () => {
  it('returns the number', () => {
    const numberToTest = 4;
    expect(fizzbuzz(numberToTest)).toEqual('4');
  })
  it('returns Fizz if the number is a multiple of 3', () => {
    const numberToTest = 3;
    expect(fizzbuzz(numberToTest)).toEqual('Fizz');
  })
  it('returns Buzz if the number is a multiple of5', () => {
    const numberToTest = 5;
    expect(fizzbuzz(numberToTest)).toEqual('Buzz');
  })
  it('returns Fizz if the number is a multiple of 3 and 5', () => {
    const numberToTest = 15;
    expect(fizzbuzz(numberToTest)).toEqual('FizzBuzz');
  })
})