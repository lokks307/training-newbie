//수열과 구간 쿼리 4
function ex31(arr, queries) {
  let result = [...arr];

  for (const query of queries) {
    const [s, e, k] = query;
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        result[i] += 1;
      }
    }
  }
  return result;
}

//배열 만들기 2
function ex32(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 !== 0) {
      continue;
    }
    const individualNumbers = String(i).split("");
    if (individualNumbers.every((num) => num === "0" || num === "5")) {
      result.push(i);
    }
  }
  if (result.length === 0) return [-1];
  return result;
}

//카운트 업
function ex33(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

//콜라츠 수열 만들기
function ex34(n) {
  let result = [n];

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  return result;
}

//배열 만들기 4
function ex35(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
}

//간단한 논리 연산
function ex36(x1, x2, x3, x4) {
  let first, second, result;

  const checkValueDown = (x, y) => {
    if (x === false && y === false) {
      return false;
    }
    return true;
  };
  const checkValueUp = (x, y) => {
    if (x === true && y === true) {
      return true;
    }
    return false;
  };

  first = checkValueDown(x1, x2);
  second = checkValueDown(x3, x4);
  result = checkValueUp(first, second);

  return result;
}
