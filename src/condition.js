//if ~ else if
const a = 8;

if (a === 5) {
  console.log('5입니다.');
} else if (a === 10) {
  console.log('10입니다!');
} else if (a === 7) {
  console.log('7입니다.');
} else {
  console.log('5도 아니고 10도 아닙니다. 7도 아닙니다.');
}

//switch case

const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;

  case 'ipad':
    console.log('아이패드');
    break;

  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;

  default:
    console.log('모르겠네요..');
}
