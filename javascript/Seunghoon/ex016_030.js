//n의 배수
function ex16(num, n) {
  if (num % n === 0) {
    return 1;
  }
  return 0;
}

//공배수
function ex17(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  }
  return 0;
}

//홀짝에 따라 다른 값 반환하기
/**
function ex18(n) {
  let result = 0;

  //n이 홀수라면
  if (n % 2 !== 0) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        result += i;
      }
    }
    return result;
  }

  //n이 짝수라면
  for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
      result += i * i;
    }
  }
  return result;
}
 */
function ex18(n) {
  // let arr = new Array(n).fill().map((_, i) => i + 1);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  if (n % 2 === 1) {
    arr = arr.filter((el) => el % 2 === 1);
  } else {
    arr = arr.filter((el) => el % 2 === 0);
    arr = arr.map((el) => el ** 2);
  }
  const result = arr.reduce((prev, curr) => prev + curr);
  return result;
}

//조건 문자열
/** 
function ex19(ineq, eq, n, m) {
  if (ineq === ">" && eq === "=") {
    return n >= m ? 1 : 0;
  } else if (ineq === "<" && eq === "=") {
    return n <= m ? 1 : 0;
  } else if (ineq === ">" && eq === "!") {
    return n > m ? 1 : 0;
  } else if (ineq === "<" && eq === "!") {
    return n < m ? 1 : 0;
  }
}
*/
function ex19(ineq, eq, n, m) {
  const sign = ineq + eq;
  let result;
  switch (sign) {
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

//flag에 따라 다른 값 반환하기
function ex20(a, b, flag) {
  if (flag) {
    return a + b;
  }
  return a - b;
}

//코드 처리하기
function ex21(code) {
  let mode = false;
  let result = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
    } else if (mode === false && i % 2 === 0) {
      result += code[i];
    } else if (mode === true && i % 2 !== 0) {
      result += code[i];
    }
  }
  return result === "" ? "EMPTY" : result;
}

//등차수열의 특정한 항만 더하기
function ex22(a, d, included) {
  let arr = [];
  let result = 0;
  arr[0] = a;

  for (let i = 1; i < included.length; i++) {
    arr.push(arr[i - 1] + d);
  }

  included.forEach((el, idx) => {
    if (el) {
      result += arr[idx];
    }
  });

  return result;
}

//주사위 게임 2
function ex23(a, b, c) {
  const plus1 = a + b + c;
  const plus2 = a ** 2 + b ** 2 + c ** 2;
  const plus3 = a ** 3 + b ** 3 + c ** 3;

  if (a === b && b === c) {
    return plus1 * plus2 * plus3;
  }
  if (a === b || b === c || a === c) {
    return plus1 * plus2;
  }
  return plus1;
}

//원소들의 곱과 합
function ex24(num_list) {
  const multiplyList = num_list.reduce((prev, curr) => prev * curr);
  const squareSum = num_list.reduce((prev, curr) => prev + curr) ** 2;

  if (multiplyList < squareSum) {
    return 1;
  }
  return 0;
}

//이어 붙인 수
function ex25(num_list) {
  const odd = num_list.filter((number) => number % 2 !== 0).join("");
  const even = num_list.filter((number) => number % 2 === 0).join("");

  return Number(odd) + Number(even);
}

//마지막 두 원소
function ex26(num_list) {
  const result = [...num_list];
  const lastElement = result[result.length - 1];
  const beforeLastElement = result[result.length - 2];

  if (lastElement > beforeLastElement) {
    result.push(lastElement - beforeLastElement);
  } else result.push(lastElement * 2);

  return result;
}

//수 조작하기1
function ex27(n, control) {
  const controlKeys = [...control];

  for (const controlKey of controlKeys) {
    switch (controlKey) {
      case "w":
        n += 1;
        break;
      case "s":
        n -= 1;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  }
  return n;
}

//수 조작하기 2
function ex28(numLog) {
  let result = "";
  for (let i = 1; i < numLog.length; i++) {
    let difference = numLog[i] - numLog[i - 1];
    switch (difference) {
      case 1:
        result += "w";
        break;
      case -1:
        result += "s";
        break;
      case 10:
        result += "d";
        break;
      case -10:
        result += "a";
        break;
    }
  }
  return result;
}

//수열과 구간 쿼리 3
function ex29(arr, queries) {
  let result = [...arr];

  for (const query of queries) {
    const [i, j] = query;
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
