let input;

solveThis(ex2);

function solveThis(solveFunction) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input = [line][0];
    // 1.
    // line은 terminal에서 사람이 입력하는 명령어라고 상상해보세요.
    // "Hello World" 라는 문자열처럼, 한 줄로 표현 가능한 데이터가 들어옵니다.
    // 일반적으로 [line][0] 이라는 하드코딩은 나쁜 습관으로 받아들여집니다.
    // 물론 입력은 여러 줄로 나뉘어 들어올 수도 있습니다.
    // 그러나 프로그래머스의 문제 풀이 시스템은 항상 한 줄의 입력만 줍니다.
    // 기대하는 예외상황을 핸들링하는 코드는 좋지만
    // 벌어지지 않을 상황을 처리하는 코드는 역시 나쁩니다.
  }).on("close", solveFunction);
  // 2.
  // 문제풀이에서는 입력을 받았으면 출력을 하는게 도리입니다.
  // 무엇을 출력할지 즉시 이곳에 기술하지 않고 callback 함수로 전달합니다.

  return rl;
}

function ex1() {
  console.log(input);
}

function ex2() {
  ex2Output(input.split(" "));
}

function ex2Output([a, b]) {
  //구조분해할당
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}

function ex3() {
  ex3Output(input.split(" "));
}

function ex3Output([a, b]) {
  //구조분해할당
  console.log(a.repeat(b));
}

function ex4() {
  let answer;
  for (let i = 0; i < input.length; i++) {
    input[i] === input[i].toUpperCase()
      ? (answer += input[i].toLowerCase())
      : (answer += input[i].toUpperCase());
  }
  ex4Output(answer);
  /* const arr = line.split("").map((char) => {  line(string) split('') 으로 배열로 바꾼 후 map
      return char === char.toUpperCase() char = string의 한글자 의미
        ? char.toLowerCase()
        : char.toUpperCase();
    });
    arr 대문자 소문자 토글로 새로운 배열 반환 예시) ['a', 'B', 'c']
    */
}

function ex4Output(answer) {
  console.log(answer);
  //console.log(arr.join(""));  배열의 모든 요소를 문자열로 반환 'aBc'
}

function ex5() {
  console.log(`!@#$%^&*(\\'"<>?:;`);
}

function ex6() {
  input = line.split(" ");
  /*     
  const [num1, num2] = input.map(Number); 
  (input 배열 map 으로 type 숫자로 변환 input.map((string) => Number(string))를 
  input.map(Number); 축약 )
   */
  ex6Output(input);
}

function ex6Output([a, b]) {
  console.log(`${Number(a)} + ${Number(b)} = ${Number(a) + Number(b)}`);

  /*  const sum = num1 + num2; 변수로 의미전달
    console.log(`${num1} + ${num2} = ${sum}`); */
}

function ex7() {
  input = line.split(" ");
  ex7Output(input);
}

function ex7Output([a, b]) {
  console.log(a + b);
}

function ex8() {
  /*  const arr = [...str]; ( 전개연산자로 펼쳐서 배열 생성 ) */
  ex8Output(input);
}

function ex8Output(answer) {
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
  //arr.map((ch) => console.log(ch)); ( 맵으로 처리해서 각 배열 요소 콘솔로 출력)
}

function ex9() {
  ex9Output(input);
}

function ex9Output(answer) {
  n = Number(answer);
  n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
  /* var outString = n % 2 === 0 ? `${n} is even` : `${n} is odd`; (판단)
    (한 코드에 판단과 출력 금지...)
    console.log(outString); (출력) 
    판단 후 출력 포멧을을 만들고, 출력 구분할것 코드가 읽기쉬워진다.  
  */
}

function ex10(my_string, overwrite_string, s) {
  var answer = "";
  answer =
    my_string.substr(0, s) +
    overwrite_string +
    my_string.substr(s + overwrite_string.length);
  /*  let arr = [...my_string] (전개연산자 펼친 후 배열생성)
      arr.splice(s, overwrite_string.length, overwrite_string);
      (arr의 s번쨰 인덱스부터 overwrite_string.length 인덱스 갯수만큼 삭제 후 그 인덱스 자리에 overwrite_string 넣기)
  */
  return answer;
  //  return arr.join(""); 배열 join으로 string 변환후 값 리턴
}

function ex11(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
}

function ex12(arr) {
  var answer = "";

  arr.forEach((str) => (answer += str));
  /*  return arr.join(""); 배열.join('') string 으로 붙이기 .. 
    예)  let arr = ['a', 'b', 'c' ];
    arr.join('') // 출력 abc
  */
  return answer;
}

function ex13(my_string, k) {
  var answer = "";

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;

  // return my_string.repeat(k)
}

function ex14(a, b) {
  var answer = 0;
  const ab = a.toString() + b.toString();
  const ba = b.toString() + a.toString();
  /* const ab = Number(Stinrg(a) + String(b));
    const ba = Number(String(b) + String(a));
  */
  if (ab < ba) {
    answer = ba;
  } else {
    answer = ab;
  }
  /*  if (ab >= ba) return ab;
      return ba;

      (ab가 ba 보다 크거나 같으면 ab 리턴 다른 사람이 읽을때 한번에 이해할 수 있도록 코드작성
      앞에 조건을 쓰고, 뒤에 쓰지 않는다면 남은 조건이 간결해야함)
 */

  return Number(answer);
}

function ex15(a, b) {
  const plus = a.toString() + b.toString();
  // const plus = Number((String(a) + String(b));
  const multiply = 2 * a * b;
  var answer = 0;
  if (plus < multiply) {
    answer = multiply;
  } else {
    answer = plus;
  }

  return Number(answer);
  /* if(plus >= multiply) return plus;
      return multiply 
  */
}
