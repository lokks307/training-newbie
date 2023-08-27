// 주사위의 개수

function ex181NumberOfDice(box, n) {
  const a = Math.floor(box[0] / n);
  const b = Math.floor(box[1] / n);
  const c = Math.floor(box[2] / n);
  return a * b * c;
}

// 배열 회전시키기

function ex182(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}

//

// 공 던지기 183

function ex183ThrowingBall(numbers, k) {
  let thrower = 1;
  for (let i = 1; i < k; i++) {
    thrower += 2;
    if (thrower > numbers.length) {
      thrower -= numbers.length;
    }
  }
  return thrower;
}
//

// 점의 위치 구하기

function ex185PositionOfDot(dot) {
  const [x, y] = dot;

  if (x >= 0 && y >= 0) return 1;
  if (x >= 0 && y < 0) return 4;
  if (x < 0 && y >= 0) return 2;
  if (x < 0 && y < 0) return 3;
}

//

// 구슬을 나누는 경우의 수

function ex186(balls, share) {
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let answer = factorial(balls) / (factorial(balls - share) * factorial(share));

  return Math.round(answer);
}

//

// 가위 바위 보

function ex187RockScissorsPaper(rsp) {
  let obj = {
    2: 0,
    0: 5,
    5: 2,
  };
  let answer = [...rsp].map((num) => obj[num]).join("");
  return answer;
}

//

// 모스부호 (1)

function ex188Morse(letter) {
  let morse = {
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
  let letterList = letter.split(" ");
  return letterList.map((ch) => morse[ch]).join("");
}

//

// 개미 군단

function ex189ArmyOfAnt(hp) {
  let a = 5;
  let b = 3;
  let c = 1;

  let A = Math.floor(hp / a);
  let B = Math.floor((hp % a) / b);
  let C = Math.floor(((hp % a) % b) / c);

  return A + B + C;
}

//

// 진료순서 정하기

function ex191SettingOrder(emergency) {
  let emergencySortedList = [...emergency].sort((a, b) => b - a);
  return emergency.map((ch, i) => emergencySortedList.indexOf(ch) + 1);
}

//

// 외계행성의 나이

function ex192(age) {
  let alp = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let ageStr = [...String(age)];
  let answer = "";

  for (let i = 0; i < ageStr.length; i++) {
    answer += alp[ageStr[i]];
  }
  return answer;
}

//

// 특정 문자 제거하기

function ex197RemoveCharacter(my_string, letter) {
  let answer = [...my_string].filter((ch) => ch !== letter).join("");
  return answer;
}

//

// 문자 반복 출력하기

function ex198(my_string, n) {
  let result = [...my_string].map((ch) => ch.repeat(n)).join("");
  return result;
}

//

// 짝수 홀수 개수 199

function ex199NumberOfEvenOdd(num_list) {
  let even = 0;
  let odd = 0;

  for (const num of num_list) {
    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }
  return [even, odd];
}

//

// 직각삼각형 출력하기

let input;

function ex200() {
  ex200Output(Number(input));
}

function ex200Output(num) {
  let star = "*";
  for (let i = 1; i <= num; i++) {
    console.log(star.repeat(i));
  }
}

function solveThis(solveFunction) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input = [line][0];
  }).on("close", solveFunction);

  return rl;
}

solveThis(ex200);

//

// 아이스 아메리카노

function ex204IcedAmericano(money) {
  let americano = 5500;
  let coffee = Math.floor(money / americano);
  let change = money % americano;

  return [coffee, change];
}

//

// 피자 나눠 먹기 (2)

function ex208SharePizza(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

//

// 짝수는 싫어요

function ex210HateEvenNumber(n) {
  let result = Array.from({ length: n }, (_, i) => i + 1).filter(
    (num) => num % 2 !== 0
  );
  return result;
}

//

// 최빈값 구하기

function ex211(array) {
  let count = {};
  for (const num of array) {
    if (count[num] === undefined) count[num] = 0;

    count[num]++;
  }

  const countList = Object.values(count);
  const numList = Object.keys(count);
  const maxValue = Math.max(...Object.values(count));

  const onlyMaxList = countList.filter((ch) => ch === maxValue);
  const maxKey = Number(numList[countList.indexOf(maxValue)]);

  return onlyMaxList.length > 1 ? -1 : maxKey;
}

//

// 중앙값 구하기

function ex212GetMedianValue(array) {
  array.sort((a, b) => a - b);
  let median = (array.length - 1) / 2;
  return array[median];
}

//

// 분수의 덧셈 215

function ex215AddFraction(numer1, denom1, numer2, denom2) {
  let numer = numer1 * denom2 + numer2 * denom1;
  let denom = denom1 * denom2;

  let maxDivisor = 0;
  for (let i = 1; i <= numer; i++) {
    if (numer % i === 0 && denom % i === 0) {
      maxDivisor = i;
    }
  }

  let numerResult = numer / maxDivisor;
  let denomResult = denom / maxDivisor;

  return [numerResult, denomResult];
}

//

// 머쓱이보다 키 큰 사람

function ex222TallerPeople(array, height) {
  let tallerList = array.filter((num) => num > height);
  return tallerList.length;
}

//

// 중복된 숫자 개수

function ex223DuplicatedNumber(array, n) {
  let answer = array.filter((num) => num === n).length;
  return answer;
}

//

// 문제풀이 종료입니다 👏
