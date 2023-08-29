// 1.문자열 출력하기
function ex1(input) {
  return console.log(input);
}

// 2.a와 b 출력하기
function ex2(input) {
  const beArray = input.split(" ");
  console.log(`a = ${beArray[0]}`);
  console.log(`b = ${beArray[1]}`);
}

// 3.문자열 돌리기
function ex3(input) {
  const beArray = input.split("");
  for (let one of beArray) {
    console.log(one);
  }
}

// 4.홀짝 구분하기
function ex4(input) {
  if (input % 2 === 0) return console.log(`${input} is even`);
  return console.log(`${input} is odd`);
}

// 5.문자열 겹쳐쓰기
function ex5(my_string, overwrite_string, s) {
  const original = my_string.split("");
  original.splice(s, overwrite_string.length, overwrite_string);
  const result = original.join("");
  return result;
}

// 6.문자열 곱하기
function ex6(my_string, k) {
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(my_string);
  }
  result = result.join("");
  return console.log(result);
}

// 7.더 크게 합치기
function ex7(a, b) {
  let answer;
  const option1 = String(a) + String(b);
  const option2 = String(b) + String(a);
  if (Number(option1) > Number(option2) || Number(option1) == Number(option2)) {
    answer = Number(option1);
  } else answer = Number(option2);
  return answer;
}

// 8.두 수의 연산값 비교하기
function ex8(a, b) {
  const compare1 = Number(String(a) + String(b));
  const compare2 = 2 * a * b;
  if (compare1 < compare2) return compare2;
  return compare1;
}

// 9.n의 배수
function ex9(num, n) {
  if (num % n === 0) return 1;
  return 0;
}

// 10.공배수
function ex10(number, n, m) {
  if (number % n === 0 && number % m === 0) return 1;
  return 0;
}

// 11.조건 문자열
function ex11(ineq, eq, n, m) {
  if (eq === "=" && n === m) return 1;
  if (ineq === "<" && n < m) return 1;
  if (ineq === ">" && n > m) return 1;
  return 0;
}

// 12.flag에 따라 다른 값 반환하기
function ex12(a, b, flag) {
  let answer;
  if (flag) return (answer = a + b);
  answer = a - b;
  return answer;
}

// 13.코드 처리하기 (리뷰 반영)
function ex13(code) {
  // let answer;
  // const charArr = [];
  // for (let i of code) charArr.push(i);
  // let mode = 0;

  // charArr.map((item, idx) => {
  //   if (mode == 0) {
  //     item == 1 ? (mode = 1) : idx % 2 == 0 ? answer.push(item) : "";
  //   } else {
  //     item == 1 ? (mode = 0) : idx % 2 !== 0 ? answer.push(item) : "";
  //   }
  // }
  let answer = [];
  const charArr = code.split("");
  let mode = 0;

  charArr.forEach((char, idx) => {
    if (char === "1") {
      mode = mode === 1 ? 0 : 1;
    } else if (idx % 2 === mode) {
      answer.push(char);
    }
  });

  return answer.length > 0 ? answer.join("") : "EMPTY";
}

// 14.등차수열의 특정한 항만 더하기
function ex14(a, d, included) {
  let answer;
  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) {
      answer += a + d * i;
    }
  }
  return answer;
}

// 15.주사위 게임 2 (리뷰 반영)
function ex15(a, b, c) {
  const allAdd = a + b + c;
  const double = a ** 2 + b ** 2 + c ** 2;
  const triple = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    return allAdd * double * triple;
  } else if (a !== b && b !== c && a !== c) {
    return a + b + c;
  } else {
    return allAdd * double;
  }
}
