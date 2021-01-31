//function

function add(a, b) {
  return a + b;
}

const sum = add(1, 2);

console.log(sum);

//문자열 연결
function hello(name) {
  console.log('hello, ' + name + '!');
}

hello('영은');

//Template Literal
//ES6n : ECMASxript 6 (ES2015)_const, let
// ~ EX10(2019)

function hi(name) {
  return `Hello ${name}`;
}
const result = hi('song');
console.log(result);
