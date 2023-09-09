/*
  The source code has been reviewed at
    https://github.com/lokks307/training-newbie/pull/3
    https://github.com/lokks307/training-newbie/pull/4
*/
let input;

solveThis(ex1);

function ex1() {
  console.log(input);
}

function ex2() {
  ex2Output(input.split(" "));
}

function ex2Output([a, b]) {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}

function ex3() {
  ex3Output(input.split(" "));
}

function ex3Output([str, n]) {
  console.log(str.repeat(n));
}

function ex4() {
  ex4Output(input.split(" "));
}

function ex4Output() {
  let arr = input.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  console.log(arr.join(""));
}

function ex5() {
  console.log(`!@#$%^&*(\\'"<>?:;`);
}

function ex6() {
  ex6Output(input.split(" "));
}

function ex6Output([a, b]) {
  console.log(`${a} + ${b} = ${Number(a) + Number(b)}`);
}

function ex7() {
  ex7Output(input.split(" "));
}

function ex7Output([str1, str2]) {
  console.log(`${str1}${str2}`);
}

function ex8() {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}

function ex9() {
  ex9Output(input.split(" "));
}

function ex9Output(n) {
  let isEven = `${n} is even`;
  let isOdd = `${n} is odd`;
  if (n % 2 === 0) {
    console.log(isEven);
  } else console.log(isOdd);
}

function solveThis(solveFunction) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input = [line][0];
  }).on("close", solveFunction);

  return rl;
}

////////////////////////////////////////////////////

function ex10(my_string, overwrite_string, s) {
  let arr = my_string.split("");
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

function ex11(str1, str2) {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    arr.push(str1[i] + str2[i]);
  }
  return arr.join("");
}

function ex12(arr) {
  return arr.join("");
}

function ex13(my_string, k) {
  return my_string.repeat(k);
}

function ex14(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = Number(String(b) + String(a));

  if (fnum >= snum) {
    return fnum;
  }
  return snum;
}

function ex15(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = 2 * a * b;

  let op = fnum >= snum ? fnum : snum;
  return op;
}

function ex16(num, n) {
  return num % n === 0 ? 1 : 0;
}

function ex17(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

function ex18(n) {
  let arr = []; // 빈 배열을 arr로 선언
  for (let i = 1; i < 101; i++) {
    // 1~100을 arr에 담는다. (i < n 하면 되는데 왜 이렇게 썼을까..)
    arr.push(i);
  }
  if (n % 2 === 1) {
    // n이 짝수인 경우
    arr = arr.filter((el) => el <= n && el % 2 === 1); // arr의 요소 중 el <= n && el % 2 === 1 의 조건에 맞는 요소만 담아 재할당
    const result = arr.reduce(function add(sum, currValue) {
      // 새로 담은 arr 배열의 합을 result에 담는다.
      return sum + currValue;
    }, 0);
    return result;
  } else {
    // n이 홀수인 경우
    arr = arr.filter((el) => el <= n && el % 2 === 0); // arr의 요소 중 el <= n && el % 2 === 0 의 조건에 맞는 요소만 담아 재할당
    const result = arr.reduce(function add(sum, currValue) {
      // arr 배열 요소들의 제곱의 합을 result로 선언
      return sum + currValue ** 2;
    }, 0);
    return result;
  }
}

function ex18Solution(n) {
  let arr = []; // 빈 배열을 arr로 선언
  for (let i = 1; i <= n; i++) {
    // 1~n을 arr에 담는다.
    arr.push(i);
  }

  if (n % 2 === 1) {
    // n이 짝수인 경우
    arr = arr.filter((el) => el % 2 === 1); // arr의 요소 중 el % 2 === 1 의 조건에 맞는 요소만 담아 재할당
  } else {
    // n이 홀수인 경우
    arr = arr.filter((el) => el % 2 === 0); // arr의 요소 중 el % 2 === 0 의 조건에 맞는 요소만 담아 재할당
    arr = arr.map((n) => n ** 2); // arr의 각 요소의 제곱을 담아 재할당한다.
  }

  const result = arr.reduce(function add(sum, currValue) {
    // arr 배열 요소들의 합을 result로 선언
    return sum + currValue;
  }, 0);

  return result;
}

function ex19(ineq, eq, n, m) {
  const op = ineq + eq;

  let result;

  switch (op) {
    case ">=":
      result = n >= m;
      break;
    case "<=":
      result = n <= m;
      break;
    case ">!":
      result = n > m;
      break;
    case "<!":
      result = n < m;
      break;
  }

  if (result) {
    return 1;
  }
  return 0;
}

function ex20(a, b, flag) {
  // if (flag) {
  //   return a + b;
  // } else return a - b;

  // 공통된 부분과 조건문으로 변경되는 부분을 나눠서 생각하면 코드를 이해하는데 더 도움이 된다!
  // 공통되는 부분 => return a
  // 변경되는 부분 => b 또는 -b
  let c = -b;
  if (flag) {
    c = b;
  }
  return a + c;
}

function ex21(code) {
  let mode = 0;
  let ret = "";

  for (let idx = 0; idx < code.length; idx++) {
    if (code[idx] === "1") {
      // code[idx] === "1" 일 때 mode 바꿔주기
      mode = 1 - mode;
      continue; // code[idx]가 1일 때는 아래 코드 실행 X
    }
    if ((mode === 0 && idx % 2 === 0) || (mode === 1 && idx % 2 === 1)) {
      ret += code[idx];
    }
  }

  if (isEmpty(ret)) return "EMPTY";
  return ret;
}

function isEmpty(s) {
  if (s === "") return true;
  return false;
}

function ex22(a, d, included) {
  let arr = [a];
  let idxArr = [];
  let count = 0;

  for (let i = 0; i < included.length - 1; i++) {
    arr.push((a += d));
  }
  included.map((item, idx) => {
    if (item) {
      idxArr.push(idx);
    }
  });

  for (let i = 0; i < idxArr.length; i++) {
    count += arr[idxArr[i]];
  }

  return count;
}

function ex23(a, b, c) {
  const apow = Math.pow(a, 3); // a의 세제곱
  const bpow = Math.pow(b, 3); // b의 세제곱
  const cpow = Math.pow(c, 3); // c의 세제곱

  if (a === b && b === c) {
    // a, b, c가 모두 같을 때
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (apow + bpow + cpow); // (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (apow + bpow + cpow)값을 리턴
  } else if (a === b || a === c || b === c) {
    // a, b, c 중 두 수가 같을 때
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2); // (a + b + c) * (a ** 2 + b ** 2 + c ** 2) 값을 리턴
  } else {
    // a, b, c가 모두 다를 때
    return a + b + c; // a + b + c를 리턴
  }
}

function ex23Solution(a, b, c) {
  const apow = Math.pow(a, 3); // a의 세제곱
  const bpow = Math.pow(b, 3); // b의 세제곱
  const cpow = Math.pow(c, 3); // c의 세제곱

  const sum = a + b + c; // a + b + c를 sum로 선언
  const sumOfSquares = a ** 2 + b ** 2 + c ** 2; // a, b, c 각각의 제곱의 합을 sumOfSquares로 선언
  const sumOfCubics = apow + bpow + cpow; //a, b, c 각각의 세제곱의 합을 sumOfCubics로 선언

  if (areAllEqual(a, b, c)) {
    // a, b, c가 같을 때
    return sum * sumOfSquares * sumOfCubics; // sum * sumOfSquares * sumOfCubics 리턴
  }
  if (areAnyEqual(a, b, c)) {
    // a, b, c 중 두 수가 같을 때
    return sum * sumOfSquares; // sum * sumOfSquares 리턴
  }

  return sum; // a, b, c 모두 다를 때는 sum 리턴
}

function areAllEqual(...values) {
  return values.every((v) => v === values[0]); // values의 요소가 v=== values[0]를 충족하는지
}

function areAnyEqual(...v) {
  return v[0] === v[1] || v[0] === v[2] || v[1] === v[2]; // v의 요소가 v[0] === v[1] || v[0] === v[2] || v[1] === v[2]를 충족하는지
}

function ex24(num_list) {
  let mpCount = 1;
  let plCount = 0;

  for (num of num_list) {
    mpCount *= num;
    plCount += num;
  }

  if (mpCount < plCount ** 2) {
    return 1;
  }
  return 0;
}

function ex25(num_list) {
  let oddNum = Number(num_list.filter((el) => el % 2 === 1).join(""));
  console.log(oddNum);
  let evenNum = Number(num_list.filter((el) => el % 2 === 0).join(""));

  let answer = oddNum + evenNum;
  return answer;
}

function ex26(num_list) {
  const lastNum = num_list[num_list.length - 1];
  const prevNum = num_list[num_list.length - 2];
  if (lastNum > prevNum) {
    num_list.push(lastNum - prevNum);
    return num_list;
  }
  num_list.push(lastNum * 2);
  return num_list;
}

// 수 조작하기

// function ex27(n, control) {
//   for (let i = 0; i < control.length; i++) {
//     switch (control[i]) {
//       case "w":
//         n += 1;
//         break;
//       case "s":
//         n -= 1;
//         break;
//       case "d":
//         n += 10;
//         break;
//       case "a":
//         n -= 10;
//         break;
//       case "n":
//         n += 100;
//         break;
//     }
//   }
//   return n;
// }

function solution(n, control) {
  return ex27MovePosition(n, control);
}

function ex27MovePosition(position, controls) {
  const controlMap = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
    f: 100,
  };

  for (const control of controls) {
    if (controlMap.hasOwnProperty(control)) {
      position += controlMap[control];
    }
  }

  return position;
}

//

// 수 조작하기 2

function ex28(numLog) {
  let arr = [];
  for (let i = 1; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i - 1]) {
      case 1:
        arr.push("w");
        break;
      case -1:
        arr.push("s");
        break;
      case 10:
        arr.push("d");
        break;
      case -10:
        arr.push("a");
        break;
    }
  }
  let answer = arr.join("");
  return answer;
}

// 28번 hasOwnProperty 사용

function ex28ManipNum(numLog) {
  let answer = "";
  const numMap = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  for (let i = 0; i < numLog.length; i++) {
    if (numMap.hasOwnProperty(numLog[i] - numLog[i - 1])) {
      answer += numMap[numLog[i] - numLog[i - 1]];
    }
  }
  return answer;
}

//

// 수열과 구간 쿼리 3

// function ex29(arr, queries) {
//   for (let i = 0; i < queries.length; i++) {
//     let fb = arr[queries[i][0]];
//     arr[queries[i][0]] = arr[queries[i][1]];
//     arr[queries[i][1]] = fb;
//   }
//   return arr;
// }

function ex29SwapElement(arr, queries) {
  for (item of queries) {
    const [x, y] = item;
    [arr[x], arr[y]] = [arr[y], arr[x]];
  }
  return arr;
}
//

// 수열과 구간 쿼리 2

function ex30(arr, queries) {
  let answer = []; // 빈 배열 answer로 선언
  for (let i = 0; i < queries.length; i++) {
    // queries 배열 반복
    let newArr = []; // 빈 배열 newArr로 선언
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      // queries[i][1] - queries[i][0]+1번 반복
      if (arr[j] > queries[i][2]) newArr.push(arr[j]); // arr[j] > queries[i][2]면 newArr에 arr[j] push
    }
    answer.push(Math.min(...newArr)); // answer 배열에 newArr에서 가장 작은 수를 push
    if (Math.min(...newArr) === Infinity) {
      // 가장 작은 수가 Infinity라면
      answer.push(-1); // answer에 -1 push
    }
  }
  answer = answer.filter((el) => el !== Infinity); // answer 배열에서 Inifinity가 아닌 원소만 담아 answer에 재할당
  return answer;
}

function ex30FindMinValues(arr, queries) {
  const answer = []; // 빈 배열 answer로 선언

  for (const [start, end, threshold] of queries) {
    // queries 배열 순회, 각 원소를 [start, end, threshold]로 선언
    const filteredArr = arr
      .slice(start, end + 1)
      .filter((value) => value > threshold); // arr의 start index 부터 end index까지 자르고 그 상태에서 threshold 보다 큰 원소만 담아 새로운 배열을 만듦

    if (filteredArr.length === 0) {
      // 만약 filteredArr.length가 0일 때
      answer.push(-1); // answer에 -1 push
    } else {
      // filteredArr.length가 0이 아닐 때
      answer.push(Math.min(...filteredArr)); // filteredArr에서 가장 작은 수를 answer에 push
    }
  }

  return answer;
}

// 각 코드의 차이점 : 첫번째 코드는 for문이 여러번 중첩되고 index를 사용해서 코드를 이해하기가 힘들다.
// 반면 피드백 코드는 slice와 filter를 사용해서 스텝별로 코드를 이해하기가 쉽다!
//

// 수열과 구간 쿼리 4

function ex31(arr, queries) {
  // for of로 풀기
  for ([s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  }
  return arr;

  // reduce로 풀기
  //    const result = queries.reduce((acc, cur) => {
  //       const copyArr = [...acc]
  //        const [s, e, k] = cur
  //        return copyArr.map((el, idx) => {
  //            if (idx >= s && idx <= e) {
  //                if(idx % k === 0)
  //                    return el+1
  //            } return el

  //        })
  //    }, arr)
  //    return result;
}

//

// 배열 만들기 2

function ex32MakeArray(l, r) {
  const answer = [];

  for (let i = l; i <= r; i++) {
    const item = String(i);
    if ([...item].every((el) => el === "5" || el === "0"))
      answer.push(Number(item));
  }
  console.log(answer);
  if (answer.length === 0) {
    return [-1];
  }
  return answer;
}

//

// 카운트 업

function ex33CountUp(start, end) {
  const answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;
}

//

// 콜라츠 수열 만들기

function ex34MakeCollatzSeq(n) {
  const answer = [n];
  while (n > 1) {
    if (n % 2 === 0) n /= 2;
    else n = 3 * n + 1;

    answer.push(n);
  }
  return answer;
}

//

// 배열 만들기 4

// function ex35MakeArray(arr) {
//   let stk = [];
//   let i = 0;

//   while (i < arr.length) {
//     if (stk.length === 0) {
//       stk.push(arr[i]);
//       i++;
//     } else if (stk.length !== 0) {
//       if (stk[stk.length - 1] < arr[i]) {
//         stk.push(arr[i]);
//         i++;
//       } else {
//         stk.pop();
//       }
//     }
//   }

//   return stk;
// }

function ex35BuildArray4(arr) {
  const stack = [];
  for (const num of arr) {
    while (stack.length && stack[stack.length - 1] >= num) {
      stack.pop(); // stk의 마지막 원소 제거
    }
    stack.push(num); // stk에 num 추가
  }
  return stack; // 최종적으로 생성된 stk 반환
}

//

// 간단한 논리 연산

function ex36SimpleBoolean(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}

//

// 주사위 게임 3

// function ex37DiceGame(a, b, c, d) {
//   if (a === b && a === c && a === d) return 1111 * a;

//   if (a === b && a === c) return (10 * a + d) ** 2;
//   if (a === b && a === d) return (10 * a + c) ** 2;
//   if (a === c && a === d) return (10 * a + b) ** 2;
//   if (b === c && b === d) return (10 * b + a) ** 2;

//   if (a === b && c === d) return (a + c) * Math.abs(a - c); // 절댓값 구하기
//   if (a === c && b === d) return (a + b) * Math.abs(a - b);
//   if (a === d && b === c) return (a + b) * Math.abs(a - b);

//   if (a === b) return c * d;
//   if (a === c) return b * d;
//   if (a === d) return b * c;
//   if (b === c) return a * d;
//   if (b === d) return a * c;
//   if (c === d) return a * b;

//   return Math.min(a, b, c, d);
// }

function ex37diceGame(a, b, c, d) {
  const numbers = [a, b, c, d];
  numbers.sort((x, y) => x - y);

  const diceReport = countDuplicates(numbers);
  const keys = Object.keys(diceReport); // diceReport의 key를 배열로 받기

  switch (keys.length) {
    case 1:
      return sameAll(a);
    case 4:
      return differentAll(numbers);
    case 3:
      return same211(diceReport);
    case 2:
      if (diceReport[a] === 2) return same22(keys.map(Number));
      return same31(diceReport, keys.map(Number));
  }
}

function countDuplicates(arr) {
  // 주사위로 나온 숫자가 key, 숫자 갯수를 value로 하는 객체 만들기
  const countMap = {};

  for (const num of arr) {
    if (countMap[num] === undefined) countMap[num] = 0;

    countMap[num] += 1;
  }

  return countMap;
}

function sameAll(p) {
  // 주사위 모든 수가 다 같을 때
  return p * 1111;
}

function same31(report, [p, q]) {
  // 주사위 세 숫자만 같을 때
  if (report[p] === 1) [p, q] = [q, p]; // p가 1개인 경우, swap(p ,q). 그럼 p가 3개짜리 숫자가 됩니다.

  return Math.pow(10 * p + q, 2);
}

function same22([p, q]) {
  // 주사위가 두 개씩 같은 값일 때
  return (p + q) * Math.abs(p - q);
}

function same211(report) {
  // 주사위 두 숫자가 같고, 나머지는 서로 다를 때
  const [q, r] = Object.keys(report)
    .filter((key) => report[key] === 1)
    .map(Number);
  return q * r;
}

function differentAll(arr) {
  return Math.min(...arr);
}

//

// 글자 이어 붙여 문자열 만들기

function ex38MakeString(my_string, index_list) {
  return index_list.map((el) => my_string[el]).join("");
}

//

// 9로 나눈 나머지

// function ex39DivideByNine(number) {
//   let sum = 0;
//   let numArr = [...number];
//   for (num of numArr) {
//     sum += Number(num);
//   }
//   return sum % 9;
// }

// reduce 사용
function ex39DivideByNine(number) {
  let numArr = [...number];
  const sum = numArr.reduce((acc, cur) => {
    return (acc += Number(cur));
  }, 0);

  return sum % 9;
}

//

// 문자열 여러 번 뒤집기

function ex40ReverseString(my_string, queries) {
  let answer = "";
  queries.map((el) => {
    let arr = [...my_string];
    const target = arr.slice(el[0], el[1] + 1).reverse();
    my_string =
      my_string.slice(0, el[0]) + target.join("") + my_string.slice(el[1] + 1);
  });
  return my_string;
}

//

// 배열 만들기 5

// function ex41BuildArray(intStrs, k, s, l) {
//   let answer = [];
//   for (num of intStrs) {
//     const newNum = Number(num.slice(s, s + l));
//     if (newNum > k) answer.push(newNum);
//   }
//   return answer;
// }

function extractNumber(str, start, length) {
  // 문자열에서 숫자 추출하는 함수 분리
  return Number(str.slice(start, start + length));
}

function ex41BuildArray(stringNumbers, k, s, l) {
  return stringNumbers
    .map((num) => extractNumber(num, s, l))
    .filter((newNum) => newNum > k);
}

//

// 부분 문자열 이어 붙여 문자열 만들기

function ex42BuildString(my_strings, parts) {
  // let answer = '';
  // for(let i = 0; i < parts.length; i++){
  //     const target = my_strings[i].slice(parts[i][0], parts[i][1]+1)
  //     answer += target
  // }
  // return answer

  let answer = "";
  parts.map(([s, e], i) => {
    answer += my_strings[i].slice(s, e + 1);
  });
  return answer;
}

// Extract Method
function ex42BuildString(my_strings, parts) {
  let answer = "";

  const getSubstring = (str, start, end) => str.slice(start, end + 1);

  parts.forEach(([start, end], i) => {
    answer += getSubstring(my_strings[i], start, end);
  });

  return answer;
}

// Replace Loop with Pipeline
function ex42BuildString(my_strings, parts) {
  const getSubstring = (str, start, end) => str.slice(start, end + 1);

  return parts
    .map(([start, end], i) => getSubstring(my_strings[i], start, end))
    .join("");
}

//

// 문자열 뒤의 n글자

function ex43SliceString(my_string, n) {
  return my_string.slice(my_string.length - n);
}

//

// 접미사 배열

// function ex44SuffixArray(my_string) {
//   let answer = [];
//   for (let i = 0; i < my_string.length; i++) {
//     answer.push(my_string.substr(i, my_string.length));
//   }
//   return answer.sort();
// }

// Extract Method, Replace Loop with Map, Extract Variable 순서로 푼 방식
function ex44SuffixArray(my_string) {
  const generateSuffix = (str, start) => str.slice(start);

  const suffixes = [...my_string].map((_, i) => generateSuffix(my_string, i));
  const sortedSuffixes = suffixes.sort();

  return sortedSuffixes;
}

//

// 접미사인지 확인하기

// function ex45IsSuffix(my_string, is_suffix) {
//   let arr = [];
//   for (let i = 0; i < my_string.length; i++) {
//     arr.push(my_string.substr(i, my_string.length));
//   }
//   if (arr.includes(is_suffix)) return 1;
//   return 0;
// }

// generateSuffixes 함수 분리

function generateSuffix(str, start) {
  return str.slice(start);
}
function ex45IsSuffix(my_string, is_suffix) {
  const suffixes = [...my_string].map((_, i) => generateSuffix(my_string, i));
  console.log(suffixes);
  if (suffixes.includes(is_suffix)) return 1;
  return 0;
}

//
