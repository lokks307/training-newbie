// 문자열 묶기

function ex98(strArr) {
  let lenArr = strArr.map((el) => el.length);
  let countMap = {};

  for (let num of lenArr) {
    if (countMap[num] === undefined) countMap[num] = 0;
    countMap[num] += 1;
  }

  let countArr = Object.values(countMap);
  return Math.max(...countArr);
}

//

// 배열의 길이에 따라 다른 연산하기

function ex99OperationByLength(arr, n) {
  if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length; i += 2) {
      arr[i] = arr[i] + n;
    }
  } else {
    for (let i = 1; i < arr.length; i += 2) {
      arr[i] = arr[i] + n;
    }
  }
  return arr;
}

//

// 뒤에서 5등까지

function ex100Until5th(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}

//

// 뒤에서 5등 위로

function ex101(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

//

// 전국 대회 선발 고사

function ex102(rank, attendance) {
  let rankArr = [];
  let answer = [];

  let attendArr = attendance.reduce((acc, cur, idx) => {
    if (cur === true) {
      acc.push(idx);
    }
    return acc;
  }, []);

  for (let i = 0; i < attendArr.length; i++) {
    rankArr.push(rank[attendArr[i]]);
  }
  let sortedArr = rankArr.sort((a, b) => a - b).slice(0, 3);

  for (let i = 0; i < sortedArr.length; i++) {
    answer.push(rank.indexOf(sortedArr[i]));
  }

  let total = answer[0] * 10000 + answer[1] * 100 + answer[2];
  return total;
}

// 정수 부분

function ex103PartOfInteger(flo) {
  return Math.floor(flo);
}

//

// 문자열 정수의 합

function ex104SumOfInteger(num_str) {
  return num_str.split("").reduce((acc, cur) => acc + Number(cur), 0);
}

//

// 문자열을 정수로 변환하기

function ex105TransformToInteger(n_str) {
  return Number(n_str);
}

//

// 0 떼기

function ex106Remove0(n_str) {
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] !== "0") return n_str.slice(i);
  }
}

//

// 두 수의 합

function ex107SumOfNums(a, b) {
  return String(BigInt(a) + BigInt(b));
}

//

// 문자열로 변환

function ex108(n) {
  return String(n);
}

//

// 배열의 원소 삭제하기

function ex109DeleteElement(arr, delete_list) {
  return arr.filter((num) => !delete_list.includes(num));
}

//

// 부분 문자열인지 확인하기

function ex110CheckString(my_string, target) {
  if (my_string.includes(target)) return 1;
  return 0;
}

//

// 부분 문자열

function ex111(str1, str2) {
  if (str2.includes(str1)) return 1;
  return 0;
}

//

// 꼬리 문자열

function ex112TailString(str_list, ex) {
  return str_list.filter((el) => !el.includes(ex)).join("");
}

//

// 정수 찾기

function ex113FindInteger(num_list, n) {
  if (num_list.includes(n)) return 1;
  return 0;
}

//

// 주사위 게임 1

function ex114DiceGame(a, b) {
  if (a % 2 !== 0 && b % 2 !== 0) return a ** 2 + b ** 2;
  else if (a % 2 !== 0 || b % 2 !== 0) return 2 * (a + b);
  else return Math.abs(a - b);
}

//
