// 61.간단한 식 계산하기
function ex61(binomial) {
  const target = binomial.split(" ");
  num1 = Number(target[0]);
  num2 = Number(target[2]);

  switch (target[1]) {
    case "+": {
      return num1 + num2;
      break;
    }
    case "-": {
      return num1 - num2;
      break;
    }
    case "*": {
      return num1 * num2;
      break;
    }
  }
}

// 62.문자열 바꿔서 찾기
function ex62(myString, pat) {
  const myArr = myString.split("");
  myArr.forEach((my, i) => {
    if (my === "A") myArr[i] = "B";
    if (my === "B") myArr[i] = "A";
  });

  return myArr.join("").includes(pat) ? 1 : 0;
}

// 63.rny_string
function ex63(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

// 64.세 개의 구분자
function ex64(myStr) {
  const temp = myStr.split(/[a | b | c]/g).filter((word) => word !== "");
  return temp.length > 0 ? temp : ["EMPTY"];
}

// 65.배열의 원소만큼 추가하기
function ex65(arr) {
  let X = [];
  for (let one of arr) {
    for (let i = 0; i < one; i++) {
      X;
    }
  }
  return;
}

// 66.빈 배열에 추가, 삭제하기
function ex66(arr, flag) {
  let X = [];
  flag.forEach((bool, idx) => {
    if (bool) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        X.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        X.pop();
      }
    }
  });
  return X;
}

// 67.배열 만들기 6
function ex67(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (!stk) stk.push(arr[i]);
    if (stk[stk.length - 1] === arr[i]) {
      stk.pop();
    } else stk.push(arr[i]);
  }
  return stk.length > 0 ? stk : [-1];
}

// 68.무작위로 K개의 수 뽑기
function ex68(arr, k) {
  let answer = [];
  new Set(arr).forEach((el) => answer.push(el));
  if (answer.length > k) {
    answer = answer.splice(0, k);
  } else {
    for (let i = answer.length; i < k; i++) {
      answer.push(-1);
    }
  }
  return answer;
}

// 69.배열 비교하기
function ex69(arr1, arr2) {
  const arr1Length = arr1.length;
  const arr2Length = arr2.length;
  if (arr1Length !== arr2Length) return arr1Length > arr2Length ? 1 : -1;

  const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);
  if (arr1Sum === arr2Sum) return 0;
  return arr1Sum > arr2Sum ? 1 : -1;
}

// 70.문자열 묶기
function ex70(strArr) {
  let result = new Array(30).fill(0);
  for (let one of strArr) {
    result[one.length - 1]++;
  }
  return Math.max(...result);
}

// 71.배열의 길이에 따라 다른 연산하기
function ex71(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((a, i) => (i % 2 !== 0 ? a + n : a));
  } else return arr.map((a, i) => (i % 2 === 0 ? a + n : a));
}

// 72.뒤에서 5등까지
function ex72(num_list) {
  const answer = num_list.sort((a, b) => a - b);
  return answer.slice(0, 5);
}

// 73.전국 대회 선발 고사
function ex73(rank, attendance) {
  const okay = [];
  attendance.forEach((el, i) => {
    if (el) {
      okay.push(rank[i]);
    }
  });
  const ranking = okay.sort((a, b) => a - b);
  return (
    rank.indexOf(ranking[0]) * 10000 +
    rank.indexOf(ranking[1]) * 100 +
    rank.indexOf(ranking[2])
  );
}

// 74.문자열 정수의 합
function ex74(num_str) {
  return [...num_str].reduce((acc, cur) => acc + Number(cur), 0);
}

// 75.문자열을 정수로 변환하기
function ex75(n_str) {
  return Number(n_str);
}
