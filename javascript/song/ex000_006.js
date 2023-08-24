// 7의 개수

// function ex131Count7(array) {
//   let str = array.join("");
//   let count = 0;
//   for (num of str) {
//     if (num === "7") {
//       count++;
//     }
//   }
//   return count;
// }

function ex131Count7(array) {
  let strList = [...array.join("")];
  return strList.filter((n) => n === "7").length;
}

//

// 문자열 정렬하기 (2)

function ex132ArrangeString(my_string) {
  let strList = [...my_string];
  return arr
    .map((ch) => ch.toLowerCase())
    .sort()
    .join("");
}

//

// 세균 증식

function ex133(n, t) {
  for (let i = 0; i < t; i++) {
    n *= 2;
  }
  return n;
}

//

// 제곱수 판별하기

function ex134IsSqrt(n) {
  const isSqrt = Math.sqrt(n) % 1 === 0;
  return isSqrt ? 1 : 2;
}

//

// 문자열안에 문자열

function ex135StringInString(str1, str2) {
  const isInclude = str1.includes(str2);
  return isInclude ? 1 : 2;
}

//

// OX퀴즈

//

// 자릿수 더하기

// function ex137(n) {
//   let count = 0;
//   let numList = String(n).split("");

//   for (num of numList) {
//     count += Number(num);
//   }
//   return count;
// }

function sumDigits(n) {
  const digits = String(n).split("").map(Number);
  return digits.reduce((sum, digit) => sum + digit, 0);
}

function ex137A(n) {
  return sumDigits(n);
}

//

// n의 배수 고르기

function ex138(n, numlist) {
  return numlist.filter((el) => el % n === 0);
}

//

// 숫자 찾기

// function ex139FindNumber(num, k) {
//   let numList = String(num).split("");

//   if (numList.includes(String(k))) {
//     return numList.indexOf(String(k)) + 1;
//   }
//   return -1;
// }
// String(k)를 두 번 썼다. 그럴 땐 변수로 지정하자.

function solution(num, k) {
  var answer = 0;
  return ex139FindDigitPosition(num, k);
}

function ex139FindDigitPosition(num, digit) {
  const digitStr = String(digit);
  const numStr = String(num);

  return numStr.includes(digitStr) ? numStr.indexOf(digitStr) + 1 : -1;
}

//

// 배열의 유사도

// function ex140(s1, s2) {
//   let count = 0;
//   for (let i = 0; i < s1.length; i++) {
//     if (s2.includes(s1[i])) {
//       count++;
//     }
//   }
//   return count;
// }

function countCommonCharacters(s1, s2) {
  const charList = Array.from(s1).filter((ch) => s2.includes(ch));
  return charList.length;
}

function ex140(s1, s2) {
  return countCommonCharacters(s1, s2);
}

//

// 문자열 계산하기

//

// 가장 큰 수 찾기

function ex142FindMaxNum(array) {
  let arr = [];
  const max = Math.max(...array);
  arr.push(max, array.indexOf(max));
  return arr;
}

//

// 약수 구하기

// function ex143GetDivision(n) {
//   let arr = [];

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

function ex143GetDivision(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter((i) => n % i === 0);
}

//

// 한 번만 등장한 문자

//

// 인덱스 바꾸기

function ex145SwapIndex(my_string, num1, num2) {
  let arr = [...my_string];

  arr.splice(num1, 1, my_string[num2]);
  arr.splice(num2, 1, my_string[num1]);
  return arr.join("");
}

//

// 영어가 싫어요

//

// 대문자와 소문자

function ex147UpperAndLower(my_string) {
  let arr = [];

  for (let i = 0; i < my_string.length; i++) {
    const ch = my_string[i];
    const upper = ch.toUpperCase();
    const lower = ch.toLowerCase();
    if (ch === lower) {
      arr.push(upper);
    } else {
      arr.push(lower);
    }
  }
  return arr.join("");
}

//
