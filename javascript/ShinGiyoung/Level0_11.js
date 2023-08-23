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
  //  1.
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

  //2.
  const ODD = 1; //홀수
  const EVEN = 0; // 짝수

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    //n 이하의 수 모두를 arr에 넣기
  }

  if (n % 2 === 1) {
    // n 이 홀수라면
    arr = arr.filter((el) => el % 2 === ODD);
    // filter 메소드를 이용해서 arr의 요소가 2로 나누었을때 나머지가 1 인것만 리턴
    // filter 는 조건이 참인것만 리턴해서 새로운 배열 생성 즉, 홀수값만 담긴 배열 생성
  } else {
    // n이 짝수라면 또는 0 이라면
    arr = arr.filter((el) => el % 2 === EVEN);
    //filter 메소드를 이용해서 arr 요드가 2로 나누었을떄 0 인것만 리턴
    // filter 는 조건이 참인것만 리턴해서 새로운 배열 생성 즉, 짝수값만 담긴 배열 생성
    arr = arr.map((n) => n ** 2);
    // n을 제곱한 값을 리턴해 새로운 배열 생성
  }

  const result = arr.reduce(function add(sum, currValue) {
    //reduce 메서드를 이용해서 앞에서 구한 모든 배열 요소의 합을 result에 담는다.
    return sum + currValue;
  }, 0);

  return result;
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
  //1.
  var answer = 0;

  for (let i = 0; i < included.length; i++) {
    // included.length 길이만큼 반복
    if (included[i]) answer += a + i * d;
    //included[i] 값이 true일때 answer에 a + i * d 더한다.
    //a + i * d; 이유는 등차수열의 일반항 구하는 공식이 sum = 초항(a) +(n-1)d(공차) 이기때문이다
    // 여기서 n 값은 i + 1 이기 때문에, sum은 a + i * d이다
  }

  return answer;

  //2.
  return included.reduce((sum, isIncluded, i) => {
    if (isIncluded) {
      sum += a + i * d;
    }
    return sum;
  }, 0);
  /* reduce() 메소드를 사용하여 누적값구하기. 
    isIncluded는 현재 반복을 돌고 있는 요소값을 의미하며 , 이 현재 요소값이 true이면 다음과 같은
    로직을 실행한다,
    처음 실행될때 초기값 0 = 현재요소값 + 현재 인덱스 값 * d 값으로 등차수열 일반항을 구한다.
    일반항을 sum에 할당하고 이 값을 반환한다. reduce메소드로 구한 값을 return */
}

function ex23(a, b, c) {
  //1.
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

  //2.
  const sum = a + b + c;
  const sumOfSquares = a ** 2 + b ** 2 + c ** 2;
  const sumOfCubes = a ** 3 + b ** 3 + c ** 3;
  //연상량이 크지 않다면 연산을 미리 해두기 !! -> 코드를 쉽게 읽을 수 있음
  if (a === b && b === c) {
    return sum * sumOfSquares * sumOfCubes;
  } else if (a === b || a === c || b === c) {
    return sum * sumOfSquares;
  } else {
    return sum;
  }
}

function ex24(num_list) {
  let multiply = 1;
  let plus = 0;
  var answer;
  //1.
  for (let i = 0; i < num_list.length; i++) {
    // num_list 길이만큼 반복
    multiply *= num_list[i]; // 모든 요소의 곱
    plus += num_list[i]; // 모든 요소의 합
  }

  answer = multiply < plus ** 2 ? 1 : 0;
  // multiply 값이 plus의 제곱보다 작으면 1을 answer 할당 아니라면 0 할당
  return answer; // answer 값 리턴

  //2.
  for (const num of num_list) {
    multiply *= num;
    plus += num; /* for of 문으로 배열의 요소 쉽게 접근할 수 있음.*/
  }
  answer = multiply < plus ** 2 ? 1 : 0;
  return answer;
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
  //1.
  var answer =
    num_list.at(-1) > num_list.at(-2)
      ? // at() 을 이용하여 마지막 값과 마지막으로부터 -1 인덱스 값 구하기
        // num_list 의 마지막 요소 값이 그 전 요소 값보다 크다면
        num_list.at(-1) - num_list.at(-2) // 마지막 요소 값 - 그 전 요소값을 answer 에 할당
      : num_list.at(-1) * 2; // 머자먹 요소값이 그 전 요소값보다 작거나 같다면 마지막요소값 * 2 값을 answer 에 할당
  num_list.push(answer); // answer 값을 맨 끝에 추가
  return num_list;
  //2
  const backup = [...num_list]; //배열 복사
  const lastNum =
    backup.pop(); /* pop()메소드는 배열의 마지막 요소를 제거하고 그요소를 반환한다.
  즉 backup의 마지막 요소를 가져옴 backup은 마지막 요소가 제거된 배열이다. */
  const prevNum =
    backup.pop(); /* 마지막 요소가 제거된 backup의 배열에서 pop()메소드를 사용하여 또다시 마지막 요소를
  가져온다.  */
  if (lastNum > prevNum) {
    num_list.push(lastNum - prevNum); //push 로 배열의 마지막자리에 추가
    return num_list;
  }
  num_list.push(lastNum * 2);
  return num_list;
}

function ex27(n, control) {
  const operation = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };
  //1.
  for (let i = 0; i < control.length; i++) {
    //control length 만큼 반복
    n += operation[control[i]];
    //control 각 문자열을값으로  operation 객체 값을 찾아 n 값에 더해준다
  }
  //2.

  const controlMap = {
    w: +1,
    s: -1,
    d: +10,
    a: -10,
  };
  for (const control of controls) {
    //for of 문으로 문자열 쉽게 가져오기.. 각 인덱스의 요소를 가져옴
    if (controlMap.hasOwnProperty(control)) {
      /* hasOwnProperty()메서드는 이 object가 지정된 속성을 자체 속성으로 가지고 있는지 여부를 나타내는 boolean을 반환
       controlMap 객체안 control키가 있을때 */
      n += controlMap[control];
    }
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
  //1.
  for (let i = 1; i < numLog.length; i++) {
    // i 가 1부터  numLog.length -1 까지 반복
    const key = numLog[i] - numLog[i - 1];
    // numLog[i] - numLog[i - 1] 값을 구하고
    answer += operation[key];
    //operation객체에서 key 값으로 기록 찾기
  }
  //2.
  let prevNum = numLog[0];
  /* for of 문을 사용하여 배열이 요소 가져온다,
    다만 index[0]자리에서 시작하지 않기 때문에 따로 밖에서 0번째 인덱스 요소를 구하고,
    numLog 배열을 slice 메서드를 이용하여 [0]번쨰 인덱스를 자르고 나머지를 반환해 값을 입력. */
  for (const num of numLog.slice(1)) {
    const key = num - prevNum;
    answer += operation[key];
    prevNum = num; // 반복문이 끝나기 전에 prevNum 에 현재 요소값 할당
  }

  return answer;
}

function ex29(arr, queries) {
  //1.
  for (let i = 0; i < queries.length; i++) {
    //queries 길이만큼 반복
    const [a, b] = queries[i];
    // 구조분해 할당으로 a와 b 값 차례대로 구하고
    [arr[a], arr[b]] = [arr[b], arr[a]];
    // 구조분해 할당으로 서로 값 바꾸기
    //arr[a] = arr[b], arr[b]= arr[a] 한번에 맞교환한다
  }

  //2.
  for (const query of queries) {
    //queries의 요소 가져오기
    const [a, b] = (query[
      // 구조분해 할당으로 a와 b 값 차례대로 구하고
      (arr[a], arr[b])
    ] = [arr[b], arr[a]]);
    // 구조분해 할당으로 서로 값 바꾸기
    //arr[a] = arr[b], arr[b]= arr[a] 한번에 맞교환한다
  }
  return arr;
}

function ex30(arr, queries) {
  var answer = [];
  //1.
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
  //2.
  for (const [start, end, threshold] of queries) {
    /* 바로 구조분해할당으로 start, end, threshold (   const [s, e, k] = query; ) 가져오기.. */
    const filteredArr = arr
      .slice(start, end + 1)
      .filter((value) => value > threshold);
    if (filteredArr.length === 0) {
      /* filteredArr배열의 크기가 0일때(빈배열)
      answer.push(-1);로직을 수행하고 다음을 수행하지 않고 종료 한 후  다시 반복문의 처음으로 돌아간다*/
      answer.push(-1);
      continue;
    }
    answer.push(Math.min(...filteredArr));
  }
  return answer; // answer 값 리턴
}

function ex31(arr, queries) {
  for (const query of queries) {
    //배열 queries 의 길이만큼 반복 query는 각 queries요소
    const [s, e, k] = query; // query를 구조분해할당으로 각 s,e,k에 선언
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        //i 가 k의 배수가 아니면
        arr[i] += 1; //arr[i] 에 +1
      }
    }
  }

  return arr; //arr 반환
}

function ex32(l, r) {
  var answer = [];
  //1.
  for (let num = l; num <= r; num++) {
    // l <= num <= r, 해당 조건만큼 반복
    const chgStr = String(num); // num을 Strimg 타입으로 변환한다음
    if (/^[05]+$/.test(chgStr)) {
      //test() 메서드를 이용하여 0과 5로 만 이루어진 값을 찾는다
      //test() 는 0과 5로 이루어져 있다면 true를 반환 아니라면 false 를 반환한다.
      answer.push(num); // 0과 5로 이루어진 num 값을 answer 배열 맨 뒤에 push()메서드로 추가한다.
    }
  }
  return answer.length > 0 ? answer : [-1]; //answer 배열의 길이가 0 이라면 [-1]울 반환 아니라면
  //  answer를 반환한다

  //2.
  function isSpecialNumber(num) {
    /* 코드 따로 분리 의미 있는 단위로 분리함.  */
    const chgStr = String(num);
    return /^[05]+$/.test(chgStr);
  }

  for (let num = l; num <= r; num++) {
    if (isSpecialNumber(num)) {
      answer.push(num);
    }
  }
  return answer.length ? answer : [-1];
  /* 배열의 length가 존재하면 true,, 아니면 false */

  //3. 정규표현식 사용하지 않고 풀기
  for (let i = l; i <= r; i++) {
    const item = String(i); // string으로 변환후
    if ([...item].every((el) => el === "5" || el === "0"))
      /* string을 스프레드로 펼쳐서 배열로 반환후 every()메서드를 이용해서 모든 요소가 5 or 0 으로 되어있다면 true
    아니면 fasle 값을 반환   */
      answer.push(Number(item));
  }
  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}

function ex33(start, end) {
  var answer = [];
  for (let i = start; i <= end; i++) {
    // end - start + 1 번 반복하면서 i 는 1씩 증가한다
    answer.push(i); //answer에 push 메서드를 이용하면 마지막 자리에 i를 추가한다.
  }

  return answer;

  //2.
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  /* Array() 생성자활용
   */
  //3.
  return Array(end - start + 1)
    .fill()
    .map((_, index) => start + index);
  /* Array() 생성자활용
    배열의 길이가 end - start + 1 배열을 fill()로 undefine로 모두 채우고 
    map 메서드를 이용해서 start + index 값으로 새로운 배열 생성
   */
}

function ex34(n) {
  //1.
  var answer = [n]; // answer 초기값을 [n] 으로 설정
  while (n !== 1) {
    // n이 1이 아닐떄까지 반복한다.
    n % 2 === 0 ? (n = n / 2) : (n = 3 * n + 1); // n을 2로 나누었을떄, 나머지가 0 이면
    // n / 2 값을 n에 할당하고 나머지가 0이 아니라면 3 * n +1 을 n 에 할당한다.
    answer.push(n); //n 값을 answer push() 메서드를 이용하여, 마지막 자리에 계산된 n 값을 추가한다
  }
  return answer; // answer 값 리턴

  //2.
  function applyCollatzAlgorithm(num) {
    return num % 2 === 0 ? num / 2 : 3 * num + 1;
    /*코드분리. 의미있는 단위로 분리한다. */
  }
  var sequence = [n];
  while (n !== 1) {
    n = applyCollatzAlgorithm(n);
    sequence.push(n);
  }
  return sequence;
}

function ex35(arr) {
  //1.
  var stk = [];
  var i = 0;
  while (i < arr.length) {
    // i가 arr.length 보다 작을뗴 true면 계속 반복한다.
    if (stk.length !== 0 && stk.at(-1) >= arr[i]) {
      stk.pop();
      // stk.length가 빈배열이 아니고, stk 마지박 요소가 arr[i] 보다 크거나 같을때 pop()메소드를 이용하여
      //stk의 마지막요소를 제거한다.
    } else {
      stk.push(arr[i]);
      i++;
      //stk.length가 빈배열이거나 stk.length가 빈배열이 아니고, stk 마지막 요소가
      // arr[i] 보다 작을때, stk 마지막 요소에 arr[i]를 추가하고 i 를 1 증가시킨다.
    }
  }

  return stk; //stk 값 리턴

  //2.코드 분리
  function popStackUntilValid(currentValue) {
    while (stack.length !== 0 && stack.at(-1) >= currentValue) {
      stack.pop();
      /*while문은 조건이 해당 되지 않으면 실행하지않는다  */
    }
  }
  const stack = [];
  for (const num of arr) {
    popStackUntilValid(num);
    stack.push(num);
    /* 어차피 +1 을하더라도 의미가없음 .. 코딩테스트 배열만들기 4 참고...
     */
  }
  return stack;
}

function ex36(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

function ex37(a, b, c, d) {
  const dice = [a, b, c, d];
  dice.sort((x, y) => x - y); // sort()메서드로 오름차순으로 정렬

  if (dice[0] == dice[3]) {
    // dice[0] == dice[3] 가같으면 ,: 모든 요소가 같다면
    return 1111 * dice[0]; //1111* 아무 요소 하나 곱해서 리턴
  }

  if (dice[1] == dice[3] || dice[0] == dice[2]) {
    let p = dice[2]; // dice[1] == dice[3] 가 거나  dice[0] == dice[2] 같다면
    // 세개의 요소가 같고 하나의 요소가 다르다면 sort 했기 때문에 어떤 조건에도
    //dice[2] 은 항상같다 예 [1,3,3,3] or [3,3,3,5]
    let q = dice.filter((item) => item !== dice[2])[0];
    // filter() 메셔드를 이용해 dice[2]과 같지않은 요소만 반환하고, 가져온다
    return (10 * p + q) ** 2;
    // (10 * p + q) ** 2값 반환
  }

  if (dice[0] === dice[1] && dice[2] === dice[3]) {
    //공통으로 짝지어진 요소가 2개 일때,
    let p = dice[0];
    let q = dice[2];
    return (p + q) * Math.abs(dice[0] - dice[2]);
    //(p + q) * Math.abs(dice[0] - dice[2]) 값 리턴 Math.abs메서드는 절대값을 반환
  }

  if (
    (dice[0] === dice[1] && dice[2] !== dice[3]) ||
    (dice[1] === dice[2] && dice[0] !== dice[3]) ||
    (dice[2] === dice[3] && dice[0] !== dice[1])
    // [1,1,2,4] or [1,2,2,4] or [1,2,3,3] 일떄
  ) {
    if (dice[0] === dice[1] && dice[2] !== dice[3]) {
      return dice[2] * dice[3]; // 각 위 조건중 해당하는 조건에 나머지 값 구해서 곱하기
    }

    if (dice[1] === dice[2] && dice[0] !== dice[3]) {
      // 각 위 조건중 해당하는 조건에 나머지 값 구해서 곱하기
      return dice[0] * dice[3];
    }

    if (dice[0] !== dice[1] && dice[2] === dice[3]) {
      // 각 위 조건중 해당하는 조건에 나머지 값 구해서 곱하기
      return dice[0] * dice[1];
    }
  }
  //dice 배열중 중복된 값이 없다면 가장 작은값 리턴
  return dice[0];
}
/*
 주사위게임입니다. 저는 정확하게 이런 순서로 코드를 작성할 거예요
  1. 숫자를 정렬한다
  2. 각 주사위 숫자의 개수를 센다
  3. 주사위 규칙에 따라 점수를 계산한다
    3-1. 모두 같은 경우
    3-2. 모두 다른 경우
    3-3. 2개는 같지만, 나머지가 다른 경우
    
    위 3가지 케이스를 머리속에서 지워보세요.
    남은 케이스는 주사위가 (2🎲🎲, 2🎲🎲)씩 나왔거나, (3🎲🎲🎲,1🎲)씩 나온 경우입니다.
    나머지 케이스를 고려할 필요가 없습니다. 머리가 가벼워지죠?

    3-4. 2개씩 같은 경우
    3-5. 3개만 같은 경우

 A. 주사위게임은 순서가 상관없습니다.
    그러나 숫자를 정렬해두면, 사람의 머리속으로 상상하는 내용이 단순해집니다.
 B. 주의! object의 keys는 String입니다. 나중에 key를 숫자로 쓰려면 Number로 변환해줘야 합니다.
*/
function ex38DiceGame(a, b, c, d) {
  const numbers = [a, b, c, d]; //숫자 배열
  numbers.sort((x, y) => x - y); // 숫자를 오름차순으로 정렬

  const diceReport = countDuplicates(numbers);
  const keys = Object.keys(diceReport);
  //object key 값을 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
  //diceReport가  {'1' :1, '2':1, '3':2 }라면 keys는 ['1', '2','3']
  switch (keys.length) {
    case 1: //모든 수가 같다면을 의미
      return sameAll(a);
    case 4: // 모든 수가 다름을 의미
      return differentAll(numbers);
    case 3: // 같은 수가 2개이고 서로 다른수 하나씩을 의미
      return same211(diceReport);
    case 2: // 같은수 3 개 이고 다른수하나 or  같은수 2개씩 의미
      if (diceReport[a] === 2)
        // 같은수 2개씩을 의미 왜냐하면 같은수 3 다른수 1 라면 a,b,c,d 어떤 것이든 2가 나올수없음
        // diceReport[a] ===3 || diceReport[a] === 1 이렇게 비교할 수도 있는데, 2 한번만 비교하는게 더 간편해요.
        return same22(keys.map(Number)); //// 같은수 2개씩일때 로직 number type 변환
      return same31(diceReport, keys.map(Number)); //같은수 3개 다른수 1나일때 실행할 로직
  }
}

function countDuplicates(arr) {
  /* 주사위 결과값이 담긴 정렬된 배열 arr*/
  const countMap = {};

  for (const num of arr) {
    //arr의 각 요소 가져오기
    if (countMap[num] === undefined) countMap[num] = 0;

    countMap[num] += 1;
    /* countMap의  key num의 값이 undefined 라면 countMap[num] = 0; 추가 후
      +1 해주기 countMap[num] = 0;해주는 이유는 값이 없어서 오브젝트에 초기값 설정한다고 보면 됨.
       countMap[num] 값이 없는데 undefined 에 +1 해줄 수 없기때문.
    */
  }
  /* 따라서 만약 arr가 arr[1,2,3,3] 이라면 countMap는 {'1' :1, '2':1, '3':2 } 이렇게 만들어진다.
  참고로 object의 key는 string.  */
  return countMap;
}

function sameAll(p) {
  return p * 1111;
}
function same31(report, [p, q]) {
  if (report[p] === 1) [p, q] = [q, p]; // p가 1개인 경우, swap(p ,q). 그럼 p가 3개짜리 숫자가 됩니다.
  //diceReport[key] 의 값이 1이면 한개짜리인 숫자를 의미 바꿔주기.
  return Math.pow(10 * p + q, 2);
}

function same22([p, q]) {
  return (p + q) * Math.abs(p - q);
}

function same211(report) {
  const [q, r] = Object.keys(report) //object key 값을 동일한 순서로 순회되는 열거할 수 있는 배열로 반환 구조분해할당
    .filter((key) => report[key] === 1)
    .map(Number);
  /* filter 메서드로 report[key]값이 1인것 즉, 서로 다른 수를 의미 찾고 map메서드로 넘버로 변환 object key는
  string type이라서.. */
  return q * r;
}

// 물론 differentAll 자리에 Math.min 함수를 바로 사용할 수도 있습니다.
// 그러나 이렇게 하면, 다른 함수들과 형식이 달라져서 diceGame 함수를 이해하는 것이 복잡해집니다.
// 사람의 두뇌는 차이점을 인지하는데 특화되어 있어서 그래요.
// 따라서 switch case의 경우 주변과 비슷하게 작성하는 것이 좋습니다.
// 누누히 강조하지만, 함수 호출 하나 더 하는 것은 속도에 아무 영향을 끼치지 않습니다.
// 그러나 사람이 코드를 읽기 힘들면 개발이 느려지도 관리가 어려워집니다.
function differentAll(arr) {
  return Math.min(...arr);
}
function ex38(my_string, index_list) {
  //1.
  var answer = "";
  for (const idx of index_list) {
    //for of 문으로 요소 가져오기
    answer += my_string[idx]; //my_string인덱스 자리에 idx값을 넣고 answer 에 더해준다
  }
  return answer;
  //2
  function extractCharacterByIndex(inputString, indices) {
    return indices.map((index) => inputString[index]).join("");
    /* 먼저 코드단위 분리
      map()으로 각 요소를 가져온뒤 inputString[index] 연산 후 결괏값을 리턴해 새로운 배열 생성후 
      join메서드로 차례대로 붙이고 문자열로 반환 */
  }

  return extractCharacterByIndex(my_string, index_list);
}

function ex39(number) {
  const numArr = [...number].map(Number); //string number 를 베열로 만들고 map 을이용하여 숫자로 변환
  const sum = numArr.reduce((a, b) => a + b, 0); //reduce 메서드를 이용하여 배열에 있는 모든 요소 합계를 구한다.

  return sum % 9; // sum 을 9로 나눴을때 나머지값 리턴
}

function ex40(my_string, queries) {
  //1.
  let strArr = my_string.split(""); // 문자열을 배열로 변환
  //2.
  let strArr = [...my_string]; // 문자열을 배열로 변환
  // 전개연산자 사용으로 간단하게 문자열을 배열화..만약 [...'abc'] -> ['a','b','c']

  for (const query of queries) {
    // for of 문 사용해서 queries의 요소 하나씩 가져오기
    const [s, e] = query; // query 구조분해 할당
    var reverseStr = strArr.slice(s, e + 1).reverse();
    //slice 로strArr[s]부터 strArr[e]까지 가져와서 reverse() 메서드로 뒤집어주고 reverseStr 값 넣어죽;
    strArr.splice(s, e - s + 1, ...reverseStr);
    // splice 메서드로 strArr 배열의 s 인덱스 부터 e-s+1(갯수) 만큼 자르고 그 인덱스 자리에 reverseStr 값 넣어죽;
  }

  return strArr.join(""); // strArr.join()메서드로 배열을 string 뱐환 후 리턴
}

function ex41(intStrs, k, s, l) {
  var answer = [];
  for (const intStr of intStrs) {
    //for of 문으로 요소 하나씩 가져오기
    Number(intStr.substr(s, l)) > k && answer.push(Number(intStr.substr(s, l)));
    // substr 메서드로 s번 인덱스부터 길이 l 까지자르고 숫자로 변환
    // Number(intStr.substr(s, l)) 값이 k 보다 크다면
    // push()로 answer배열 맨끝에 넣고 아니라면 아무것도 하지 않는다
  }
  return answer;
}

function ex42(my_strings, parts) {
  var answer = "";
  parts.forEach((part, idx) => {
    // forEach 문으로 parts길이만큼 반복
    const [s, e] = part; // parts 요소를 전개연산자로 s,e 할당
    answer += my_strings[idx].substr(s, e - s + 1);
    // my_strings 요소를 인덱스 번호 s 번부터 e-s+1 길이 만큼 자르고 answer에 붙인다
  });

  return answer;
}

function ex43(my_string, n) {
  var answer = my_string.slice(-n);
  // slice 메서드로 뒤에서부터 n 만큼 자르고 answer 에 할당
  // ex 'apple'.slice(-3) -> 'ple'

  return answer;
}

function ex44(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
    // for 문으로 my_string 길이만큼 반복
    // my_string를 slice 메서드를 이용해서 인덱스 번호 I부터 마지막 인덱스 자른 후 answer 배열 맨 뒤에 넣어준다 push
  }
  return answer.sort(); // sort() 메서드를 이용하여 사전순으로 정렬 후 리턴
}

function ex45(my_string, is_suffix) {
  for (let i = 0; i < my_string.length; i++) {
    //my_string 길이만큼 반복
    if (my_string.slice(i) === is_suffix) {
      //접미사가('baa' 라면 접미사 'b', 'ba' ,'baa...') is_suffix와 같다면 1리턴
      // slice 메서드를 이용해서 인덱스 번호 i부터 마지막 인덱스 자른 후까지의 string 반환
      // my_string.slice(i)가  is_suffix와 같다면 1리턴
      return 1;
    }
  }
  return 0; // 위 조건을 만족하지 않는다면 0 리렅
}

function ex46(my_string, n) {
  return my_string.substr(0, n); //substr 메서드를 사용하여 문자열 앞에서부터 n길이 만큼 자르고 반환
}
function ex47(my_string, is_prefix) {
  let sum = "";
  let stringArr = [];
  //1.
  let answer;
  for (let i = 0; i < my_string.length; i++) {
    //for문을 사용해서 my_string.length 만큼 반복
    sum += my_string[i]; //문자열 인덱스값을 sum에 더해준다.
    stringArr.push(sum); //sum값을 stringArr에 넣어줘서 접두사 배열 만들기
  }
  answer = stringArr.some((string) => string === is_prefix);
  // some 메소드를 이용하여 stringArr 요소중 is_prefix값이 하나라도 있으면 true 반환 하나라도 없으면 false
  return answer ? 1 : 0; // answer값이 true면 1 false 0 값을 반환

  //2.
  function isPrefixPresent(stringArr, prefix) {
    return stringArr.some((string) => string === prefix);
  } // 코드가 의미를 가진다면 함수화
  function ex47(inputString, prefix) {
    for (let i = 0; i < inputString.length; i++) {
      sum += inputString[i];
      stringArr.push(sum);
    }
    return isPrefixPresent(stringArr, prefix) ? 1 : 0;
  }
}

function ex48(my_string, s, e) {
  //1.
  let string_Arr = [...my_string]; //스프레드 문법으로 string ->array 변환
  // 예) '12345' string_Arr = ['1','2','3','4','5']
  const reverse = [...my_string.substr(s, e - s + 1)].reverse();
  //문자열 substr()메서드를 사용하여 s 인덱스부터, e-s +1 개수 만큼 자르고  반환 ,배열로 만든 후 reverse()메소드를 사용하여 뒤집는다.
  string_Arr.splice(s, e - s + 1, ...reverse);
  // splice() 메서드 사용하여 s인덱스부터  e-s +1 개수 만큼자르고 그 s인덱스 자리에 reverse 를 추가한다

  return string_Arr.join(""); //배열인 string_Arr를 join('')으로 문자열로 반환 후 리턴한다
  //2.
  let stringArr = [...my_string];
  /*변수명을 정할때 js 규칙맞추기 camelCase 
    또 의미있는 변수명 정하기 ..*/
  const addArr = [...my_string.substr(s, e - s + 1)].reverse();
  stringArr.splice(s, e - s + 1, ...addArr);

  return string_Arr.join("");
}

function ex49(my_string, m, c) {
  var answer = "";

  for (let i = c - 1; i < my_string.length; i += m) {
    //초기값 i을 c-1 로 설정후 i < my_string.length -1 만큼 반복한다. 한 루프가 끝나고 i값에 m 를 더한다
    answer += my_string[i];
  }

  return answer;
}

function ex50(q, r, code) {
  var answer = "";

  for (let i = 0; i < code.length; i++) {
    // code.length 만큼 반복
    if (i % q === r) {
      //i를  q 로 나누었을때 나머지가 r 이라면
      answer += code[i]; // 해당 조건을 통과한 글자열을 answer에 추가
    }
  }
  return answer;
}

function ex51(my_string) {
  //1.
  let upperList = [];
  let lowList = [];

  for (let i = 65; i <= 90; i++) {
    //65번부터 90인 이유는 A-Z 까지 아스키코드이기 떄문이다.
    const upperChar = String.fromCharCode(i); //A-Z
    const lowChar = String.fromCharCode(i + 32); //a-z

    const upperCount = (my_string.match(new RegExp(upperChar, "g")) || [])
      .length;
    // match 메소드로 my_string로부터 A-Z 검색하여 배열로 반환한다.그 배열의 length값을 구하면 특정문자의 개수를
    //구할 수 있다
    upperList.push(upperCount);

    const lowCount = (my_string.match(new RegExp(lowChar, "g")) || []).length;
    // match 메소드로 my_string로부터 a-z 검색하여 배열로 반환한다. 그 배열의 length값을 구하면 특정문자의 개수를
    //구할 수 있다
    lowList.push(lowCount);
  }

  return [...upperList, ...lowList];
  //2.

  function countOccurrences(str, ch) {
    const count = (str.match(new RegExp(ch, "g")) || []).length;
    return count;
  }
  /*  의미있는 변수는 함수로 뺴기 */

  function ex51(myString) {
    const char_A = 65;
    const char_Z = 90;
    const char_a = 97;
    const char_z = 122;
    /*  
    각 알파벳의 아스키코드
     */
    const _atoz_ = 26;
    const gap_aA = char_a - char_A;
    // A 와 a의 아스키코드 차이
    let upperList = [];
    let lowerList = [];

    for (let i = char_A; i <= char_Z; i++) {
      const upperChar = String.fromCharCode(i);
      const lowerChar = String.fromCharCode(i + gap_aA);

      const upperCount = countOccurrences(myString, upperChar);
      upperList.push(upperCount);

      const lowerCount = countOccurrences(myString, lowerChar);
      lowerList.push(lowerCount);
    }

    return [...upperList, ...lowerList];
  }
}

function ex52(n, k) {
  const nArr = Array.from({ length: n }, (v, i) => i + 1);
  //n까지 길이에 숫자 배열 만들기
  var answer = nArr.filter((num) => num % k === 0);
  //nArr의 요소가 k의 배수인것만 배열에 담아서 answer 넣기
  //filter() 는 참인것만 리턴해 새로운 배열 생성
  return answer;
}
function ex53(my_string, indices) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      //indices 배열안에 i가 없다면
      answer += my_string[i];
      //my_string[i] 를answer에 붙이기
    }
  }
  return answer;
}

function ex54(start, end) {
  const nArr = Array.from({ length: start - end + 1 }, (v, i) => start - i);

  return nArr;
}

function ex55(arr, idx) {
  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }

  return -1;
}

function ex56(n, slicer, num_list) {
  const [a, b, c] = slicer; //구조분해 할당으로 a b c 값 가져오기
  const utils = num_list.slice(a, b + 1);
  // slice 메서드로 a부터 b인덱스 만큼의 배열 리턴
  const operation = {
    1: num_list.slice(0, b + 1), //slice 메서드로 0부터 b인덱스 만큼의 배열 리턴
    2: num_list.slice(a), //slice 메서드로 a부터 num_list-1인덱스 만큼의 배열 리턴
    3: utils,
    4: utils.filter((num, idx) => idx % c === 0),
    // slice 메서드로 a부터 b인덱스 만큼의 배열 리턴 후 index 값을 c로 나누었을때 0인것만 리턴
  };

  return operation[n];
}

function ex57(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i; //num_list 요소가 음수면 인덱스값리턴
    }
  }
  return -1; // 위조건에 해당되지 않는다면 -1 리턴
}

function ex58(arr, intervals) {
  const [[a1, b1], [a2, b2]] = intervals; //구조분해 할당으로 a1,b1,a2,b2 가져오기
  return [...arr.slice(a1, b1 + 1), ...arr.slice(a2, b2 + 1)];
  // slice 메서드로 a1 인덱스 부터 b1인덱스 까지
  // slice 메서드로 a2 인덱스 부터 b2인덱스 까지 가져온 후 배열 합치고 리턴ㅁ
}

function ex59(arr) {
  let toIndex = arr.indexOf(2);
  let fromIndex = arr.lastIndexOf(2);
  if (toIndex === -1) return [-1];

  return arr.slice(toIndex, fromIndex + 1);
}
function ex60(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      arr.splice(query[i] + 1);
    } else {
      arr.splice(0, query[i]);
    }
  }
  return arr;
}

function ex61(num_list, n) {
  return num_list.slice(n - 1);
}

function ex62(num_list, n) {
  const after = num_list.slice(0, n);
  num_list.splice(0, n);
  return [...num_list, ...after];
}

function ex63(str_list) {
  const lIndex = str_list.indexOf("l");
  const rIndex = str_list.indexOf("r");

  if (lIndex !== -1 && rIndex !== -1) {
    return lIndex < rIndex
      ? str_list.slice(0, lIndex)
      : str_list.slice(rIndex + 1);
  }

  if (lIndex !== -1 || rIndex !== -1) {
    return lIndex < 0 ? str_list.slice(rIndex + 1) : str_list.slice(0, lIndex);
  }

  return [];
}

function ex64(num_list, n) {
  return num_list.splice(0, n);
}

function ex65(num_list, n) {
  return num_list.filter((num, idx) => idx % n == 0);
}

function ex66(num_list) {
  const odd = num_list.filter((num, idx) => (idx + 1) % 2 !== 0);
  const even = num_list.filter((num, idx) => (idx + 1) % 2 === 0);

  const oddSum = odd.reduce(function add(sum, currValue, idx) {
    return sum + currValue;
  }, 0);

  const evenSum = even.reduce(function add(sum, currValue, idx) {
    return sum + currValue;
  }, 0);

  return oddSum > evenSum ? oddSum : evenSum;
}

function ex67(names) {
  const list = names.filter((name, idx) => idx % 5 === 0);
  return list;
}

function ex68(todo_list, finished) {
  var answer = todo_list.filter((list, idx) => !finished[idx]);
  return answer;
}

function ex69(numbers, n) {
  const answer = numbers.reduce(function add(sum, currValue) {
    if (sum <= n) {
      return sum + currValue;
    }
    return sum;
  }, 0);

  return answer;
}

function ex70(arr, queries) {
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
  }
  return arr;
}

function ex71(arr) {
  const answer = arr.map((num) => {
    if (num >= 50 && num % 2 === 0) {
      return num / 2;
    }

    if (num < 50 && num % 2 !== 0) {
      return num * 2;
    }
    return num;
  });
  return answer;
}

function ex72(arr) {
  //1.
  function createArr() {
    arr = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      }

      if (num < 50 && num % 2 !== 0) {
        return num * 2 + 1;
      }
      return num;
    });

    return arr;
  }

  let count = 0;
  let condition = true;
  while (condition) {
    const prev = JSON.stringify(arr);
    createArr();
    const next = JSON.stringify(arr);
    prev !== next ? count++ : (condition = false);
  }

  return count;
  //2.
  function transformArray() {
    arr = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) {
        return num / 2;
      }

      if (num < 50 && num % 2 !== 0) {
        return num * 2 + 1;
      }
      return num;
    });

    return arr;
  }
  /*조금더 적절한 네이밍 고민하기 */
}

function ex73(num_list) {
  let count = 0;
  for (const num of num_list) {
    var number = num;
    while (number !== 1) {
      number = number % 2 == 0 ? number / 2 : (number - 1) / 2;
      count++;
    }
  }

  return count;
}

function ex74(num_list) {
  //1.
  const sum = num_list.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  const multiply = num_list.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1,
  );

  return num_list.length >= 11 ? sum : multiply;
  //2.
  const lengthThreshold = 11;
  return num_list.length >= lengthThreshold ? sum : multiply;
  /* 다른사람이 코드를 봐도 의미를 알수있게 넘버에도 의미있는 변수명 지어주기.. */
}

function ex75(myString, pat) {
  myString = myString.toLowerCase();
  pat = pat.toLowerCase();

  return myString.includes(pat) ? 1 : 0;
}
function ex76(myString) {
  return myString.toUpperCase();
}

function ex77(myString) {
  return myString.toLowerCase();
}

function ex78(strArr) {
  var answer = strArr.map((str, idx) =>
    idx % 2 === 0 ? str.toLowerCase() : str.toUpperCase(),
  );
  return answer;
}

function ex79(myString) {
  //1.
  let answer = [...myString.toLowerCase()]
    .map((str) => (str === "a" ? str.toUpperCase() : str))
    .join("");

  //2.
  let answer = [...myString.toLowerCase()]
    .map((ch) => (ch === "a" ? ch.toUpperCase() : ch))
    .join("");
  /* str는 문자열을 의미. 해석하면 문자열이 "a"라면 문자열(모두를) 대문자로 바꾼다. 라고 해석.
    근데 str 보다 ch 로 바꾸면 문자가 "a" 라면 해당 문자를 대문자로 바꾼다.로 해석 가능하다.
  */
  return answer;
}

function ex80(my_string, alp) {
  //1.
  let answer = [...my_string]
    .map((str) => (str === alp ? str.toUpperCase() : str))
    .join("");

  return answer;
}
//2.
function ex80Edit(string, alp) {
  //프로그래머스에서 문제를 가져올떄 ES6문법에 맞춰서 가져오기

  let answer = [...string]
    .map((ch) => (ch === alp ? ch.toUpperCase() : ch))
    .join("");
  /* str는 문자열을 의미. 해석하면 문자열이 "a"라면 문자열(모두를) 대문자로 바꾼다. 라고 해석.
    근데 str 보다 ch 로 바꾸면 문자가 "a" 라면 해당 문자를 대문자로 바꾼다.로 해석 가능하다.

    map으로 변환하는 대상의 이름을 정확하게 지어주기 !!
  */
  return answer;
}
//1.
function ex81(myString, pat) {
  const lastIndex = myString.lastIndexOf(pat);
  const strArr = [...myString];
  strArr.splice(lastIndex, myString.length - lastIndex + 1, pat);

  return strArr.join("");
}
//2
function ex81Edit(myString, pat) {
  const lastIndex = myString.lastIndexOf(pat);
  return myString.slice(0, lastIndex + pat.length);
  /*string 인경우 slice쓰는게 더편하다 ..굳이 splice쓰려고 배열로 바꾸고 다시 string으로 바꿀 필요 X */
}

function ex82(myString, pat) {
  let count = 0;
  const strLength = myString.length - pat.length;

  for (let i = 0; i <= strLength; i++) {
    if (myString.slice(i, pat.length + i) === pat) {
      count++;
    }
  }

  return count;
}

function ex83(strArr) {
  var answer = strArr.filter((str) => str.indexOf("ad") === -1);
  return answer;
}

function ex84(my_string) {
  return my_string.split(" ");
}

function ex85(my_string) {
  const stringArr = my_string.split(" ");

  return stringArr.filter(Boolean);
}

function ex86(myString) {
  const arr = myString.split("x");

  var answer = arr.map((str, idx) => str.length);
  return answer;
}

function ex87(myString) {
  return myString.split("x").sort().filter(Boolean);
}

function ex88(binomial) {
  function calculate(a, b, op) {
    const operators = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
    };
    return operators[op];
  }

  const [a, op, b] = binomial.split(" ");
  const answer = calculate(Number(a), Number(b), op);
  return answer;
}

function ex89(myString, pat) {
  //1.
  const change = [...myString].map((str) => (str === "A" ? "B" : "A")).join("");
  var answer = change.indexOf(pat);
  return answer !== -1 ? 1 : 0;

  //2.
  const change = [...myString].map((ch) => (ch === "A" ? "B" : "A")).join("");
  var answer = change.indexOf(pat);
  return answer !== -1 ? 1 : 0;
  /* str는 문자열을 의미. 해석하면 문자열이 "a"라면 문자열(모두를) 대문자로 바꾼다. 라고 해석.
    근데 str 보다 ch 로 바꾸면 문자가 "a" 라면 해당 문자를 대문자로 바꾼다.로 해석 가능하다.

    map으로 변환하는 대상의 이름을 정확하게 지어주기 !!
    습관성 str 고치기
  */
}

function ex90(rny_string) {
  var answer = rny_string.replaceAll("m", "rn");
  return answer;
}

//.1
function ex91(myStr) {
  var removeCondition = myStr.split(/[a-c]/);
  //a,b,c 알파벳기준으로 문자열 자르고 배열로 리턴

  const removeEmpty =
    removeCondition.filter(Boolean).length === 0
      ? ["EMPTY"]
      : removeCondition.filter(Boolean);
  return removeEmpty;

  /*removeCondition 배열의 길이가 0 이라면  ["EMPTY"] 할당 아니라면 빈값을 제외한 배열 할당*/
}
//2.
function ex91Edit(str) {
  const result = str.split(/[a-c]/).filter(Boolean);
  return result.length === 0 ? ["EMPTY"] : result;
  /* a,b,c 알파벳기준으로 문자열 자른 배열생성 후 빈값  제외한 배열 재리턴
    result의 길이가 0 이라면  ["EMPTY"] 리턴 아니면 result 값리턴
    //1. 과 같이 removeCondition.filter 를 두번 쓴다면 한번에 적용하는 방향으로 코드 짜기.
  */
}
//1.

function ex92(arr) {
  var answer = [];
  for (const num of arr) {
    for (let i = 0; i < num; i++) {
      answer.push(num);
    }
  }

  /* for of 문 사용해서 arr 각 요소가져오기
    요소 num 만큼 반복하고 asnwer 배열에 추가하고 값 리턴
  */
  return answer;
}
//2.
function ex92Edit(inputArray) {
  const answer = inputArray.flatMap((num) =>
    Array.from({ length: num }, () => num),
  );
  return answer;
  /* flatMap은 map과 동일하지만  둘을 하나의 메소드로 병합가능
    flatMap 으로 각 요소가져와서 길이가 각 요소만큼인 Array 생성 후 
    병합함 
    예를들어 inputArray 가 [3,5] 이라면 Array.from({ length: num }, () => num) 
    [3,3,3] , [5,5,5,5,5] 인 배열이 만들어지고 병합되어 [3,3,3,5,5,5,5,5] 인배열 생성
   */
}

function ex93(arr, flag) {
  var answer = [];

  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      answer.push(...String(arr[i]).repeat(arr[i] * 2));
    } else {
      answer.splice(-arr[i]);
    }
  }

  return answer.map(Number);
}

//1.

function ex94(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.at(-1) === arr[i]) {
      stk.pop();
      continue;
    }

    stk.push(arr[i]);
  }
  const isEmpty = stk.length === 0 ? [-1] : stk;
  return isEmpty;

  /* arr길이만큼 반복하고, stk 배열의 마지막 요소가 arr[i]와 같다면 stk.pop()으로 마지막
    요소룰 제거하고 그 다음 로직을 건너뛴다.  stk 배열의 마지막 요소가 arr[i]와 같지 않다면 
    stk 배열뒤에 arr[i]를 추가한다.
    stk 길이가 0이라면 [-1]을 리턴하고 아니라면 stk을 리턴한다 */
}
//2.
function ex94Edit(arr) {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (stack.at(-1) === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.length === 0 ? [-1] : stack;
  /* arr길이만큼 반복하고, stack 배열의 마지막 요소가 arr[i]와 같다면 stack.pop()으로 마지막
    요소룰 제거하고 아니라면  stack 배열뒤에 arr[i]를 추가한다.
    앞 //1. 에서는 continue를 썼지만 여기서는 else문을 쓰는게 맞다 . 너무 if else 을 안쓰려고 하는게 아닌
    적절하게 if else 문을 쓰는게 중요하다.  
    stack 길이가 0이라면 [-1]을 리턴하고 아니라면 stack 리턴한다 
    변수명이 어떤것을 명확하게 의미하지 못한다면 차라리 풀네임으로 쓰는게 낫다 .*/
}
//.1

function ex95(arr, k) {
  let removeDup = [...new Set(arr)];
  removeDup.splice(k);

  let newArray = removeDup.concat(new Array(k - removeDup.length).fill(-1));

  let answer = removeDup.length < k ? newArray : removeDup;

  return answer;

  /* arr안 중복값을 제거하고 배열로 만든후 removeDup할당
    splice로 인덱스 0 번부터 k -1 인덱스까지 자르고 removeDup 리턴한다 (원본 배열을 바꿈)
    new Array(k - removeDup.length).fill(-1) 길이가 k-removeDup.length 인 배열을 만들고 -1로 채운다.
   그 후 removeDup 배열과 -1로 채워진 배열을 합치고  newArray에 할당한다 
   removeDup 배열의 길이가 k 보다 작다면 newArray 크거나 같다면 removeDup 을 리턴한다.

  */
}
//2
function ex95Edit(arr, k) {
  const uniqueArray = [...new Set(arr)];
  const selectedArray = uniqueArray.slice(0, k);
  const newArray = selectedArray.concat(
    new Array(k - selectedArray.length).fill(-1),
  );

  return newArray;
  /* arr안 중복값을 제거하고 배열로 만든후 uniqueArray 할당
    slice 인덱스 0 번부터 k -1 인덱스까지 자르고 selectedArray 할당 (원본 배열을 바꾸지 않아서 다른 변수에할당필수)
    selectedArray와 길이가 k-selectedArray.length이고 -1 채워진 배열을 합친 후 newArray 할당 후 리턴
   
    //1.과 다르게 splice보다 slice 썼다 splice를 꼭 써야하는 이유가 없다면 slice쓰는게 더 직관적이다,
    또 어차피 removeDup.length < k ? newArray : removeDup; 쓸 이유가 없다 만약에 k길이가 더 컷다면 이미
    newArray는 -1 들어가 배열이 반환되고 k 길이가 selectedArray의 길이와같거나  작았다면  new Array길이가 0 이거나 
    없기 떄문이다.

  */
}
//.1

function ex96(arr) {
  let exponent = 0;
  let squareNum = 1;
  while (exponent !== -1) {
    if (arr.length > 2 ** exponent) {
      exponent++;
      continue;
    }
    squareNum = 2 ** exponent;

    exponent = -1;
  }

  let newArray = arr.concat(new Array(squareNum - arr.length).fill(0));
  return newArray;

  /*exponent이 -1 이 아닐떄 계속 무한 반복한다 . 
    arr 길이가 2의 exponent 제곱보다 크다면 exponent에 1 을더해주고 다음 로직은 continue 건너뛴다.
     arr 길이가 2의 exponent 제곱보다 작거나 같다면 squareNum 에 2 의  exponent제곱을 할당하고 exponent에 -1을
     할당해 반복문을 멈춘다.  arr와 길이가 squareNum - arr.length고 0으로 채워진 배열을 합치고 리턴한다.
  */
}
//.2
function ex96Edit(arr) {
  let exponent = 0;
  let targetLength = 1;

  while (exponent >= 0) {
    if (arr.length <= targetLength) {
      break;
    }
    targetLength = 2 ** exponent;
    exponent++;
  }

  const newArray = arr.concat(new Array(targetLength - arr.length).fill(0));
  return newArray;
  /* exponent가 0보다 같거나 크다면 무한 반복한다. 
    arr 길이가 targetLength보다 같거나 작다면 while문을 종료하고, 아니라면targetLength = 2 ** exponent을 할당후
    exponent + 1을 해준다.

    //1.과 다르게 while문을 쓸떄 break문을 썼는데 while문을 쓸떄는 꼭 break 필수..다..

  */
}

function ex97(arr1, arr2) {
  //1.

  function Sum(arr) {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  }

  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  }

  if (Sum(arr1) === Sum(arr2)) {
    return 0;
  }

  return Sum(arr1) > Sum(arr2) ? 1 : -1;

  /* reduce를 사용해서 배열의 총 합을 구하는 sum 함수를 만들고 
    arr1길이와 arr2 길이가 다를떄 arr1길이가 arr2 길이보다 크다면 1리턴 아니라면 -1 리턴한다.
    만약 두개의 배열의 길이가 같다면 Sum()함수로 각 총합을 구한뒤 같다면 0 리턴 arr1 총합이 크다면 1 리턴 아니라면 -1 리턴한다
  */
  //2.
  const sum1 = sum(arr1);
  const sum2 = sum(arr2);
  // 1. 과 다르게 같은 값을 쓴다면 함수 호출후 할당하는게 낫다 값이 계속 같은 함수를 계속 호출하는건 좋지않음 .
  // 또 함수 처음 시작할떄는 대문자가 아니라 소문자로 시작해야함
}

function ex98(strArr) {
  //1.
  let lengthDuplicates = {};
  //2.
  let lengthFrequency = {};
  // 적절한 변수명 쓰기..

  for (const str of strArr) {
    if (lengthDuplicates[str.length] === undefined)
      lengthDuplicates[str.length] = 0;

    lengthDuplicates[str.length] += 1;
  }
  const propertyValues = Object.values(lengthDuplicates);
  return Math.max(...propertyValues);

  /* for of 문으로 strArr의 각 요소를 가져와 lengthDuplicates[str.length] 가 undefined라면
     lengthDuplicates[str.length] = 0으로 설정후 +1 해주기 만약에 lengthDuplicates[str.length]값이 존재한다면
     그냥 +1 해주기 
     Object.values()로 lengthDuplicates의 속성의 값들로 이루어진 배열을 만들고 전개연산자로 각 요소를 나열하고,
     Math.max 로 최댓값을 구한뒤 리턴한다.
     
     */
}

function ex99(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((num, idx) => (idx % 2 !== 0 ? num + n : num));
  }

  return arr.map((num, idx) => (idx % 2 === 0 ? num + n : num));
}

function ex100(num_list) {
  const sortList = num_list.sort((a, b) => a - b);

  return sortList.slice(0, 5);
}

function ex101(num_list) {
  const sortList = num_list.sort((a, b) => a - b);

  return sortList.slice(5);
}

//.1
function ex102(rank, attendance) {
  let participant = rank.filter((num, idx) => attendance[idx]);
  const [first, second, third] = participant.sort((a, b) => a - b);
  let topRanking = [first, second, third];
  let answer = [];
  topRanking.forEach((ranking) => answer.push(rank.indexOf(ranking)));
  const [a, b, c] = answer;
  return 10000 * a + 100 * b + c;

  /* rank배열에 filter 를 사용하여  attendance[idx]값이 true 일떄 num값 리턴 후 participant만들기
    participant 을 오름차순으로 sorting 하고 index 0 , 1, 2 번의 요소가져오기 각 [first, second, third]
    first, second, third을 배열 topRanking 에 만들고 forEach문으로 배열의 길이만큼 반복한다
    길이만큼 반복하면서 요소를 가져온뒤 기존에 있던 rank배열에 indexOf 로 가져온 요소의 인덱스를 구해 answer배열에 추가한다
    추가한 인덱스 a,b,c 로 가져와   return 10000 * a + 100 * b + c 연산 후 리턴.
  */
}
//2.
function ex102Edit(rank, attendance) {
  const participant = rank.filter((num, idx) => attendance[idx]);
  const [first, second, third] = participant.sort((a, b) => a - b);
  const topRanking = [first, second, third];
  const answer = [];
  topRanking.forEach((ranking) => answer.push(rank.indexOf(ranking)));
  const [a, b, c] = answer;
  //1.과 설명이 같음
  const FIRST = 10000;
  const SECOND = 100;
  return FIRST * a + SECOND * b + c;
  // 1.과 다른 부분은 각 넘버가 무엇을 의미하는지 변수로 지정 (최대한 어떤걸 의미하는지 알수있게 변수명을 지정해 할당하는게 좋음)
  // 의미전달이 안된다면 주석을 다는것도 방법
  // 참여자는 100명 미만이고, 1,2,3등을 순서대로 뽑기 위해 아래의 규칙을 정의함
  // procotol : 1등: 만번대, 2등: 백번대, 3: 그대로
}

function ex103(flo) {
  return Math.floor(flo);
}

function ex104(num_str) {
  const numList = [...num_str].map(Number);
  const sum = numList.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  return sum;
}

function ex105(n_str) {
  return Number(n_str);
}

//1.
function ex106(n_str) {
  let nStrToArr = [...n_str];
  //파라미터 n_str 을 전개연산자를 사용하여 array로 만들기
  let index = 0;
  while (index !== -1) {
    //index가 -1 이 아닐때 무한반복
    if (nStrToArr[0] === "0") {
      //배열 nStrToArr 첫번째 요소가 '0' 이라면
      nStrToArr.splice(0, 1);
      // 배열 nStrToArr 의 0 번째 인덱스에서 1개 만큼 자르고 원본 배열에 적용한다
      continue;
      // 다음 로직은 건너뛴다.
    }
    index = -1;
  }

  return nStrToArr.join("");
  //join('')으로 배열을 string 만든다 예 ['1','2'].join('') = '12'
}
//2.
function ex106Edit(n_str) {
  const arr = [...n_str];
  //파라미터 n_str 을 전개연산자를 사용하여 array로 만들기
  //arr은 arr이지 strToArr 이라고 이름 지을 이유가 없음. 내가 다루려는 정보가 어디 출신인지 기억할 필요가 없기떄문에 현재 type 으로 변수정하기.
  while (arr[0] === "0") {
    // arr.[0] 가 0 일때만 로직을 수행하기 때문에 조건 arr[0] === "0"만 반복한다로 설정
    arr.splice(0, 1);
    // 배열 arr 의 0 번째 인덱스에서 1개 만큼 자르고 원본 배열에 적용한다
  }

  return arr.join("");
  //join('')으로 배열을 string 만든다 예 ['1','2'].join('') = '12'
}
//1.
function ex107(a, b) {
  const aBigint = BigInt(a); //문자열 a 를 BigInt로 만들기
  const bBigint = BigInt(b); //문자열 b 를 BigInt로 만들기

  const numerSum = aBigint + bBigint;
  // 빅인트 a 와 빅인트 b 값을 더한후 numerSum 넣기
  return String(numerSum);
  // numerSum -> string 타입으로 변견 후 리턴
}
//2.
function ex107Edit(strA, strB) {
  // 매개변수 a,b를 어던 type인지 바로 알수있게 명확한 명으로 매개변수 지정
  const a = BigInt(strA);
  const b = BigInt(strB);
  const sum = a + b;
  return String(sum);
}

function ex108(n) {
  return String(n);
}
//.1
function ex109(arr, delete_list) {
  const duplicationRemove = arr.filter((num) => !delete_list.includes(num));
  //arr 각 요소를 반복하면서 각 요소를 나타내는 numdl delete_list안에 있지 않다면 num 값을 반환한다. 즉, arr 각 요소값이 delete_list에 없는 것들만 반환한다
  return duplicationRemove;
}
//2.
function ex109Edit(arr, delete_list) {
  const deleteList = new Set(delete_list);
  //has() 사용하기 위해서 Set 생성하기.
  //1.과 달리 includes 쓰지않고 has 쓴이유는 has가 더 빠르기 떄문이다.
  const others = arr.filter((num) => !deleteList.has(num));
  // arr각 요소들은 반복하면서 set.has()를 사용하여 deleteList안에 num값이 있는지 확인한다 있다면 true 없다면 false를 반환하고
  //앞에 ! 부정이 붙어있기떄문에 false 일때(deleteList 안에 num 값이 없을때) 리턴하여 새로운 배열을 만든다 .
  return others;
}

function isInclude(list, n) {
  return list.includes(n) ? 1 : 0;
  //파라미터 list안에 파라미터 n 값이 있다면 1 리턴 없다면 0 리턴
}

function ex110(myString, target) {
  //1.
  return myString.includes(target) ? 1 : 0;
  //includes를 사용하여 my_string 안에 target 값이 있는지 확인하고 있다면 1 리턴 없다면 0리턴

  //2.
  isInclude(myString, target);
  //isInclude 함수에 myString, target 를 아규먼트로 넘겨주기
}

function ex111(str1, str2) {
  //.1
  return str2.includes(str1) ? 1 : 0;
  //includes를 사용하여 str2 안에 str1 값이 있는지 확인하고 있다면 1 리턴 없다면 0리턴
  //2.
  isInclude(str2, str1);
  //isInclude 함수에 str2, str1 를 아규먼트로 넘겨주기
}

function ex112(str_list, ex) {
  const removeTailStr = str_list.filter((str) => !str.includes(ex));
  return removeTailStr.join("");
}

function ex113(num_list, n) {
  return num_list.indexOf(n) !== -1 ? 1 : 0;
  //indexOf 사용하여 num_list 안에 n 값이 있는지 확인하고 있다면 1 리턴 없다면 0리턴
  //2.
  isInclude(num_list, n);
  //isInclude 함수에 num_list, n 를 아규먼트로 넘겨주기
}

function ex114(a, b) {
  if (a % 2 === 1 && b % 2 === 1) {
    return a ** 2 + b ** 2;
  }

  if (a % 2 === 0 && b % 2 === 0) {
    return Math.abs(a - b);
  }
  return 2 * (a + b);
}

function ex115(date1, date2) {
  const date1Sum = Number(date1.map(String).join(""));
  const date2Sum = Number(date2.map(String).join(""));
  return date1Sum < date2Sum ? 1 : 0;
}

function ex116(order) {
  let sum = 0;
  order.forEach((coffee) => {
    //order의 각 요소를 반복하며
    if (coffee.includes("cafelatte")) {
      //각 요소 coffee가 'cafelatte' 이 포함되어 있다면
      return (sum += 5000); // sum에 5000 더해주기
    }
    return (sum += 4500); // 포함되어있지 않다면 sum에 4500 더해주기
  });
  return sum;

  //2.
  const cafelattePrice = 5000;
  const americanoPrice = 4500;
  // 매직넘버에 이름지어주기..
  let sum = 0;
  order.forEach((coffee) => {
    //order의 각 요소를 반복하며
    if (coffee.includes("cafelatte")) {
      //각 요소 coffee가 'cafelatte' 이 포함되어 있다면
      return (sum += cafelattePrice); // sum에 cafelattePrice 더해주기
    }
    return (sum += americanoPrice); // 포함되어있지 않다면 sum에 americanoPrice 더해주기
  });
  return sum;
}
//1.
function ex117(picture, k) {
  let RepeatArr = [];
  for (const string of picture) {
    //picture의 각 요소 string 가져오기
    const repeat = [...string].map((str) => str.repeat(k));
    //전개연산자로 string을 배열로 만들고 map 을 이용하여 배열 string의 각 요소 str을 repeat로 k번 반복한뒤 repeat에 반환한다
    for (let i = 1; i <= k; i++) {
      //repeat를 join 하여 하나의 문자열로 만든뒤 k 번 반복해서 RepeatArr에 넣어준다.
      RepeatArr.push(repeat.join(""));
    }
  }

  return RepeatArr;
}
//2
function ex117Edit(picture, k) {
  const arrays = picture.map((string) => {
    //picture 배열을 map을 이용하여 각 요소를 반복하고, 새로운 배열을 만든다.
    // picture 배열의 각 요소 string 을 배열로 만들고, map 사용하여 각 요소를 반복한다.
    // 각 요소 ch를 repeat를 사용하여 k 번 반복하고 repeatedString에 반환한다음 join('')으로 문자열로 만든다.
    // 길이가 k 이인 array 를 생성한 뒤 fill로 repeatedString로 길이만큼 채운다.
    //결국 arrays는 예를 들어 [['3333','2222']] 와 같은 이차원배열이 되고,
    const repeatedString = [...string].map((ch) => ch.repeat(k)).join("");
    return Array(k).fill(repeatedString);
  });

  return arrays.flat();
  // 2차원배열을 .flat() 메서드로 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성한다.
  //예를 들어 arrays [1,2,[4,5,[3]]].flat() 이라면 default 값이 1 이기때문에 [1,2,4,5,[3]] 이렇게 생성되고
  // arrays [1,2,[4,5,[3]]].flat(2) 이라면 [1,2,4,5,3] 이렇게 생성된다.

  /* flat()라면   const arrays = picture.flatMap()  을 사용해도 된다*/
}
//1.
function ex118(arr, k) {
  const evenCondition = arr.map((num) => num + k);
  // map 메서드롤 사용하여 arr의 각 요소 num 을 가져오고 num에 k를 더한다음 배열에 담아 evenCondition할당한다
  const oddCondition = arr.map((num) => num * k);
  // map 메서드롤 사용하여 arr의 각 요소 num 을 가져오고 num에 k를 곱한다음 배열에 담아 oddCondition

  return k % 2 === 0 ? evenCondition : oddCondition;
  //k를 2로 나누었을때 나머지가 0이라면 (짝수) evenCondition을 아니라면 oddCondition값을 리턴한다
}
//2.
function ex118Edit(arr, k) {
  function transform(num, k) {
    return k % 2 === 0 ? num + k : num * k;
  }
  //차이점을 함수로 만들기 더 간단하진다.
  // 파라미터로 num k를 받고, k를 2로 나누었을때 나머지가 0이라면 (짝수) num + k 를 반환 아니라면 num * k;반환
  const transformedArray = arr.map((num) => transform(num, k));
  // map 메서드롤 사용하여 arr의 각 요소 num 을 가져오고 transform 함수에  num,k를 아규먼트로 넘겨준다. 그 후 리턴된 값을 계산 후 배열에 담은 후 transformedArray 할당한다
  return transformedArray;
}
//3. 주의해야 할점
function ex118Caution(arr, k) {
  const transformedArray = arr.map((num) => {
    return k % 2 === 0 ? num + k : num * k;
  });
  //맵 안에서 연산을 하는 버릇은 좋지 않음 로직이 바뀌게 되면 수정하기 어렵기 떄문이다.
  return transformedArray;
}

function ex119(myString) {
  const charL = "l".charCodeAt();
  let changeAsc = [];

  for (const string of myString) {
    const asciiCode = string.charCodeAt();
    changeAsc.push(asciiCode);
  }
  const changeL = changeAsc.map((asc) => (asc < charL ? charL : asc));
  const ascToString = changeL.map((asc) => String.fromCharCode(asc));

  return ascToString.join("");
}

function ex120(n) {
  var answer = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    answer.push(arr);
  }
  return answer;
}

function ex121(n) {
  const arr = new Array(n).fill(null).map(() => new Array(n).fill(0));
  let num = 1;
  let row = 0;
  let col = 0;
  let direction = "right";

  while (num <= n * n) {
    arr[row][col] = num;
    num++;

    if (direction === "right") {
      if (col + 1 < n && arr[row][col + 1] === 0) {
        col++;
      } else {
        direction = "down";
        row++;
      }
    } else if (direction === "down") {
      if (row + 1 < n && arr[row + 1][col] === 0) {
        row++;
      } else {
        direction = "left";
        col--;
      }
    } else if (direction === "left") {
      if (col - 1 >= 0 && arr[row][col - 1] === 0) {
        col--;
      } else {
        direction = "up";
        row--;
      }
    } else if (direction === "up") {
      if (row - 1 >= 0 && arr[row - 1][col] === 0) {
        row--;
      } else {
        direction = "right";
        col++;
      }
    }
  }

  return arr;
  /* 양심삼 이 문제는 아무리 고민해도 어떻게 풀어야할지 모르겠어서 gpt에게 도움을 받았습니다.. */
}

function ex122(arr) {
  const n = Math.sqrt(arr.length);
  let row = 0;
  let col = 0;
  for (let i = 0; i < n; i++) {
    row = i;
    for (let j = i + 1; j < n; j++) {
      col = j;
      if (arr[row][col] !== arr[col][row]) return 0;
    }
  }
  return 1;
}

function ex123(arr) {
  const row = arr.length;
  const col = arr[0].length;

  function addRow(row, col) {
    for (let i = 0; i < row; i++) {
      for (let j = col; j < row; j++) {
        arr[i][j] = 0;
      }
    }
  }

  function addCol(row, col) {
    const limit = col - row;
    const addArr = new Array(col).fill(0);
    for (let i = 1; i <= limit; i++) {
      arr.push(addArr);
    }
  }
  row > col ? addRow(row, col) : addCol(row, col);

  return arr;
}

function ex124(board, k) {
  let indexCondition = board.map((row, rowIdx) =>
    row.filter((val, colIdx) => rowIdx + colIdx <= k),
  );
  let sum = 0;
  for (const row of indexCondition) {
    for (const num of row) {
      sum += num;
    }
  }

  return sum;
}

function ex125(babbling) {
  var answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach((word) => {
    if (regex.test(word)) answer++;
  });

  return answer;
}

function ex126(common) {
  const arrLastIdx = common.length - 1;
  const isArithmeticSequence = common[2] - common[1] === common[1] - common[0];
  const commonDifference = isArithmeticSequence
    ? common[2] - common[1]
    : common[2] / common[1];
  return isArithmeticSequence
    ? common[arrLastIdx] + commonDifference
    : common[arrLastIdx] * commonDifference;
}

function ex127(num, total) {
  let sum = 0;
  let n = 0;
  for (let i = 1; i < num; i++) {
    sum += i;
  }
  n = (total - sum) / num;
  return Array.from({ length: num }, (_, i) => n + i);
}

function ex128(M, N) {
  return M * N - 1;
}

function ex129(A, B) {
  let arrA = [...A];

  if (A === B) {
    return 0;
  }

  for (let i = 1; i < A.length; i++) {
    arrA.splice(0, 0, arrA[arrA.length - 1]);
    arrA.pop();

    if (arrA.join("") === B) {
      return i;
    }
  }

  return -1;
}

function ex130(my_str, n) {
  let strToArr = [...my_str];
  var answer = [];
  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(strToArr.splice(0, n).join(""));
  }

  return answer;
}

function ex131(array) {
  const result = array.join("").match(/7/g);

  return result ? result.length : 0;
}

function ex132(my_string) {
  let changeLower = [...my_string.toLowerCase()].sort();
  return changeLower.join("");
}

function ex133(n, t) {
  return n * 2 ** t;
}

function ex134(n) {
  const squareRoot = Math.sqrt(n);
  return squareRoot === Math.floor(squareRoot) ? 1 : 2;
}

function ex135(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

function ex136(quiz) {
  let answer = [];
  let cal;

  const operator = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  for (const num of quiz) {
    let x = Number(num.split(" ")[0]);
    let y = Number(num.split(" ")[2]);
    let z = Number(num.split(" ")[4]);
    cal = operator[num.split(" ")[1]](x, y);
    answer.push(cal === z ? "O" : "X");
  }

  return answer;
}

function ex137(n) {
  let arrayN = [...String(n)];
  let sum = arrayN.reduce((acc, value) => acc + Number(value), 0);

  return sum;
}

function ex138(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

function ex139(num, k) {
  const isIndex = String(num).indexOf(k);
  return isIndex > -1 ? isIndex + 1 : isIndex;
}

function ex140(s1, s2) {
  const duplicateValue = s1.filter((it) => s2.includes(it));
  return duplicateValue.length;
}

function ex141(my_string) {
  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  const emptyRemove = my_string.split(" ");
  let x = Number(emptyRemove[0]);

  for (let i = 1; i < emptyRemove.length; i += 2) {
    const operator = emptyRemove[i];
    const y = Number(emptyRemove[i + 1]);
    x = calculator[operator](x, y);
  }

  return x;
}

function ex142(array) {
  const maxNum = Math.max(...array);
  return [maxNum, array.indexOf(maxNum)];
}

function ex143(message) {
  return 2 * message.length;
}

function ex144(n) {
  var answer = [];

  for (let i = 1; i <= n; i++) {
    n % i === 0 && answer.push(i);
  }
  return answer;
}

function ex145(s) {
  let answer = [];
  let alphabetCount = {};
  let stringToArr = [...s];
  for (const str of stringToArr) {
    if (alphabetCount[str] === undefined) {
      alphabetCount[str] = 0;
    }
    alphabetCount[str]++;
  }

  for (const alp in alphabetCount) {
    alphabetCount[alp] === 1 && answer.push(alp);
  }

  return answer.sort().join("");
}

function ex146(my_string, num1, num2) {
  const stringToArr = [...my_string];
  [stringToArr[num1], stringToArr[num2]] = [
    stringToArr[num2],
    stringToArr[num1],
  ];
  return stringToArr.join("");
}

function ex147(numbers) {
  let alpArray = [...numbers];
  let word = "";
  let answer = "";
  const wordToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  alpArray.forEach((alp) => {
    word += alp;
    if (wordToNumber[word]) {
      answer += wordToNumber[word];
      word = "";
    }
  });
  return Number(answer);
}

function ex148(my_string) {
  let stringToArray = [...my_string];
  const changeChar = stringToArray.map((str) =>
    str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase(),
  );

  return changeChar.join("");
}

function ex149(cipher, code) {
  let stringToArr = [...cipher];
  const password = stringToArr.filter((str, idx) => {
    if ((idx + 1) % code === 0) return str;
  });

  return password.join("");
}

function ex150(order) {
  let count = 0;
  for (const num of String(order)) {
    /3|6|9/g.test(num) && count++;
  }
  return count;
}

function ex151(array, n) {
  array.push(n);
  array.sort((a, b) => a - b);
  let nIndex = array.indexOf(n);
  let nNextValue = array[nIndex + 1];
  let nPrevValue = array[nIndex - 1];

  if (nNextValue === undefined) return nPrevValue;

  if (nPrevValue === undefined) return nNextValue;

  return n - nPrevValue > nNextValue - n ? nNextValue : nPrevValue;
}

function ex152(sides) {
  sides.sort((a, b) => a - b);
  const [a, b, c] = sides;
  return a + b > c ? 1 : 2;
}

function ex153(my_string) {
  let removeDuplication = new Set([...my_string]);
  return [...removeDuplication].join("");
}

function ex154(i, j, k) {
  let count = 0;

  for (let startNum = i; startNum <= j; startNum++) {
    for (const str of String(startNum)) {
      if (Number(str) === k) {
        count++;
      }
    }
  }
  return count;
}

function ex155(before, after) {
  let beforeToArray = [...before].sort((a, b) => a.localeCompare(b));
  let afterToArray = [...after].sort((a, b) => a.localeCompare(b));
  if (beforeToArray.join("") === afterToArray.join("")) return 1;

  return 0;
}

function ex156(bin1, bin2) {
  const int1 = parseInt(bin1, 2);
  const int2 = parseInt(bin2, 2);

  const sum = int1 + int2;

  const sumInBinary = sum.toString(2); // 10진수 합을 다시 이진수 문자열로 변환

  return sumInBinary;
}

function ex157(chicken) {
  let serviceChicken = 0;
  for (let coupon = 1; coupon <= chicken; coupon++) {
    if (coupon % 10 === 0) {
      chicken++;
      serviceChicken++;
    }
  }

  return serviceChicken;
}

function ex158(userInfo, db) {
  var idPasswordInfo = {};
  const [userId, userPassword] = userInfo;

  for (const data of db) {
    const [dataId, dataPassword] = data;
    idPasswordInfo[dataId] = dataPassword;
  }

  if (idPasswordInfo[userId] === undefined) {
    return "fail";
  }

  if (idPasswordInfo[userId] !== userPassword) {
    return "wrong pw";
  }

  return "login";
}

function ex159(score) {
  const averages = score.map(
    ([mathScore, enScore]) => (mathScore + enScore) / 2,
  );
  const comparisonScore = [...averages];

  const ranking = averages.map((value) => {
    let rank = 1;

    for (const comparisonVal of comparisonScore) {
      if (value < comparisonVal) {
        rank++;
      }
    }
    return rank;
  });

  return ranking;
}

function ex160(numlist, n) {
  numlist.sort((a, b) => {
    const distanceA = Math.abs(a - n);
    const distanceB = Math.abs(b - n);
    if (distanceA === distanceB) {
      return b - a;
    }

    return distanceA - distanceB;
  });

  return numlist;
}

function ex161(numerator, denominator) {
  function greatestCommonDivisor(num, divisible) {
    if (divisible === 0) {
      return num;
    }
    return greatestCommonDivisor(divisible, num % divisible);
    //기약분수를 구하기 위해 최대공약수를 구해야한다
    //최대 공약수는 a를 b로 계속 나누었을때 나누어 떨어진 수가 0 이면 최대공약수를 구할 수 있다(유클리드 호제법 참고)
  }
  const commonFactor = greatestCommonDivisor(numerator, denominator);
  let simplifiedDenominator = denominator / commonFactor;
  //분모와 분자를 그들의 최대공약수로 나누면 기약분수를 구할 수 있음.분모를 최대공약수로 나누면 기약분수를 구할 수 있다.

  //기약분수로 나타냈을때, 분모의 소인수가 2와 5만 존재한다면 유한소수이다

  while (simplifiedDenominator % 2 === 0) {
    simplifiedDenominator /= 2;
  }
  while (simplifiedDenominator % 5 === 0) {
    simplifiedDenominator /= 5;
  }

  return simplifiedDenominator === 1 ? 1 : 2;
}

function ex162(lines) {
  /*정말정말..아무리 고민해도 모르겠어서 다른사람의 풀이를 참고하였습니다ㅜㅜㅜ */
  let min = Math.min(...lines.flat());
  //2차원 배열을 flat()으로 1차원 배열로 만들고  전개연산자로 나열한다음 Math.min 으로 최소값을 구함
  let max = Math.max(...lines.flat());
  //2차원 배열을 flat()으로 1차원 배열로 만들고  전개연산자로 나열한다음 Math.max 으로 최소값을 구함
  let arr = Array(max - min + 1).fill(0);
  //Array 생성자로 길이가 max-min+1 인 array를 생성하고 fill()로 0 값으로 길이만큼 채운다.

  for (let [start, end] of lines) {
    //lines 각 요소를 구조분해 할당으로 각 start, end값으로 가져오고
    if (min < 0) {
      //min값이 음수라면
      start += Math.abs(min);
      //Math.abs으로 절대값을 구한다음 start 와 end 부분에 더해준다.
      end += Math.abs(min);
      //절대값으로 더해주는 이유는 만약 min값이 -1 이리면 뒤에 반복문을 쓸떄 arr[i]의 i 가 음수가 되기때문임
    }
    for (let i = start; i < end; i++) {
      arr[i]++;
      //i 에 start를 할당하고 end -1 까지 반복하면서 arr[i] ++ 해준다
    }
  }

  return arr.filter((v) => v > 1).length;
  //만약 겹치는 부분은 1보다 크기 떄문에 1이상의 값을 리턴한 후 length값을 구하고 리턴한다
}

function ex163(dots) {
  function inclinationCalculator(point1, point2) {
    const [x1, y1] = point1;
    const [x2, y2] = point2;

    return (y2 - y1) / (x2 - x1);
  }
  // 두직선이 평행하려면 기울기가 같아야 한다 기울기 구하는 함수.
  const [dot1, dot2, dot3, dot4] = dots;

  var inclination1 = inclinationCalculator(dot1, dot2);
  var inclination2 = inclinationCalculator(dot3, dot4);
  var inclination3 = inclinationCalculator(dot1, dot3);
  var inclination4 = inclinationCalculator(dot2, dot4);
  var inclination5 = inclinationCalculator(dot1, dot4);
  var inclination6 = inclinationCalculator(dot2, dot3);

  if (
    inclination1 === inclination2 ||
    inclination3 === inclination4 ||
    inclination5 === inclination6
  ) {
    return 1;
  }

  return 0;
}

function ex164(n) {
  var count = 0;
  for (let i = 1; i <= n; i++) {
    while ((i + count) % 3 === 0 || String(i + count).indexOf("3") > -1) {
      count++;
    }
    var total = i + count;
  }
  return total;
}

function ex165(spell, dic) {
  const sortedChars = spell.sort().join("");
  function sortedDictionaryWords(word) {
    return [...word].sort().join("");
  }

  for (const word of dic) {
    if (sortedDictionaryWords(word) === sortedChars) {
      return 1;
    }
  }
  return 2;
}

function ex166(sides) {
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  let count = 0;

  for (let i = max - min + 1; i <= max; i++) {
    count++;
  }

  for (let i = max + 1; i < max + min; i++) {
    count++;
  }
  return count;
}

function ex167(board) {
  /*안전지대 문제인데 .. 도저히 모르겠어서 pass 합니다 ㅠㅜ
  풀다가 포기.. */

  let rowCount = board.length;
  let colCount = board[0].length;
  let landMine;
  let hasRowLandMine;
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(1)) {
      landMine = board[i].indexOf(1);
      hasRowLandMine = i;
    }
  }

  for (
    let row = Math.max(0, hasRowLandMine - 1);
    row <= Math.min(hasRowLandMine + 1, rowCount - 1);
    row++
  ) {
    for (
      let col = Math.max(0, landMine - 1);
      col <= Math.min(landMine + 1, colCount - 1);
      col++
    ) {
      board[row][col] = 1;
    }
  }

  return board.flatMap((bd) => bd.filter((num) => num === 0)).length;
}

function ex168(string) {
  var arr = string.split(/[a-z]/gi).filter(Boolean);
  return arr.reduce((acc, value) => acc + Number(value), 0);
}

function ex169(polynomial) {
  let variableTerm = 0;
  let constantTerm = 0;

  const removeOperator = polynomial.split(" + ");

  for (let i = 0; i < removeOperator.length; i++) {
    if (removeOperator[i].includes("x")) {
      let removeX = removeOperator[i].replace(/x/g, "");
      variableTerm += removeX === "" ? 1 : Number(removeX);
    } else {
      constantTerm += Number(removeOperator[i]);
    }
  }

  if (variableTerm === 1) {
    variableTerm = "";
  }

  if (variableTerm === 0) {
    return `${constantTerm}`;
  }

  if (constantTerm === 0) {
    return `${variableTerm}x`;
  }

  return `${variableTerm}x + ${constantTerm}`;
}

function ex170(numbers) {
  numbers.sort((a, b) => a - b);
  const num1 = numbers.at(-1) * numbers.at(-2);
  const num2 = numbers[0] * numbers[1];

  return num1 > num2 ? num1 : num2;
}

function ex171(keyinput, board) {
  let x = 0;
  let y = 0;

  function move(direction) {
    switch (direction) {
      case "up":
        if (y == Math.floor(board[1] / 2)) {
          break;
        }
        y++;
        break;
      case "down":
        if (y == -Math.floor(board[1] / 2)) {
          break;
        }
        y--;
        break;
      case "left":
        if (x == -Math.floor(board[0] / 2)) {
          break;
        }
        x--;
        break;
      case "right":
        if (x == Math.floor(board[0] / 2)) {
          break;
        }
        x++;
        break;
    }
  }

  for (const key of keyinput) {
    move(key);
  }

  return [x, y];
}

function ex172(dots) {
  const [dot1] = dots;
  const [x1, y1] = dot1;
  let height;
  let width;

  for (const dot of dots) {
    const [x, y] = dot;

    if (x == x1) {
      height = Math.abs(y - y1);
    }

    if (y === y1) {
      width = Math.abs(x - x1);
    }
  }
  return height * width;
}

function ex173(strlist) {
  var answer = strlist.map((word) => word.length);
  return answer;
}

function ex174(s) {
  let result = 0;
  const array = s.split(" ");
  array.forEach((cha, i) => {
    if (cha === "Z") {
      return (result -= Number(array[i - 1]));
    }

    return (result += Number(cha));
  });
  return result;
}
