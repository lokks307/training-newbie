// 날짜 비교하기

function ex115CompareDate(date1, date2) {
  if (new Date(date1) < new Date(date2)) return 1;
  return 0;
}

//

// 커피 심부름

function ex116OrderCoffee(order) {
  let price = 0;
  for (const menu of order) {
    if (menu.includes("americano") || menu.includes("anything")) {
      price += 4500;
    } else {
      price += 5000;
    }
  }
  return price;
}

//

// 그림 확대

function ex117ZoomIn(picture, k) {
  let newPic = [];
  for (let i = 0; i < picture.length; i++) {
    let newStr = "";

    for (let j = 0; j < picture[i].length; j++) {
      newStr += picture[i][j].repeat(k);
    }
    newPic.push(newStr);
  }

  let answer = [];
  for (const item of newPic) {
    for (let i = 0; i < k; i++) {
      answer.push(item);
    }
  }
  return answer;
}

//

// 조건에 맞게 수열 변환하기 3

function ex118TransformSeq(arr, k) {
  return arr.map((el) => (k % 2 === 0 ? el + k : el * k));
}

//

// l로 만들기

function ex119MakeItL(myString) {
  return [...myString].map((el) => (el.charCodeAt() < 108 ? "l" : el)).join("");
}

//

// 특별한 이차원 배열 1

function ex120SpecialDimensionArray(n) {
  const arr = new Array(n).fill(Array(n).fill(0));

  let answer = arr.map((a, ai) => {
    return a.map((b, bi) => (ai === bi ? 1 : 0));
  });

  return answer;
}

//

// 정수를 나선형으로 배치하기
// FIXME:이건..아무리 생각해봐도 접근 방법을 모르겠습니다..😥

// 특별한 이차원 배열 2

function ex122DimensionArray(arr) {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

//

// 정사각형으로 만들기

function ex123BuildSquare(arr) {
  const col = arr[0].length;
  let row = arr.length;

  if (row > col) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < row - col; j++) {
        arr[i].push(0);
      }
    }
  } else if (row < col) {
    for (let i = 0; i < col - row; i++) {
      arr.push(new Array(col).fill(0));
    }
  }
  return arr;
}

//

// 이차원 배열 대각선 순회하기

function ex124ArrayCircuit(board, k) {
  const row = board.length;
  const col = board[0].length;
  let answer = 0;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i + j <= k) {
        answer += board[i][j];
      }
    }
  }
  return answer;
}

// 옹알이 (1)

function ex125(babbling) {
  const pron = ["aya", "ye", "woo", "ma"];
  let word;
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    word = babbling[i];
    for (let j = 0; j < pron.length; j++) {
      word = word.replace(pron[j], 0);
    }
    word = word.replaceAll(0, "");

    if (word === "") {
      count++;
    }
  }
  return count;
}

//

// 다음에 올 숫자

function ex126NextNum(common) {
  const next = common[1];
  const prev = common[0];
  const next2 = common[2];

  if (next - prev === next2 - next) {
    return common[common.length - 1] + next - prev;
  } else {
    return (common[common.length - 1] * next) / prev;
  }
}

//

// 연속된 수의 합

function ex127SumOfContinuousNumbers(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => i + min);
}

//

// 종이 자르기

function ex128PaperCutting(M, N) {
  return M - 1 + M * (N - 1);
}

//

// 문자열 밀기

function ex129PushString(A, B) {
  let count = 0;
  let arr = [...A];
  if (A === B) return 0;

  for (const alp of arr) {
    let ch = arr.splice(arr.length - 1, 1)[0];
    console.log(ch);
    arr.unshift(ch);
    count++;
    if (arr.join("") === B) {
      return count;
    }
  }
  return -1;
}

//

// 잘라서 배열로 저장하기

function ex130CutAndSaveArray(my_str, n) {
  let answer = [];
  let count = 0;

  for (let i = 0; i < my_str.length / n; i++) {
    answer.push(my_str.substr(count, n));
    count += n;
  }
  return answer;
}

//
