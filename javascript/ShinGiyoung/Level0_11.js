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
  const ab = Number(String(a) + String(b)); //각 a와 b를 스트링타입으로 변환 후 더한값을 타입 넘버로 재변환
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

function ex16(num, n) {
  var answer = 0;
  answer = num % n === 0 ? 1 : 0; // num % n을 나눴을때 나머지가 0 이라면 1을 아니라면 0 을 answer에 할당
  return answer;
}

function ex17(number, n, m) {
  if (number % n !== 0) return 0;
  // number를 n 으로 나눴을때 나머지가 0이 아니라면 0 리턴
  if (number % m !== 0) return 0;
  // number를 m 으로 나눴을때 나머지가 0이 아니라면 0 리턴
  return 1;
}

function ex18(n) {
  var answer = 0;
  if (n % 2 === 1) {
    // n을 2로 나누었을 때 나머지가 1이라면 즉,홀수라면
    for (let num = 1; num <= n; num++) {
      // n번만큼 반복한다
      if (num % 2 === 1) {
        //num이 2로 나누었을 때 나머지가 1이라면 즉,홀수라면
        answer += num; // answer에 num을 더한다
      }
    }
    return answer; // answer 값 리턴
  }
  // n을 2로 나누었을 때 나머지가 1이아니라면 즉,짝수라면
  for (let num = 1; num <= n; num++) {
    // n번 만큼 반복한다
    if (num % 2 === 0) {
      //num이 2로 나누었을 때 나머지가 1이아니라면 즉,짝수라면
      answer += num * num; //num제곱 값을 answer에 더한다
    }
  }
  return answer; // answer 값 리턴
}

function ex19(ineq, eq, n, m) {
  var answer = 0;
  const operation = {
    ">=": n >= m,
    "<=": n <= m,
    ">!": n > m,
    "<!": n < m,
  };
  // 객체값 설정

  answer = operation[ineq + eq] ? 1 : 0; // 객체 값 가져오기
  //만약 ineq + eq가 '>=' 이라면 n>=m 리턴
  // operation[ineq + eq]값이 true 라면 1을 answer에 할당 아니라면 0 할당
  return answer;
}

function ex20(a, b, flag) {
  var answer = 0;
  answer = flag ? a + b : a - b; // flag 기 true 라면 a+b 아니라면 a-b 값을 answer 에 할당

  return answer;
}

function ex21(code) {
  var mode = 0;
  var ret = [];
  const arr = code.split(""); //code 값을 split('')으로 펼쳐서 배열로 변환

  arr.forEach((char, idx) => {
    //arr length 만큼 반복
    if (char == 1) {
      // 각 arr 의 요소가 1이고
      mode = mode == 0 ? 1 : 0; //mode 값이 0이면 1을 할당하고 아니라면 0을할당
    } else {
      //각 arr 의 요소가 1이 아니rh
      idx % 2 === mode && ret.push(char); // idx 값을 2 로 나누었을떄 나머지가 mode 와 같다면
      // ret 배열 맨뒤에 char 값을 추가한다
    }
  });

  if (ret.join("") === "") {
    // ret 배열을 join('')해서 string 타입으로 바꿨을 떄, 빈값이이라면
    return "EMPTY"; //'EMPTY' 를 반환하고
  }

  return ret.join(""); // 아니라면 ret 배열을 join('')해서 string 값을 바꾼 후 리턴한다
}

function ex22(a, d, included) {
  var answer = 0;

  for (let i = 0; i < included.length; i++) {
    // included.length 길이만큼 반복
    if (included[i]) answer += a + i * d;
    //included[i] 값이 true일때 answer에 a + i * d 더한다.
    //a + i * d; 이유는 등차수열의 일반항 구하는 공식이 sum = 초항(a) +(n-1)d(공차) 이기때문이다
    // 여기서 n 값은 i + 1 이기 때문에, sum은 a + i * d이다
  }

  return answer;
}

function ex23(a, b, c) {
  var answer = 0;

  if (a === b && b === c) {
    // a와 b와 c가 같다면
    answer =
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
    // answer에 (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)을 할당
  } else if (a === b || b === c || a === c) {
    // 세개의 파마리터중 두개가 같다면
    answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    //  (a + b + c) * (a ** 2 + b ** 2 + c ** 2)을 answer에 할당
  } else {
    // 모두 값이 다르다면
    answer = a + b + c;
    // a+b+c 값을 answer에 할당
  }

  return answer;
}

function ex24(num_list) {
  let multiply = 1;
  let plus = 0;
  var answer;
  for (let i = 0; i < num_list.length; i++) {
    // num_list 길이만큼 반복
    multiply *= num_list[i]; // 모든 요소의 곱
    plus += num_list[i]; // 모든 요소의 합
  }
  answer = multiply < plus ** 2 ? 1 : 0;
  // multiply 값이 plus의 제곱보다 작으면 1을 answer 할당 아니라면 0 할당
  return answer; // answer 값 리턴
}

function ex25(num_list) {
  var answer = 0;
  const even = num_list.filter((num) => num % 2 === 0).join("");
  /* num_list 배열을 filter 를 사용해 num 값이 짝수인 요소만 리턴하여 새로운 배열 생성 후 
  모든 요소를 연결 */
  const odd = num_list.filter((num) => num % 2 === 1).join("");
  /* num_list 배열을 filter 를 사용해 num 값이 홀수인 요소만 리턴하여 새로운 배열 생성 후 
  모든 요소를 연결 */
  answer = Number(odd) + Number(even);
  //문자열 odd 와 even을 숫자 타입으로 각 변경 후 answer에 할당
  return answer;
}

function ex26(num_list) {
  var answer =
    num_list.at(-1) > num_list.at(-2)
      ? // at() 을 이용하여 마지막 값과 마지막으로부터 -1 인덱스 값 구하기
        // num_list 의 마지막 요소 값이 그 전 요소 값보다 크다면
        num_list.at(-1) - num_list.at(-2) // 마지막 요소 값 - 그 전 요소값을 answer 에 할당
      : num_list.at(-1) * 2; // 머자먹 요소값이 그 전 요소값보다 작거나 같다면 마지막요소값 * 2 값을 answer 에 할당
  num_list.push(answer); // answer 값을 맨 끝에 추가
  return num_list;
}

function ex27(n, control) {
  const operation = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };

  for (let i = 0; i < control.length; i++) {
    //control length 만큼 반복
    n += operation[control[i]];
    //control 각 문자열을값으로  operation 객체 값을 찾아 n 값에 더해준다
  }

  return n; // n 값 출력
}

function ex28(numLog) {
  const operation = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };
  var answer = "";

  for (let i = 1; i < numLog.length; i++) {
    // i 가 1부터  numLog.length -1 까지 반복
    const key = numLog[i] - numLog[i - 1];
    // numLog[i] - numLog[i - 1] 값을 구하고
    answer += operation[key];
    //operation객체에서 key 값으로 기록 찾기
  }

  return answer;
}

function ex29(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    //queries 길이만큼 반복
    const [a, b] = queries[i];
    // 구조분해 할당으로 a와 b 값 차례대로 구하고
    [arr[a], arr[b]] = [arr[b], arr[a]];
    // 구조분해 할당으로 서로 값 바꾸기
    //arr[a] = arr[b], arr[b]= arr[a] 한번에 맞교환한다
  }

  return arr;
}

function ex30(arr, queries) {
  var answer = [];

  for (const query of queries) {
    //for in 문으로 queries 의 요소들을 가져온다
    const [s, e, k] = query; // 구조분해 할당으로 query를 각 s,e,k 에 정의하고
    const sum = arr.slice(s, e + 1).filter((sum) => sum > k);
    // slice 를 이용하여  arr[s] 부터 arr[e]까지 가져와 새로운 배열 생성
    // 새로운 배열에 filter 를 사용하여 각 요소 들이 k 보다 큰 것들만 추출해서 sum 배열을 생성
    if (sum.length !== 0) {
      // sum배열의 크기가 0 이상일때,
      answer.push(Math.min(...sum)); //sum 배열요소중 가장 작은 값을 answer배열 맨뒤에 push로 넣고
    } else {
      answer.push(-1); // sum 배열이 빈 값일때, -1값을 answer배열 맨 뒤에 push로 넣는다
    }
  }
  return answer; // answer 값 리턴
}
