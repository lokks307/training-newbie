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
