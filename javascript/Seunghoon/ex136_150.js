//OX 퀴즈
function ex136_oxQuiz(quiz) {
  return quiz.map((oper) => isQuizTrue(oper));
}

function isQuizTrue(oper) {
  const [calc, answer] = oper.split("=");
  const [left, operation, right] = calc.trim().split(" ");

  if (operation === "+") {
    return Number(left) + Number(right) === Number(answer) ? "O" : "X";
  }
  return Number(left) - Number(right) === Number(answer) ? "O" : "X";
}

//자릿수 더하기
function ex137_sumDigits(n) {
  return [...String(n)].reduce((sum, curr) => Number(sum) + Number(curr), 0);
}

//n의 배수 고르기
function ex138_pickMultipleN(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

//숫자 찾기
function ex139_findNumber(num, k) {
  const NOT_FOUND = -1;
  const result = [...String(num)].indexOf(String(k));

  return result === -1 ? NOT_FOUND : result + 1;
}

//배열의 유사도
function ex140_similarityList(s1, s2) {
  return s1.filter((str) => s2.includes(str)).length;
}

//문자열 계산하기
//분명 더 좋은 코드가 있을 것 같은데.. 어떻게 작성할 지
function ex141_calcString(myString) {
  const arr = myString.split(" ");
  let result = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (isNaN(Number(arr[i])) === true) {
      continue;
    }
    if (arr[i - 1] === "+") {
      result += Number(arr[i]);
    }
    if (arr[i - 1] === "-") {
      result -= Number(arr[i]);
    }
  }
  return result;
}

//가장 큰 수 찾기
function ex142_findMaxNumber(array) {
  const maxNum = Math.max(...array);
  const idx = array.indexOf(maxNum);

  return [maxNum, idx];
}

//편지
function ex143_letter(message) {
  return message.length * 2;
}

//약수 구하기
function generateDivisor(number) {
  const arr = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function ex144_getDivisorList(n) {
  const result = generateDivisor(n);

  return result;
}

//한 번만 등장한 문자
function findOnlyString(stringList) {
  const obj = {};

  for (const str of stringList) {
    if (obj[str] === undefined) {
      obj[str] = 0;
    }
    obj[str] += 1;
  }

  return Object.entries(obj).filter(([_, value]) => value === 1);
}

function ex145_onlyOnceShow(s) {
  const onlyOneStringList = findOnlyString([...s]);
  const result = [];

  for (const str of onlyOneStringList) {
    const [key, _] = str;
    result.push(key);
  }

  return result.sort().join("");
}

//인덱스 바꾸기
function changeIndex(strList, idx1, idx2) {
  [strList[idx1], strList[idx2]] = [strList[idx2], strList[idx1]];
  return strList;
}

function ex146_changeList(myString, num1, num2) {
  let stringList = changeIndex([...myString], num1, num2);

  return stringList.join("");
}

//영어가 싫어요
//replace를 쓰면 더 깔끔해질까..
function isNumbers(number) {
  const numberList = [
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

  if (numberList.includes(number)) {
    return numberList.indexOf(number);
  }
  return number;
}

function ex147_changeEnglishNum(numbers) {
  let answer = "";
  const result = [];

  numbers.split("").map((str) => {
    answer += str;
    let checkNum = isNumbers(answer);
    if (isNaN(Number(checkNum)) !== true) {
      result.push(checkNum);
      answer = "";
    }
  });
  return Number(result.join(""));
}

//대문자와 소문자
function changeLetter(string) {
  if (string.toUpperCase() === string) {
    return string.toLowerCase();
  }
  return string.toUpperCase();
}

function ex148_LargeAndSmallLetter(myString) {
  const result = [...myString].map((str) => changeLetter(str));

  return result.join("");
}

//암호 해독
function decryption(cipher, code) {
  return cipher
    .split("")
    .slice(code - 1)
    .filter((_, index) => index % code === 0);
}

function ex149_decrypt(cipher, code) {
  const result = decryption(cipher, code).join("");

  return result;
}

//369게임
function isMultipleOfThree(number) {
  return number.filter((num) => Number(num) !== 0 && num % 3 === 0).length;
}

function ex150_koreanNumberGame(order) {
  const result = isMultipleOfThree([...String(order)]);

  return result;
}
