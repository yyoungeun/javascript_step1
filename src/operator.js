//산술연산자
let n = 1;
console.log(n++); //1
console.log(n); //2
console.log(++n); //3

//대입연산자
let m = 1;
m += 3; //4
m -= 3; //1
m *= 3; //3
m /= 3; //1
console.log(m);

// 논리연산자
// NOT !
// AND &&
// OR ||

const p = true;
console.log(!p); //fasle

const q = true && true;
console.log(q); //true

const r = true || false;
console.log(r); //true

const value = !((true && false) || (true && false) || !false);
console.log(value); //false

//비교연산자
const a = 1;
const b = '1';
//== : type비교안함
const equals = a === b; //false
console.log(equals);
const notequals = a !== b;
console.log(notequals);

const c = 10;
const d = 15;
const e = 15;

//< , >
console.log(c < d); //true
console.log(d > c); //true
console.log(d >= e); //true
console.log(c <= e); //true
console.log(d < c); //false

const prev = '안녕';
const last = '하세요';

console.log(prev + last);
