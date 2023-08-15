// 문자열 앞의 n글자

function ex46SubStrString(my_string, n) {
  return my_string.substr(0, n);
}

//

// 접두사인지 확인하기

function ex47IsPrefix(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) return 1;
  return 0;
}

//

// 문자열 뒤집기

// function ex48ReverseString(my_string, s, e) {
//   let revStr = my_string
//     .split("")
//     .slice(s, e + 1)
//     .reverse()
//     .join("");

//   return my_string.slice(0, s) + revStr + my_string.slice(e + 1);
// }

function ex48ReverseString(my_string, s, e) {
  const reverseString = (str) => str.split("").reverse().join("");
  const originalSubstr = my_string.slice(s, e + 1);
  const reversedSubstr = reverseString(originalSubstr);
  const leftPart = my_string.slice(0, s);
  const rightPart = my_string.slice(e + 1);

  return leftPart + reversedSubstr + rightPart;
}

// 세로 읽기

// function ex49ExtStr(my_string, m, c) {
//   let answer = "";

//   for (let i = 0; i < my_string.length; i += m) {
//     answer += my_string[i + c - 1];
//   }
//   return answer;
// }

function ex49ExtStr(my_string, m, c) {
  const extractedCharacters = extractCharacters(my_string, m, c);
  const answer = extractedCharacters.join("");
  return answer;
}

function extractCharacters(str, interval, offset) {
  return str
    .split("")
    .slice(offset - 1)
    .filter((_, index) => index % interval === 0);
}

//

// qr code

function ex50QrCode(q, r, code) {
  let arr = [...code];

  const filteredArr = arr.filter((_, i) => i % q === r);
  return filteredArr.join("");
}

//

// 문자 개수 세기

function ex51CountCharacter(my_string) {
  let arr = new Array(52).fill(0);

  let strArr = [...my_string];

  strArr.map((el, i) => {
    const charcode = my_string.charCodeAt(i);

    if (charcode >= 65 && charcode <= 90) {
      arr[charcode - 65] += 1; // charcode가 대문자일 때
    } else if (charcode >= 97 && charcode <= 122) {
      arr[charcode - 97 + 26] += 1;
    }
  });
  return arr;
}

//

// 배열 만들기 1

function ex52BuildArray(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      arr.push(i);
    }
  }
  return arr;
}

//

// 글자 지우기

function ex53DeleteCharacter(my_string, indices) {
  let arr = [...my_string];
  for (idx of indices) {
    delete arr[idx];
  }
  return arr.join("");
}

//

// 카운트 다운

function ex54CountDown(start, end) {
  let answer = [];
  for (let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
}

//

// 가까운 1 찾기

function ex55FindIndex(arr, idx) {
  let answer;
  for (item of arr) {
    answer = arr.findIndex((el, i) => el === 1 && i >= idx);
  }
  return answer;
}

//

// 리스트 자르기

function ex56SliceArray(n, slicer, num_list) {
  let answer;
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      answer = num_list.slice(0, b + 1);
      break;
    case 2:
      answer = num_list.slice(a);
      break;
    case 3:
      answer = num_list.slice(a, b + 1);
      break;
    case 4:
      const slicedArr = num_list.slice(a, b + 1);
      answer = slicedArr.filter((_, i) => i % c === 0);
      break;
  }
  return answer;
}

//

// 첫 번째로 나오는 음수

function ex57FindIndex(num_list) {
  return num_list.findIndex((el) => el < 0);
}

//

// 배열 만들기 3

function ex58BuildArray(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  const res = arr.slice(a, b + 1);
  const res2 = arr.slice(c, d + 1);
  return [...res, ...res2];
}

//

// 2의 영역

function ex59AreaOfTwo(arr) {
  const indices = arr.reduce((acc, cur, idx) => {
    if (cur === 2) {
      acc.push(idx);
    }
    return acc;
  }, []);
  const slicedArr = arr.slice(indices[0], indices[indices.length - 1] + 1);
  if (slicedArr.length === 0) return [-1];
  return slicedArr;
}

//

// 배열 조각하기

function ex60SliceArray(arr, query) {
  let answer = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) answer = answer.slice(0, query[i] + 1);
    else answer = answer.slice(query[i]);
  }
  return answer;
}

//

// n 번째 원소부터

function ex61FromNthElement(num_list, n) {
  return num_list.slice(n - 1);
}

//
