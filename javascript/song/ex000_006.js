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
  let arr = [...my_string];
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

function solution(quiz) {
  let X;
  let Y;
  let Z;
  let op;
  let result = [];

  for (let item of quiz) {
    let arr = item.split(" ");
    arr;
    op = arr[1];
    X = Number(arr[0]);
    Y = Number(arr[2]);
    Z = Number(arr[4]);
    if (op === "+") {
      if (X + Y === Z) {
        result.push("O");
      } else {
        result.push("X");
      }
    } else {
      if (X - Y === Z) {
        result.push("O");
      } else {
        result.push("X");
      }
    }
  }
  return result;
}

//

// 자릿수 더하기

function ex137(n) {
  let count = 0;
  let arr = String(n).split("");

  for (num of arr) {
    count += Number(num);
  }
  return count;
}

//

// n의 배수 고르기

function ex138(n, numlist) {
  return numlist.filter((el) => el % n === 0);
}

//

// 숫자 찾기

function ex139FindNumber(num, k) {
  let arr = String(num).split("");

  if (arr.includes(String(k))) {
    return arr.indexOf(String(k)) + 1;
  }
  return -1;
}

//

// 배열의 유사도

function ex140(s1, s2) {
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      count++;
    }
  }
  return count;
}

//

// 문자열 계산하기

function ex141(my_string) {
  let arr = my_string.split(" ");
  let answer = Number(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      answer += Number(arr[i + 1]);
    } else if (arr[i] === "-") {
      answer -= Number(arr[i + 1]);
    }
  }
  return answer;
}

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

function ex143GetDivision(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

//

// 한 번만 등장한 문자

function ex144FindUniqueStr(s) {
  let arr = [...s];
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    let filtered = arr.filter((el) => el !== arr[i]);
    if (arr.length - filtered.length === 1) {
      answer += arr[i];
    }
  }
  return answer.split("").sort().join("");
}

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

function ex146HateEnglish(numbers) {
  const numList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numList.length; i++) {
    numbers = numbers.replaceAll(numList[i], i);
  }
  return Number(numbers);
}

//

// 대문자와 소문자

function ex147UpperAndLower(my_string) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toLowerCase()) {
      arr.push(my_string[i].toUpperCase());
    } else {
      arr.push(my_string[i].toLowerCase());
    }
  }
  return arr.join("");
}

//
