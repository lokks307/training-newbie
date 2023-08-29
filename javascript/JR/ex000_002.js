// 16.원소들의 곱과 합
function ex16(num_list) {
  let add = 0;
  let multiple = 1;
  for (let one of num_list) {
    add += one;
    multiple *= one;
  }
  if (add ** 2 > multiple) return 1;
  return 0;
}

// 17.이어 붙인 수
function ex17(num_list) {
  let odd = "";
  let even = "";
  for (let one of num_list) {
    if (one % 2 === 0) {
      even += String(one);
    } else odd += String(one);
  }
  return Number(odd) + Number(even);
}

// 18.수 조작하기 1
function ex18(n, control) {
  for (let one of control.split("")) {
    switch (one) {
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

// 19.수 조작하기 2
function ex19(numLog) {
  let answer = [];
  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i + 1] - numLog[i] == 1) {
      answer.push("w");
    } else if (numLog[i + 1] - numLog[i] == -1) {
      answer.push("s");
    } else if (numLog[i + 1] - numLog[i] == 10) {
      answer.push("d");
    } else answer.push("a");
  }
  const result = answer.join("");
  return result;
}

// 20.수열과 구간 쿼리 3
function ex20(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];
    let captureA = arr[a];
    let captureB = arr[b];
    arr[a] = captureB;
    arr[b] = captureA;
  }
  return arr;
}

// 21.수열과 구간 쿼리 2
function ex21(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    let passed = [];
    const [a, b, c] = queries[i];
    for (let i = a; i <= b; i++) {
      if (arr[i] > c) passed.push(arr[i]);
    }
    const sorted = passed.sort((a, b) => a - b);
    if (sorted.length > 0) {
      answer.push(sorted[0]);
    } else answer.push(-1);
  }
  return answer;
}

// 22.배열 만들기 2
function ex22(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    if (i % 5 === 0) {
      let changed = String(i).replace(/[5,0]/g, "");
      if (changed.length === 0) {
        answer.push(i);
      }
    }
  }
  if (answer.length > 0) return answer;
  return [-1];
}

// 23.카운트 업
function ex23(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

// 24.콜라츠 수열 만들기
function ex24(n) {
  let answer = [n];
  while (n !== 1) {
    if (n % 2 === 0) answer.push((n /= 2));
    else answer.push((n = 3 * n + 1));
  }
  return answer;
}

// 25.배열 만들기 5
function ex25(intStrs, k, s, l) {
  let answer = [];
  for (let item of intStrs) {
    const piece = Number(item.substr(s, l));
    if (piece > k) answer.push(piece);
  }
  return answer;
}

// 26.부분 문자열 이어 붙여 문자열 만들기
function ex26(my_strings, parts) {
  let answer = [];
  for (let i = 0; i < my_strings.length; i++) {
    const [a, b] = parts[i];
    answer.push(my_strings[i].substr(a, b - a + 1));
  }
  return answer.join("");
}

// 27.문자열의 뒤의 n글자
function ex27(my_string, n) {
  const answer = my_string.slice(-n);
  return answer;
}

// 28.문자열 뒤집기
function ex28(my_string, s, e) {
  const sliced = my_string.slice(s, e + 1);
  const flipped = [...sliced].reverse().join("");
  const original = [...my_string];
  original.splice(s, e - s + 1, flipped);
  return original.join("");
}

// 29.세로 읽기
function ex29(my_string, m, c) {
  let result = "";
  const table = [];
  for (let i = 0; i < Math.floor(my_string.length / m); i++) {
    const row = [];
    for (let j = 0; j < m; j++) {
      const cur = my_string[i * m + j];
      if (j + 1 === c) result += cur;
      row.push(cur);
    }
    table.push(row);
  }

  return result;
}

// 30.qr code
function ex30(q, r, code) {
  return [...code].reduce((acc, cur, idx) => {
    return idx % q === r ? acc + cur : acc;
  }, "");
}
