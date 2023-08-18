//수열과 구간 쿼리 4
function ex31(arr, queries) {
  let result = [...arr];

  for (const query of queries) {
    const [s, e, k] = query;
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        result[i] += 1;
      }
    }
  }
  return result;
}

//배열 만들기 2
function ex32(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 !== 0) {
      continue;
    }
    const individualNumbers = String(i).split("");
    if (individualNumbers.every((num) => num === "0" || num === "5")) {
      result.push(i);
    }
  }
  if (result.length === 0) return [-1];
  return result;
}

//카운트 업
function ex33(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

//콜라츠 수열 만들기
function ex34(n) {
  let result = [n];

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  return result;
}

//배열 만들기 4
function ex35(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
}

//간단한 논리 연산
function ex36(x1, x2, x3, x4) {
  let first, second, result;

  const checkValueDown = (x, y) => {
    if (x === false && y === false) {
      return false;
    }
    return true;
  };
  const checkValueUp = (x, y) => {
    if (x === true && y === true) {
      return true;
    }
    return false;
  };

  first = checkValueDown(x1, x2);
  second = checkValueDown(x3, x4);
  result = checkValueUp(first, second);

  return result;
}

//주사위 게임 3

/**
function ex37(a, b, c, d) {
  let [first, second, third, fourth] = [a, b, c, d].sort((a, b) => a - b);

  if (first === second && third === fourth && first === fourth) {
    return 1111 * a;
  }

  if (first !== second && second === third && third === fourth) {
    return (10 * fourth + first) ** 2;
  }

  if (first === second && second === third && third !== fourth) {
    return (10 * first + fourth) ** 2;
  }

  if (first === second && second !== third && third === fourth) {
    return (first + third) * Math.abs(first - third);
  }

  if (first === second && second !== third && third !== fourth) {
    return third * fourth;
  }

  if (first !== second && second === third && third !== fourth) {
    return first * fourth;
  }

  if (first !== second && second !== third && third === fourth) {
    return first * second;
  }

  return first;
}
 */

/*
 주사위게임입니다. 저는 정확하게 이런 순서로 코드를 작성할 거예요
  1. 숫자를 정렬한다
  2. 각 주사위 숫자의 개수를 센다
  3. 주사위 규칙에 따라 점수를 계산한다
    3-1. 모두 같은 경우
    3-2. 모두 다른 경우
    3-3. 2개는 같지만, 나머지가 다른 경우
    
    위 3가지 케이스를 머리속에서 지워보세요.
    남은 케이스는 주사위가 (2🎲🎲, 2🎲🎲)씩 나왔거나, (3🎲🎲🎲,1🎲)씩 나온 경우입니다.
    나머지 케이스를 고려할 필요가 없습니다. 머리가 가벼워지죠?

    3-4. 2개씩 같은 경우
    3-5. 3개만 같은 경우

 A. 주사위게임은 순서가 상관없습니다.
    그러나 숫자를 정렬해두면, 사람의 머리속으로 상상하는 내용이 단순해집니다.
 B. 주의! object의 keys는 String입니다. 나중에 key를 숫자로 쓰려면 Number로 변환해줘야 합니다.
*/

function ex37(a, b, c, d) {
  const numbers = [a, b, c, d];
  numbers.sort((x, y) => x - y); // 처음 나온 값들 정렬 --> 1. 숫자를 정렬한다.

  const diceReport = countDuplicates(numbers); //처음 값들의 중복이 있는지 확인 --> 2. 각 주사위 숫자의 개수를 센다.
  const keys = Object.keys(diceReport); // diceReport = {2: 2, 5: 1, 6: 1} 이라면 -> keys = ['2', '5', '6']

  // 쉬운 케이스를 먼저 처리하고 머리속에서 잊으세요.
  // keys.length는 1에서 4까지밖에 안나온다.
  // keys를 쓰는것. 거기에 keys.length를 활용하려고 생각하는 걸 어떻게 할까?
  switch (keys.length) {
    case 1:
      return sameAll(a); // keys.length 가 1이라는 건 모든 주사위 숫자가 같다는 말.
    case 4:
      return differentAll(numbers); // keys.length 가 4라는 건 모든 주사위 숫자가 다른 것.
    case 3:
      return same211(diceReport); // 3은 2개는 같고, 1개, 1개 다르다.
    case 2: // 2일 때는 2개 - 2개 씩 같거나 3개 - 1개씩 같을 수 있다.
      if (diceReport[a] === 2)
        // diceReport[a] ===3 || diceReport[a] === 1 이렇게 비교할 수도 있는데, 2 한번만 비교하는게 더 간편해요.
        return same22(keys.map(Number));
      return same31(diceReport, keys.map(Number));
  }
}

// arr = [ 2, 2, 5, 6] 이라면
// { 2 : 2, 5: 1, 6: 1 }
function countDuplicates(arr) {
  const countMap = {};

  for (const num of arr) {
    if (countMap[num] === undefined)
      //처음 들어온 값이라면
      countMap[num] = 0; //등록

    countMap[num] += 1; //후 1 늘려줌 , 처음 온 게 아니면 바로 +1
  }

  return countMap;
}

function sameAll(p) {
  return p * 1111;
}

function same31(report, [p, q]) {
  if (report[p] === 1) [p, q] = [q, p]; // p가 1개인 경우, swap(p ,q). 그럼 p가 3개짜리 숫자가 됩니다.

  return Math.pow(10 * p + q, 2); // Math.pow(base, exponent) -- base 밑값에 exponent 주어진 지수 값으로 거듭제곱
}

function same22([p, q]) {
  return (p + q) * Math.abs(p - q);
}

function same211(report) {
  const [q, r] = Object.keys(report)
    .filter((key) => report[key] === 1)
    .map(Number); // filter 메서드 통해 1개인 애들만 살림..
  return q * r;
}

function differentAll(arr) {
  return Math.min(...arr);
}

//글자 이어 붙여 문자열 만들기
function ex38(my_string, index_list) {
  let result = [];

  for (const index of index_list) {
    result.push(my_string[index]);
  }
  return result.join("");
}
