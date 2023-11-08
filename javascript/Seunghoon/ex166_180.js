//삼각형의 완성조건 (2)
function findOtherSide(sides) {
  sides.sort((a, b) => a - b);
  let count = 0;
  const [side1, side2] = sides;

  for (let i = side2 - side1 + 1; i <= side2; i++) {
    count++;
  }
  for (let j = side2 + 1; j < side1 + side2; j++) {
    count++;
  }
  return count;
}

function ex166_makeTriangle(sides) {
  const result = findOtherSide(sides);

  return result;
}

//안전지대
function checkDangerSpot(board, arr) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        arr[i][j] = 1;
        arr[i][j + 1] = 1;
        arr[i][j + 2] = 1;
        arr[i + 1][j] = 1;
        arr[i + 1][j + 1] = 1;
        arr[i + 1][j + 2] = 1;
        arr[i + 2][j] = 1;
        arr[i + 2][j + 1] = 1;
        arr[i + 2][j + 2] = 1;
      }
    }
  }
  return arr;
}

function countDangerSpot(dangerZone) {
  let count = 0;
  for (let k = 1; k < dangerZone.length - 1; k++) {
    for (let l = 1; l < dangerZone.length - 1; l++) {
      if (dangerZone[k][l] === 1) {
        count += 1;
      }
    }
  }
  return count;
}

function ex167_safeZone(board) {
  const arr = Array.from({ length: board.length + 2 }, () =>
    new Array(board.length + 2).fill(0)
  );
  const dangerZone = checkDangerSpot(board, arr);
  const countDanger = countDangerSpot(dangerZone);
  const result = board.length ** 2 - countDanger;

  return result;
}

//숨어있는 숫자의 덧셈 (2)
function replaceChar(strList) {
  return [...strList]
    .map((str) => {
      if (isNaN(Number(str))) return (str = "x");
      return str;
    })
    .join("")
    .split("x");
}

function ex168_addHiddenNumber(myString) {
  const result = replaceChar(myString);

  return result.reduce((sum, curr) => Number(sum) + Number(curr), 0);
}

//다항식 더하기
function calcPolynomial(polynomial) {
  const splitPolynomial = polynomial.split("+");
  let countX = 0;
  let countNum = 0;

  for (const elem of splitPolynomial) {
    if (isNaN(Number(elem))) {
      let list = elem.trim().split("x");
      if (list[0] === "") {
        countX += 1;
      } else {
        countX += Number(list[0]);
      }
    } else {
      countNum += Number(elem);
    }
  }
  return [countX, countNum];
}

function checkCondition(countX, countNum) {
  if (countX > 1 && countNum === 0) return `${countX}x`;
  if (countX === 0) return String(countNum);
  if (countX === 1 && countNum > 0) return `x + ${countNum}`;
  if (countX === 1 && countNum === 0) return "x";

  return `${countX}x + ${countNum}`;
}

function ex169_addPolynomial(polynomial) {
  const [countX, countNum] = calcPolynomial(polynomial);
  const result = checkCondition(countX, countNum);

  return result;
}

//최댓값 만들기 (2)
function findMaxNumber(numberList) {
  const list = [...numberList].sort((a, b) => b - a);
  const [a, b] = [
    list[0] * list[1],
    list[list.length - 1] * list[list.length - 2],
  ];
  return a > b ? a : b;
}

function ex170_makeMaxNumber(numbers) {
  const result = findMaxNumber(numbers);

  return result;
}

//캐릭터의 좌표
function ex171_locateOfCharacter(keyinput, board) {
  const [maxWidth, maxHeight] = board.map((size) => {
    return (size = (size - 1) / 2);
  });
  let [width, height] = [0, 0];

  for (const key of keyinput) {
    switch (key) {
      case "left":
        if (width !== -maxWidth) width -= 1;
        break;
      case "right":
        if (width !== maxWidth) width += 1;
        break;
      case "up":
        if (height !== maxHeight) height += 1;
        break;
      case "down":
        if (height !== -maxHeight) height -= 1;
        break;
    }
  }
  return [width, height];
}

//직사각형 넓이 구하기
function ex172_findRectArea(dots) {
  const xSort = [...dots].sort((a, b) => a[0] - b[0]);
  const ySort = [...dots].sort((a, b) => a[1] - b[1]);
  const xLength = xSort[3][0] - xSort[0][0];
  const yLength = ySort[3][1] - ySort[0][1];

  return xLength * yLength;
}

//배열 원소의 길이
function ex173_lengthOfListElem(strList) {
  return strList.map((str) => str.length);
}

//컨트롤 제트
//reduce를 뭔가 다른때랑 다르게 활용한 것 같아 혼자 뿌듯..
function minusPreviousValue(sum, arr, i) {
  return Number(sum) - Number(arr[i - 1]);
}

function ex174_controlStringZ(s) {
  return s.split(" ").reduce((sum, curr, i, arr) => {
    if (isNaN(Number(curr))) {
      return minusPreviousValue(sum, arr, i);
    }
    return Number(sum) + Number(curr);
  }, 0);
}

//소인수분해
function ex175_intFactorization(n) {
  let count = 2;
  let result = [];

  while (n > 1) {
    if (n % count === 0) {
      n /= count;
      result.push(count);
    } else {
      count++;
    }
  }
  return [...new Set(result)];
}

//숨어있는 숫자의 덧셈 (1)
function findNumber(sum, curr) {
  return Number(sum) + Number(curr);
}

function ex176_sumHideNumber(myString) {
  return [...myString].reduce((sum, curr) => {
    if (Number(curr)) return findNumber(sum, curr);
    return sum;
  }, 0);
}

//문자열 정렬하기 (1)
function pickOnlyNumber(list) {
  const arr = [];
  for (const elem of [...list]) {
    if (Number(elem) || elem === "0") arr.push(Number(elem));
  }
  return arr;
}

function ex177_sortStringList(myString) {
  const result = pickOnlyNumber(myString);

  return result.sort((a, b) => a - b);
}

//모음 제거
function findVowel(str) {
  const vowel = ["a", "e", "i", "o", "u"];

  if (vowel.includes(str)) return;
  return str;
}

function ex178_removeVoel(myString) {
  return [...myString]
    .filter((str) => {
      return findVowel(str);
    })
    .join("");
}

//팩토리얼
function findMaxFactorial(n) {
  let sum = 1;
  let count = 1;

  while (sum < n) {
    sum *= count;
    if (sum < n) {
      count++;
    }
  }

  return sum > n ? count - 1 : count;
}

function ex179_factorial(n) {
  const result = findMaxFactorial(n);

  return result;
}

//최댓값 만들기 (1)
function ex180_makeMaxNum(numbers) {
  const sortList = [...numbers].sort((a, b) => b - a);

  return sortList[0] * sortList[1];
}
