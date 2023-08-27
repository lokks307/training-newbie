// 평행

function ex162Parallel(dots) {
  let answer;
  function getDiff(a, b, c, d) {
    let diffA, diffB;
    diffA = (a[1] - b[1]) / (a[0] - b[0]);
    diffB = (c[1] - d[1]) / (c[0] - d[0]);

    if (diffA === diffB) {
      answer = 1;
    }
  }

  getDiff(dots[0], dots[1], dots[2], dots[3]);
  getDiff(dots[0], dots[2], dots[1], dots[3]);
  getDiff(dots[0], dots[3], dots[1], dots[2]);

  return answer === 1 ? 1 : 0;
}

//

// 저주의 숫자 163

function ex163NumberOfCurse(n) {
  let num = 0;
  while (n > 0) {
    num++;
    if (String(num).includes("3") || num % 3 === 0) {
      continue;
    }
    n--;
  }
  return num;
}

//

// 외계어 사전

function ex164(spell, dic) {
  let filteredList = dic.filter((str) => spell.every((ch) => str.includes(ch)));

  let answer = filteredList.filter((str) => {
    let origin = [...str];
    let removed = [...new Set(origin)];
    return origin.join("") === removed.join("");
  });

  return answer.length > 0 ? 1 : 2;
}

//

// 삼각형의 완성조건 (2) 165

function ex166(sides) {
  let a = sides[0];
  let b = sides[1];
  let count = 0;

  for (let c = 1; c < a + b; c++) {
    let temp = [...sides, c].sort((a, b) => a - b);
    if (temp[2] < temp[0] + temp[1]) count++;
  }
  return count;
}

//

// 안전지대 166

// TODO: 삽질을 해봐도...

//

// 숨어있는 숫자의 덧셈 (2)

function ex167(my_string) {
  let filteredList = my_string
    .split(/[a-zA-Z]/g)
    .filter((ch) => Number(ch))
    .map(Number);
  return filteredList.reduce((acc, cur) => acc + cur, 0);
}

//

// 다항식 더하기

function ex168(polynomial) {
  let numList = polynomial
    .split(" ")
    .filter((ch) => !ch.includes("x") && !ch.includes("+"))
    .map(Number);

  let polyList = polynomial
    .split(" ")
    .filter((ch) => ch.includes("x"))
    .map((el) => el.split("x").join(""))
    .map((num) => {
      if (num === "") {
        num = "1";
      }
      return Number(num);
    });

  let polyTotal = polyList.reduce((acc, cur) => acc + cur, 0);
  let numTotal = numList.reduce((acc, cur) => acc + cur, 0);

  let answer = `${polyTotal !== 1 && polyTotal !== 0 ? String(polyTotal) : ""}${
    polyTotal !== 0 ? "x" : ""
  }${numTotal !== 0 && polyTotal !== 0 ? " + " : ""}${
    numTotal !== 0 ? String(numTotal) : ""
  }`;

  return answer;
}

// 코드가 많이 지저분해서 혼날 것 같지만..😅

//

// 최댓값 만들기 (2)

function ex169MakeMaxNumber(numbers) {
  numbers.sort((a, b) => b - a);
  const first = numbers[0];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];
  const prev = numbers[numbers.length - 2];
  return Math.max(first * second, last * prev);
}

//

// 캐릭터의 좌표

function ex170(keyinput, board) {
  let x = 0;
  let y = 0;
  let result = [];
  let boardX = board[0] / 2;
  let boardY = board[1] / 2;

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left" && x - 1 > -boardX) {
      x--;
    }
    if (keyinput[i] === "right" && x + 1 < boardX) {
      x++;
    }
    if (keyinput[i] === "up" && y + 1 < boardY) {
      y++;
    }
    if (keyinput[i] === "down" && y - 1 > -boardY) {
      y--;
    }
  }

  result.push(x, y);

  return result;
}

//

// 직사각형 넓이 구하기

function ex171(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  let a = Math.abs(dots[0][0] - dots[3][0]);

  dots.sort((a, b) => b[1] - a[1]);
  let b = Math.abs(dots[0][1] - dots[3][1]);

  return a * b;
}

//

// 컨트롤 제트

function ex173(s) {
  let list = s.split(" ").map(Number);
  let sum = 0;

  for (let i = 0; i < list.length; i++) {
    if (isNaN(list[i])) {
      sum -= list[i - 1];
    }
    if (!isNaN(list[i])) {
      sum += list[i];
    }
  }
  return sum;
}

//

// 소인수분해

function ex174(n) {
  let answer = [];

  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      n /= i;
      answer.push(i);
    }
  }

  return [...new Set(answer)];
}

//

// 숨어있는 숫자의 덧셈 (1) 175

function ex175(my_string) {
  let filteredList = [...my_string].filter((ch) => Number(ch)).map(Number);
  return filteredList.reduce((acc, cur) => acc + cur, 0);
}

//

// 문자열 정렬하기 (1)

function ex176ArrangeString(my_string) {
  return (filteredList = [...my_string]
    .filter((ch) => Number(ch) || ch === "0")
    .map(Number)
    .sort());
}

//

// 모음 제거 177

function ex177RemoveVowel(my_string) {
  let vowel = ["a", "e", "i", "o", "u"];

  return [...my_string].filter((ch) => !vowel.includes(ch)).join("");
}

//

// 합성수 찾기 180

function ex180(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count += 1;
      }
      if (count >= 3) {
        answer += 1;
        break;
      }
    }
  }
  return answer;
}

//
