// 46.할 일 목록
function ex46(todo_list, finished) {
  let answer = [];
  finished.forEach((status, index) => {
    if (!status) answer.push(todo_list[index]);
  });
  return answer;
}

// 47.n보다 커질 때까지 더하기
function ex47(numbers, n) {
  let count = 0;
  numbers.forEach((el) => {
    if (count > n) return;
    count += el;
  });
  return count;
}

// 48.수열과 구간 쿼리 1
function ex48(arr, queries) {
  for (let one of queries) {
    let idxArr = [];
    const [s, e] = one;
    for (let i = s; i <= e; i++) {
      idxArr.push(i);
    }
    idxArr.map((item) => (arr[item] += 1));
  }
  return arr;
}

// 49.조건에 맞게 수열 변환하기 1
function ex49(arr) {
  const result = arr.map((el) => {
    if (el >= 50 && el % 2 === 0) return el / 2;
    if (el < 50 && el % 2 !== 0) return el * 2;
    return el;
  });
  return result;
}

// 50.1로 만들기
function ex50(num_list) {
  let count = 0;
  for (let num of num_list) {
    while (num !== 1) {
      if (num % 2 === 0) {
        num /= 2;
        count++;
      } else {
        num = (num - 1) / 2;
        count++;
      }
    }
  }
  return count;
}
// 51.길이에 따른 연산
function ex51(num_list) {
  let answer = 0;
  if (num_list.length >= 11) {
    num_list.forEach((num) => (answer += num));
  } else {
    answer = 1;
    num_list.forEach((num) => (answer *= num));
  }
  return answer;
}

// 52.원하는 문자열 찾기
function ex52(myString, pat) {
  const smallArr = myString.toLowerCase();
  const smallPat = pat.toLowerCase();
  if (smallArr.includes(smallPat)) return 1;
  return 0;
}

// 53.대문자로 바꾸기
function ex53(myString) {
  return myString.toUpperCase();
}

// 54.A 강조하기
function ex54(myString) {
  const myArr = myString.toLowerCase();
  return myArr.replaceAll("a", "A");
}

// 55.특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function ex55(myString, pat) {
  const idx = myString.lastIndexOf(pat);
  return myString.slice(0, idx + pat.length);
}

// 56.문자열이 몇 번 등장하는지 세기
function ex56(myString, pat) {
  let count = 0;
  let index = myString.indexOf(pat);

  while (index !== -1) {
    count++;
    index = myString.indexOf(pat, index + 1);
  }

  return count;
}

// 57.ad 제거하기
function ex57(strArr) {
  for (let idx in strArr) {
    if (strArr[idx].includes("ad")) strArr[idx] = "";
  }
  const result = strArr.filter((item) => item !== "");
  return result;
}

// 58.공백으로 구분하기 1
function ex58(my_string) {
  return my_string.split(" ");
}

// 59.x 사이의 개수
function ex59(myString) {
  return myString.split("x").map((str) => str.length);
}

// 60.문자열 잘라서 정렬하기
function ex60(myString) {
  return myString
    .split("x")
    .filter((a) => a !== "")
    .sort();
}
