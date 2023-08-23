// 문제 순서가 바뀌어서 day8 부터 다시 원래 순서대로 풀겠습니다 :)

// A 강조하기

function ex79HighlightA(myString) {
  let transformedArr = [...myString.toLowerCase()].map((ch) =>
    ch === "a" ? "A" : ch
  );
  return transformedArr.join("");
}

// 정규표현식 사용

function ex79HighlightA2(myString) {
  return myString.replace(/a/g, "A");
}

//

// 특정한 문자를 대문자로 바꾸기

function ex80(my_string, alp) {
  let transformedArr = [...my_string].map((ch) =>
    ch === alp ? ch.toUpperCase() : ch
  );
  return transformedArr.join("");
}

function ex80A(my_string, alp) {
  const upperAlp = alp.toUpperCase(); // 소문자로 바꾼 alp를 upperAlp로 선언
  const transformedArr = [...my_string].map((ch) =>
    ch === alp ? upperAlp : ch
  );
  return transformedArr.join("");
}

//

// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

function ex81FindTheLongest(myString, pat) {
  let patIndex = myString.lastIndexOf(pat[pat.length - 1]);
  let answer = myString.slice(0, patIndex + 1);

  return answer;
}

//

// 문자열이 몇 번 등장하는지 세기

// function ex82CountString(myString, pat) {
//   let idx = myString.indexOf(pat);
//   let idxList = [];

//   while (idx != -1) {
//     idxList.push(idx);
//     idx = myString.indexOf(pat, idx + 1);
//   }

//   return idxList.length;
// }

function ex82CountStringA(myString, pat) {
  let idx = myString.indexOf(pat);
  let count = 0;

  while (idx !== -1) {
    count++;
    idx = myString.indexOf(pat, idx + 1);
  }

  return count;
}

//

// ad 제거하기

function ex83RemoveEl(strArr) {
  return strArr.filter((el) => !el.includes("ad"));
}

//

// 공백으로 구분하기 1

function ex84SeparateBySpace(my_string) {
  return my_string.split(" ");
}

//

// 공백으로 구분하기 2

function ex85SeparateBySpace(my_string) {
  return my_string.split(" ").filter((el) => el !== "");
}

//

// x 사이의 개수

function ex86CountBetweenX(myString) {
  return myString.split("x").map((str) => str.length);
}

//

// 문자열 잘라서 정렬하기

// function ex87CutAndSortStr(myString) {
//   return myString
//     .split("x")
//     .sort()
//     .filter((el) => el != "");
// }

function ex87CutAndSortStr(myString) {
  return myString
    .split("x")
    .sort()
    .filter((el) => Boolean(el));
}

//

// 간단한 식 계산하기

function ex88Calculate(binomial) {
  let arr = binomial.split(" ");
  const a = Number(arr[0]);
  const b = Number(arr[2]);
  const op = arr[1];

  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
  }
}

//

// 문자열 바꿔서 찾기

// function ex89FindString(myString, pat) {
//   let arr = [...myString].map((ch) => (ch === "A" ? "B" : "A"));

// return arr.join("").includes(pat) ? 1 : 0
// }

function ex89FindString(myString, pat) {
  let arr = [...myString].map((ch) => (ch === "A" ? "B" : "A"));
  return boolTo10(arr.join("").includes(pat));
}
function boolTo10(b) {
  if (b) return 1;
  return 0;
}
//

// rny_string

function ex90RnyString(rny_string) {
  let arr = [...rny_string].map((ch) => (ch === "m" ? "rn" : ch));

  return arr.join("");
}

//

// 세 개의 구분자

// function ex91(myStr) {
//   const a = myStr.split("a").join(",");
//   const b = a.split("b").join(",");
//   const c = b.split("c").join(",");

//   const answer = c.split(",").filter((str) => str !== "");

//   if (answer.length === 0) {
//     return ["EMPTY"];
//   }
//   return answer;
// }

function ex91a(str) {
  const result = str.split(/[a-c]/).filter(Boolean);
  return result.length === 0 ? ["EMPTY"] : result;
}

function ex91b(myStr) {
  const replacedStr = myStr.replace(/[abc]/g, ",");
  const answer = replacedStr.split(",").filter((str) => str !== "");
  if (answer.length === 0) {
    return ["EMPTY"];
  }
  return answer;
}

// 변수명이 알기 쉽게 선언되어 있어 가독성이 좋음
function ex91c(str) {
  var removeCondition = str.split(/[a-c]/);
  const removeEmpty =
    removeCondition.filter(Boolean).length === 0
      ? ["EMPTY"]
      : removeCondition.filter(Boolean);
  return removeEmpty;
}

//

// 배열의 원소만큼 추가하기

function ex92AddElement(arr) {
  let X = [];
  for (num of arr) {
    for (let i = 0; i < num; i++) {
      X.push(num);
    }
  }
  return X;
}

//

// 빈 배열에 추가, 삭제하기

// function ex93AddOrDelete(arr, flag) {
//   let X = [];

//   for (let idx in arr) {
//     if (flag[idx]) {
//       Array.from({ length: arr[idx] * 2 }, () => X.push(arr[idx]));
//     } else {
//       X = X.slice(0, X.length - arr[idx]);
//     }
//   }
//   return X;
// }

function ex93AddOrDeleteA(arr, flag) {
  let X = [];
  for (let idx in arr) {
    if (flag[idx]) {
      Array.from({ length: arr[idx] * 2 }, () => X.push(arr[idx]));
    } else {
      X.splice(X.length - arr[idx], arr[idx]); // X.length - arr[idx]부터 arr[idx]개 삭제
    }
  }
  return X;
}

// 배열 만들기 6

// function ex94BuildArray(arr) {
//   let stk = [arr[0]];

//   for (let i = 1; i < arr.length; i++) {
//     if (stk[stk.length - 1] === arr[i]) {
//       stk.pop();
//     } else {
//       stk.push(arr[i]);
//     }
//   }
//   if (stk.length === 0) {
//     return [-1];
//   }
//   return stk;
// }

function ex94(arr) {
  const stack = [];
  const NO_RESULT = [-1];
  for (let i = 0; i < arr.length; i++) {
    if (stack.at(-1) === arr[i]) {
      stack.pop();
    } else {
      stack.push(arr[i]);
    }
  }

  // 'stack에 데이터가 있으면 stack 반환하고, 없으면 말고'
  return stack.length > 0 ? stack : NO_RESULT; // stack의 길이가 0보다 크면 stack을 반환, 아니면 NO_RESULT 반환
  // return stack.length === 0 ? NO_RESULT : stack;  // stack의 길이가 0이면 NO_RESULT를 반환, 아니면 stack을 반환
}

//

// 무작위로 K개의 수 뽑기

// function ex95ExtractRandom(arr, k) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!answer.includes(arr[i])) {
//       answer.push(arr[i]);
//     }
//   }
//   while (answer.length < k) {
//     answer.push(-1);
//   }
//   return answer.slice(0, k);
// }

function ex95a(arr, k) {
  const uniqueArray = [...new Set(arr)];
  const selectedArray = uniqueArray.slice(0, k);
  const newArray = selectedArray.concat(
    new Array(k - selectedArray.length).fill(-1)
  );
  return newArray;
}
//

// 배열의 길이를 2의 거듭제곱으로 만들기

function ex96(arr) {
  let min = 1;
  while (min < arr.length) min *= 2;
  while (arr.length < min) arr.push(0);
  return arr;
}

function ex96A(arr) {
  let exponent = 0;
  let targetLength = 1;

  while (exponent >= 0) {
    if (arr.length <= targetLength) {
      break;
    }
    targetLength = 2 ** exponent;
    exponent++;
  }

  const newArray = arr.concat(new Array(targetLength - arr.length).fill(0));
  return newArray;
}

function ex96B(arr) {
  const targetLength = Math.pow(2, Math.ceil(Math.log2(arr.length)));

  while (arr.length < targetLength) {
    arr.push(0);
  }

  return arr;
}

//

// 배열 비교하기

// function ex97CompareArray(arr1, arr2) {
//   let sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
//   let sum2 = arr2.reduce((acc, cur) => acc + cur, 0);

//   if (arr1.length > arr2.length) {
//     return 1;
//   } else if (arr1.length < arr2.length) {
//     return -1;
//   } else if (arr1.length === arr2.length && sum1 === sum2) {
//     return 0;
//   } else if (arr1.length === arr2.length && sum1 > sum2) {
//     return 1;
//   }
//   return -1;
// }

// 매직 넘버에 이름 지어주기!

function ex97CompareArray(arr1, arr2) {
  const GREATER = 1;
  const LESS = -1;
  const EQUAL = 0;

  const sum1 = arr1.reduce((acc, val) => acc + val, 0);
  const sum2 = arr2.reduce((acc, val) => acc + val, 0);

  if (arr1.length > arr2.length) {
    return GREATER;
  } else if (arr1.length < arr2.length) {
    return LESS;
  } else if (sum1 === sum2) {
    return EQUAL;
  } else {
    return sum1 > sum2 ? GREATER : LESS;
  }
}

//
