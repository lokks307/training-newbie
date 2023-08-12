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
  // input 값 펼쳐서 배열로 변환
}

function ex2Output([a, b]) {
  //구조분해할당으로 받기
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}

function ex3() {
  ex3Output(input.split(" "));
  // input 값 펼쳐서 배열로 변환
}

function ex3Output([a, b]) {
  //구조분해할당
  console.log(a.repeat(b));
  // a값을 b만큼 더하기 a+a+a..
}

function ex4() {
  //  1.
  let answer;
  for (let i = 0; i < input.length; i++) {
    // i는 inputdml 길이만큼 반복
    input[i] === input[i].toUpperCase() // input의 [i] 인텍스가 대문자로 변경한 input[i] 와 같다면
      ? (answer += input[i].toLowerCase()) // input[i]를 소문자로 변환하고 answer에 이어 붙인다.
      : (answer += input[i].toUpperCase());
    //  input의 [i] 인텍스가 대문자로 변경한 input[i] 와 같지않다면 input[i]를 대문자로 변환하고 answer에 이어 붙인다.
  }

  ex4Output(answer);

  //  2.
  const arr = line.split("").map((char) => {
    // line(string) split('') 으로 배열로 바꾼 후 map으로 변환한다.
    return char === char.toUpperCase() //char = string의 한글자 의미 char(문자열)이 대문자로 변환한 char와 같다면
      ? char.toLowerCase() // char 를 소문자로 바꾸고
      : char.toUpperCase(); // 아니라면 대문자로 바꾼다.
  });
  //arr 대문자 소문자 토글로 새로운 배열 반환 예시) ['a', 'B', 'c']
  ex4Output(arr);
}

function ex4Output(answer) {
  // 1.
  console.log(answer);
  //  2.
  console.log(answer.join("")); //배열의 모든 요소를 문자열로 반환 'aBc'
  // 배열 anwser를 붙여서 스트링으로 변환해서 출력한다.
}

function ex5() {
  console.log(`!@#$%^&*(\\'"<>?:;`);
}

function ex6() {
  input = line.split(" "); //스트링을 배열로 변환
  //  1.
  ex6Output(input);

  //  2.
  const [num1, num2] = input.map(Number); // 배열 input을 map 을 사용하여
  // 숫자로 바꿔 새로운 배열 생성 후 길이가 2인 배열을 구조분해할당
  //(input 배열 map 으로 type 숫자로 변환 input.map((string) => Number(string))를
  //input.map(Number); 축약 )

  const sum = num1 + num2;

  ex6Output(num1, num2, sum);
}

function ex6Output(answer) {
  //  1.
  console.log(
    `${Number(answer[0])} + ${Number(answer[1])} = ${
      Number(answer[0]) + Number(answer[1])
    }`,
  );
  // 배열의 첫번째 인덱스와 두번쨰 인덱스를 숫자 타입으로 바꾸고 출력
}

function ex6Output(num1, num2, sum) {
  // 2.
  console.log(`${num1} + ${num2} = ${sum}`);
}

function ex7() {
  input = line.split(" "); // line 펼쳐서 배열로 변환 (예) 'abc' => ['a', 'b', 'c']
  ex7Output(input);
}

function ex7Output([a, b]) {
  // 배열의 첫번째 인덱스값과 두번째 인덱스값을 구조분해 할당으로 받고 출력
  console.log(a + b);
}

function ex8() {
  const arr = [...input]; //( 전개연산자로 펼쳐서 배열 생성 )
  ex8Output(arr);
}

function ex8Output(answer) {
  // 1.
  for (let i = 0; i < answer.length; i++) {
    // 파라미터로 받은 배열 answer의 길이만큼 반복
    console.log(answer[i]); // 각 배열[i] 값 출력
  }
  // 2.
  answer.map((ch) => console.log(ch)); //( 맵으로 처리해서 각 배열 요소 콘솔로 출력)
}

function ex9() {
  const n = Number(input); // input 값을 넘버 타입으로 변환
  // 1.
  n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
  // n 값을 2로 나누었을때 나머지 값이 0 이면 `${n} is even` 출력 아니면  `${n} is odd` 출력

  var outString = n % 2 === 0 ? `${n} is even` : `${n} is odd`;
  // n 값을 2로 나누었을때 나머지 값이 0 이면 `${n} is even` 저장 아니면  `${n} is odd` 저장
  ex9Output(outString);
}

function ex9Output(answer) {
  console.log(answer); //(출력)
  //판단 후 출력 포멧을을 만들고, 출력 구분할것 코드가 읽기쉬워진다.
}

function ex10(my_string, overwrite_string, s) {
  // 1.
  var answer = "";
  answer =
    my_string.substr(0, s) + //my_string의 0번째 인덱스부터 s 숫자만큼 잘라서 반환
    overwrite_string + //my_string s 번쨰 인덱스 자리에 overwrite_string 넣기
    my_string.substr(s + overwrite_string.length);
  //  my_string의 (s +overwrite_string 의길이 ) 값부터 마지막값까지의 값을 반환해서 더한후 answer에 값 할당

  return answer;
  // 2.
  let arr = [...my_string]; //(전개연산자 펼친 후 배열생성)
  arr.splice(s, overwrite_string.length, overwrite_string);
  //  (arr의 s번쨰 인덱스부터 overwrite_string.length 인덱스 갯수만큼 삭제 후 그 인덱스 자리에 overwrite_string 넣기)
  return arr.join(""); // 배열 join으로 string 변환후 값 리턴
}

function ex11(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
}

function ex12(arr) {
  //  1.
  var answer = "";
  arr.forEach((str) => (answer += str)); // forEach문으로 반복문을 돌려 각 요소값을 answer에 더하기
  return answer;
  // 2.
  return arr.join(""); //배열.join('') string 으로 붙이기 ..
  /*  예)  let arr = ['a', 'b', 'c' ];
    arr.join('') // 출력 abc */
}

function ex13(my_string, k) {
  // 1.
  var answer = "";

  for (let i = 0; i < k; i++) {
    answer += my_string;
  } // k번만큼 반복하고, my_string 깂을 answer에 더하기
  return answer;

  return my_string.repeat(k); // my_string 값을 K 번 반복해서 더하고 리턴
}

function ex14(a, b) {
  //  1.
  var answer = 0;
  const ab = a.toString() + b.toString(); // 각 a와 b를 스트링타입으로 변환 후 ab에 선언
  const ba = b.toString() + a.toString(); // 각 b와 a를 스트링타입으로 변환 후 ba에 선언

  if (ab < ba) {
    //string ab 값이 ba 보다 작다면
    answer = ba; // answer에 ba 할당
  } else {
    answer = ab; //string ab 값이 ba 보다 크거나 같다면 answer에 ab 할당
  }

  return Number(answer); // 스트링 answer를 넘버로 변환후 출력
  // 2.
  const ab = Number(Stinrg(a) + String(b)); //각 a와 b를 스트링타입으로 변환 후 더한값을 타입 넘버로 재변환
  const ba = Number(String(b) + String(a)); //각 b와 a를 스트링타입으로 변환 후 더한값을 타입 넘버로 재변환

  if (ab >= ba) return ab; //
  return ba;

  //(ab가 ba 보다 크거나 같으면 ab 리턴 다른 사람이 읽을때 한번에 이해할 수 있도록 코드작성
  //앞에 조건을 쓰고, 뒤에 쓰지 않는다면 남은 조건이 간결해야함)
}

function ex15(a, b) {
  // 1.
  const plus = a.toString() + b.toString();
  // 각 a와 b를 스트링타입으로 변환 후 plus 선언
  const multiply = 2 * a * b;
  var answer = 0;
  if (plus < multiply) {
    // plus값이 multiply 보다 작다면
    answer = multiply; // answer에 multiply 값 할당
  } else {
    // plus값이 multiply 보다 크거나 같다면
    answer = plus; // answer에 plus 값 할당
  }

  return Number(answer); // string 타입의 answer를 넘버타입으로 변환 후 출력
  //  2.
  const plus = Number(String(a) + String(b));
  // 각 a와 b를 스트링타입으로 변환 후 더하고 더한값을 넘버타입으로 변환후 plus 할당
  const multiply = 2 * a * b;
  if (plus >= multiply) return plus;
  // plus값이 multiply 보다 크거나 같다면 plus 리턴
  return multiply;
  //if 문 조건( plus값이 multiply 보다 크거나 같다면)에 걸리지 않으면 ( multiply 리턴)
}
