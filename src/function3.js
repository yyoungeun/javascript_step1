//화살표 함수
//ex1
const add = (a, b) => a + b;

const sum = add(1, 2);
console.log(sum);

//ex2
const hello = (name) => {
  console.log(`Hello, ${name}!`);
};

hello('song');

//화살표 함수 , function 함수 차이점
//화살표 함수에서 가리키는 this != function에서 가리키는 값
