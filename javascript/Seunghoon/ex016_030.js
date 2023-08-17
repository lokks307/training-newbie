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
