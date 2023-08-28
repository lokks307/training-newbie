//합성수 찾기
function isCompositeNumber(num) {
  let 약수 = 0;
  let count = 1;

  while (count <= num) {
    if (num % count === 0) {
      약수 += 1;
      count += 1;
    } else {
      count += 1;
    }
  }
  if (약수 >= 3) return true;
  return false;
}

function ex181_countCompositeNumber(n) {
  let result = 0;

  for (let i = 4; i <= n; i++) {
    if (isCompositeNumber(i)) result += 1;
  }
  return result;
}

//주사위의 개수
function ex182_NumberOfDice(box, n) {
  const width = Math.floor(box[0] / n);
  const height = Math.floor(box[1] / n);
  const depth = Math.floor(box[2] / n);

  return width * height * depth;
}

//배열 회전시키기
function turnRight(list) {
  let lastValue = list.pop();
  list.unshift(lastValue);
  return list;
}

function turnLeft(list) {
  let firstValue = list.shift();
  list.push(firstValue);
  return list;
}

function ex183_rotateList(numbers, direction) {
  if (direction === "right") {
    return turnRight(numbers);
  }
  return turnLeft(numbers);
}

//공 던지기
function whoIsNext(k, people) {
  let count = 1;
  let target = 0;

  while (count < k) {
    count++;
    target += 2;
    if (target > people) {
      target -= people;
    }
  }
  return target;
}

function ex184_throwTheBall(people, k) {
  const hisTurn = whoIsNext(k, people.length);

  return people[hisTurn];
}

//2차원으로 만들기
function putInNumber(newList, numList, n) {
  return newList.map((list) => {
    return (list = numList.splice(0, n));
  });
}

function ex185_makeTwoDimension(numList, n) {
  const newList = Array.from({ length: numList.length / n }).fill([]);
  const result = putInNumber(newList, numList, n);

  return result;
}

//점의 위치 구하기
function ex186_quadrant(dot) {
  const [x, y] = dot;

  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}

//구슬을 나누는 경우의 수
function getNumberOfCase(balls, share) {
  let 분자 = 1;
  let 분모 = 1;

  for (let i = balls; i > balls - share; i--) {
    분자 *= i;
  }

  for (let j = share; j > 0; j--) {
    분모 *= j;
  }

  return 분자 / 분모;
}

function ex187_numberOfCase(balls, share) {
  const result = getNumberOfCase(balls, share);

  return result;
}

//가위 바위 보
function ex188_rockPaperScissors(rsp) {
  const operation = {
    2: 0,
    0: 5,
    5: 2,
  };

  return [...rsp]
    .map((elem) => {
      if (operation.hasOwnProperty(elem)) {
        return (elem = operation[elem]);
      }
    })
    .join("");
}

//모스부호 (1)
function ex189_morseCode(letter) {
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  return letter
    .split(" ")
    .map((elem) => {
      if (morse.hasOwnProperty(elem)) {
        return (elem = morse[elem]);
      }
    })
    .join("");
}

//개미 군단
function ex190_antColony(hp) {
  const general = Math.floor(hp / 5);
  const soldier = Math.floor((hp % 5) / 3);
  const worker = hp - (general * 5 + soldier * 3);

  return general + soldier + worker;
}

//순서쌍의 개수
function countOrderedPair(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count += 1;
  }
  return count;
}

function ex191_orderedPair(n) {
  const result = countOrderedPair(n);

  return result;
}

//진료 순서 정하기
function changeEmergencyOrder(emergency) {
  const sortUrgent = [...emergency].sort((a, b) => b - a);
  return emergency.map((el) => {
    return (el = sortUrgent.indexOf(el) + 1);
  });
}

function ex192_orderOfCare(emergency) {
  const result = changeEmergencyOrder(emergency);

  return result;
}

//외계행성의 나이
function replaceWithAlphabet(age, lowerList) {
  return [...String(age)].map((el) => (el = lowerList[el])).join("");
}

function ex193_alienPlanetAge(age) {
  const char_a = 97;
  const char_z = 122;
  const lowerList = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(i + char_a)
  );
  const result = replaceWithAlphabet(age, lowerList);

  return result;
}

//배열 자르기
function ex194_sliceList(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

//짝수의 합
function ex195_sumOfEven(n) {
  const evenList = Array.from({ length: n }, (_, i) => i + 1).filter(
    (num) => num % 2 === 0
  );
  const result = evenList.reduce((prev, curr) => prev + curr, 0);

  return result;
}
