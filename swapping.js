let value1 = 'five';
let value2 = 'seven';

console.log('original', value1);
console.log('original', value2);


let value3 = value1;
value1 = value2;
value2 = value3;

console.log('swap', value1);
console.log('swap', value2);