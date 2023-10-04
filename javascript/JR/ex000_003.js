// 31.문자 개수 세기
function ex31(my_string) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = Array(52).fill(0);
  for (let one of my_string) {
    const idx = alphabet.findIndex((item) => item === one);
    if (idx > 0) {
      result[idx] += 1;
    }
  }
  return result;
  // 음 해당 풀이가 반은 맞고 반은 틀리다는데 제가 접근한 방법이 테스트 코드를 모두 통과하지 못하는지 잘 모르겠습니다.
}

// 32.배열 만들기 1
function ex32(n, k) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) answer.push(i);
  }
  return answer;
}

// 33.글자 지우기
function ex33(my_string, indices) {
  const myArr = my_string.split("");
  const includeCheck = myArr.map((item, idx) =>
    indices.includes(idx) ? 0 : item
  );
  return includeCheck.filter((one) => one !== 0).join("");
}

// 34.카운트 다운
function ex34(start, end_num) {
  let answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}

// 35.가까운 1 찾기
function ex35(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    const current = arr[i];
    if (current === 1) return i;
  }
  return -1;
}

// 36.리스트 자르기
function ex36(n, slicer, num_list) {
  const [a, b, c] = slicer;
  let result;
  switch (n) {
    case 1: {
      result = num_list.slice(0, b + 1);
      break;
    }
    case 2: {
      result = num_list.slice(a, num_list.length);
      break;
    }
    case 3: {
      result = num_list.slice(a, b + 1);
      break;
    }
    case 4: {
      const currentStr = num_list.slice(a, b + 1);
      result = currentStr.filter((item, i) => i % c === 0);
      break;
    }
    default: {
      break;
    }
  }

  return result;
}

// 37.첫 번째로 나오는 음수
function ex37(num_list) {
  const minusIndex = num_list.findIndex((num) => num < 0);
  return minusIndex;
}

// 38.2의 영역
function ex38(arr) {
  const firstIdx = arr.indexOf(2);
  const lastIdx = arr.lastIndexOf(2);

  return firstIdx + lastIdx < 0 ? [-1] : arr.slice(firstIdx, lastIdx + 1);
}

// 39.배열 조각하기
function ex39(arr, query) {
  query.map((item, idx) => {
    if (idx % 2 === 0) {
      arr.splice(item + 1, arr.length);
    } else arr.splice(0, item);
  });
  return arr;
}

// 40.n 번째 원소부터
function ex40(num_list, n) {
  const newNumList = num_list.splice(n - 1, num_list.length);
  return newNumList;
}

// 41.순서 바꾸기
function ex41(num_list, n) {
  return [...num_list.slice(n, num_list.length + 1), ...num_list.slice(0, n)];
}

// 42.왼쪽 오른쪽
function ex42(str_list) {
  const lIdx = str_list.findIndex((item) => item === "l");
  const rIdx = str_list.findIndex((item) => item === "r");
  if (lIdx + rIdx < 0) return [];
  if (str_list.length === lIdx + 1 || str_list.length === rIdx + 1) return [];
  if (lIdx < rIdx) return str_list.splice(0, lIdx);
  return str_list.splice(rIdx + 1, str_list.length + 1);
  // 둘 다 없을 경우, str_list이 l 혹은 r 값 하나로 이루어진 1칸짜리 배열일 때를 예외처리 했고
  // 추가 예외사항이 없다고 판단되어 문제의 요구사항대로 코딩을 했지만 실패케이스가 있음
}

// 43.n 번째 원소까지
function ex43(num_list, n) {
  return num_list.splice(0, n);
}

// 44.홀수 vs 짝수
function ex44(num_list) {
  let even = 0;
  let odd = 0;
  num_list.map((item, idx) => {
    if ((idx + 1) % 2 === 0) {
      even += item;
    } else odd += item;
  });

  if (even > odd) return even;
  return odd;
}

// 45.5명씩
function ex45(names) {
  return names.filter((name, idx) => idx % 5 === 0);
}
