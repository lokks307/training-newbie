//정수를 나선형으로 배치하기
//이 문제는 혼자서도 방법이 생각나지 않아 다른 사람의 풀이를 확인했습니다 ..
function ex121(n) {
  const result = Array.from(Array(n), () => Array(n).fill(0)); // n x n 배열 생성

  let num = 1; // 시작 숫자
  let row = 0; // 행의 시작 인덱스
  let col = 0; // 열의 시작 인덱스

  for (let i = n; i > 0; i -= 2) {
    //나선형 이동 시 길이가 2 씩 줄어들기 때문에 -2
    // 오른쪽으로 이동
    for (let j = 0; j < i; j++) {
      result[row][col] = num++; // (1). [1,2,3,4]
      col++; // (1). 1, 2, 3, 4
    }
    col--; // (1). 3
    row++; // (1). 1

    // 아래로 이동
    for (let j = 0; j < i - 1; j++) {
      //[0][3] 은 4로 채워졌기때문에 i - 1
      result[row][col] = num++; // 시작은 row = 1 col =3. [1][3] = 5 [2][3] = 6 [3][3] = 7
      row++; // 2, 3, 4
    }
    row--; // 3
    col--; // 2

    // 왼쪽으로 이동
    for (let j = 0; j < i - 1; j++) {
      //[3][3]이 7로 채워졌기 때문에 i -1
      result[row][col] = num++; //[3][2] = 8 [3][1] = 9 [3][0] = 10
      col--; // 1, 0, -1
    }
    col++; // 0
    row--; // 2

    // 위로 이동
    for (let j = 0; j < i - 2; j++) {
      // [0][0]rhk [3][0] 은 이미 채워졌기 때문에 i - 2
      result[row][col] = num++; //[2][0] = 11 [1][0] = 12
      row--; // 1, 0
    }
    row++; // 1
    col++; // 1
  }

  return result;
}

//특별한 이차원 배열 2
function ex122(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] !== arr[j][i]) {
        return 0;
      }
    }
  }
  return 1;
}

//정사각형으로 만들기

function ex123(arr) {
  //row, col 길이 확인, 더 긴것 확인해서 0을 어떻게 넣을지 체크
  let row = arr.length; //행
  let col = arr[0].length; //열
  let diff = Math.abs(row - col);

  if (row > col) {
    arr.map((elem) => {
      for (let i = 0; i < diff; i++) {
        elem.push(0);
      }
    });
    return arr;
  } else if (row < col) {
    for (let i = 0; i < diff; i++) {
      let newArr = new Array(col).fill(0);
      arr.push(newArr);
    }
    return arr;
  }
  return arr;
}

//이차열 배열 대각선 순회하기
function ex124(board, k) {
  let result = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) {
        result += board[i][j];
      }
    }
  }
  return result;
}

//옹알이 (1)
function ex125(babbling) {
  let result = 0;
  let can = ["aya", "ye", "woo", "ma"];

  for (let babble of babbling) {
    for (const canWord of can) {
      if (babble.includes(canWord)) {
        babble = babble.replace(canWord, 0);
      }
    }
    babble = babble.replaceAll(0, "");
    if (babble.length === 0) {
      result++;
    }
  }
  return result;
}

//다음에 올 숫자
function ex126(common) {
  //등차
  //a는 공차
  //Fn = a + F(n-1)
  //a = F(n -1) - F(n)

  //등비
  //Fn = a * F(n-1)
  //a = Fn / F(n-1)
  let a = common[2] - common[1];
  let b = common[1] - common[0];
  let divide = a / b;

  if (a - b === 0) {
    return common[common.length - 1] + a;
  }
  return common[common.length - 1] * divide;
}

//연속된 수의 합
function ex127(num, total) {
  let sum = (num * (num + 1)) / 2;
  let firstValue = (total - sum) / num + 1;

  return Array.from({ length: num }, () => firstValue++);
}

//종이 자르기
function ex128(M, N) {
  //가로 먼저 자르고, 4,4 => 3 + 12( 3* 4)
  return M - 1 + M * (N - 1);
}

//문자열 밀기
//A의 길이만큼 밀어볼건데
//한번씩 밀면서 B랑 같은지 체크
//count ++ 할건데
//끝까지 돌아도 B랑 같지 않다면 -1 return
function pushLastWord(word) {
  let lastWord = word.slice(-1);
  let remainWord = word.slice(0, word.length - 1);
  return lastWord + remainWord;
}

function ex129(A, B) {
  const NOT_MATCH = -1;
  const ALREADY_SAME = 0;
  let count = 0;

  if (A === B) return ALREADY_SAME;

  for (let i = 0; i < A.length; i++) {
    count++;
    A = pushLastWord(A);
    if (A === B) {
      return count;
    }
  }

  return NOT_MATCH;
}

//잘라서 배열로 저장하기
function ex130(str, n) {
  const result = [];

  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }
  return result;
}

//7의 개수
function ex131(array) {
  let count = 0;

  array.map((elem) =>
    [...String(elem)].forEach((i) => {
      if (i === "7") count++;
    })
  );

  return count;
}

//문자열 정렬하기 (2)
function ex132(myString) {
  return [...myString]
    .map((str) => str.toLowerCase())
    .sort()
    .join("");
}

//세균 증식
function ex133(n, t) {
  return n * Math.pow(2, t);
}

//제곱수 판별하기
function ex134(n) {
  let sqrt = Math.sqrt(n);

  return Number.isInteger(sqrt) ? 1 : 2;
}

//문자열안에 문자열
function ex135(str1, str2) {
  return str1.indexOf(str2) >= 0 ? 1 : 2;
}
