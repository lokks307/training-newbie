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

function ex29(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    let fb = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = fb;
  }
  return arr;
}

function ex30(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let newArr = [];
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2]) newArr.push(arr[j]);
    }
    answer.push(Math.min(...newArr));
    if (Math.min(...newArr) === Infinity) {
      answer.push(-1);
    }
  }
  answer = answer.filter((el) => el !== Infinity);
  return answer;
}

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
