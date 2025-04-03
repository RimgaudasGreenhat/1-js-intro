/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 1);

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER - 1);


console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(isFinite(5), Number.isFinite(5));
console.log(isFinite(-3.14));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));

console.log(isFinite('asdafag'));
console.log(isFinite(true));
console.log(isFinite([]));
console.log(isFinite({}));


console.log(Number.isInteger(5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(0));
console.log(Number.isInteger(3.14));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));
console.log(Number.isInteger('asd'));
console.log(Number.isInteger(true));
console.log(Number.isInteger([]));

console.log(Number.isNaN(5), isNaN (5));
console.log(Number.isNaN(3.14),isNaN (3.14));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(NaN));

console.log(Number.isNaN('asdfag'),isNaN ('asdfag'));
console.log(Number.isNaN([]),isNaN ([]));
console.log(Number.isNaN({}),isNaN ({}));


const userInput = '22';
const userNumber = parseInt(userInput);
const date = userNumber + 5;

console.log(date);

console.log(parseInt('65'));
console.log(parseInt('65.314'));
console.log(parseInt('-65'));
console.log(parseInt('-65.314'));

console.log(parseInt('labas'));
console.log(parseInt('labas111'));
console.log(parseInt('222labas'));
console.log(parseInt('222labas333'));
console.log(parseInt('222la444bas333'));
console.log(parseInt('2.5'));
console.log(parseInt('2,5'));
console.log(parseInt(true));


console.log(parseFloat('44'));
console.log(parseFloat('44.4'));
console.log(parseFloat('-44'));
console.log(parseFloat('-44.4'));
console.log(parseFloat('44,4'));
console.log(parseFloat('-44,4'));

console.log(parseFloat('55.66labas'));
console.log(parseFloat('labas55.66'));
console.log(parseFloat('55.66la55.66bas55.66'));
console.log(parseFloat('55.66.77'));
console.log(parseFloat('-5-5'));
console.log(parseFloat('--55'));

console.log(parseInt('-5-5'));
console.log(parseInt('--55'));

console.log(parseFloat('5-5'));
console.log(parseFloat('+5-5'));
console.log(parseFloat('+5+5'));
console.log(parseFloat('++55'));






