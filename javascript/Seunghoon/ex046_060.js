//문자열의 앞의 n글자
function ex46(my_string, n) {
  return my_string.substring(0, n);
}

//접두사인지 확인하기
function ex47(my_string, is_prefix) {
  const prefix = [];
  for (let i = 1; i <= my_string.length; i++) {
    prefix.push(my_string.substring(0, i));
  }

  if (prefix.includes(is_prefix)) return 1;
  return 0;
}

//문자열 뒤집기
function ex48(my_string, s, e) {
  const myStringArr = [...my_string];
  const reverseString = myStringArr.splice(s, e - s + 1).reverse();
  myStringArr.splice(s, 0, ...reverseString);

  return myStringArr.join("");
}

//세로 읽기
function ex49(my_string, m, c) {
  const arr = [...my_string];
  const splitWithMArr = [];
  const result = [];

  for (let i = 0; i < my_string.length; i += m) {
    splitWithMArr.push(arr.splice(0, m));
  }

  splitWithMArr.forEach((word) => {
    result.push(word[c - 1]);
  });

  return result.join("");
}

//qr code
function ex50(q, r, code) {
  const codeArr = [...code];
  const result = codeArr.filter((code, idx) => idx % q === r).join("");

  return result;
}

//문자 개수 세기
// 65 ~ 90 - A ~ Z, 97 ~ 122 - a ~ z
function ex51(my_string) {
  const result = new Array(52).fill(0);
  const myStringArr = [...my_string];

  myStringArr.map((myString) => {
    const asciiNumber = myString.charCodeAt();
    if (asciiNumber < 91) {
      result[asciiNumber - 65] += 1;
    } else {
      result[asciiNumber - 97 + 26] += 1;
    }
  });
  return result;
}

//배열 만들기 1
function ex52(n, k) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) result.push(i);
  }
  return result;
}

//글자 지우기
function ex53(my_string, indices) {
  let result;
  const myStringArr = [...my_string];

  for (const idx of indices) {
    myStringArr[idx] = 0;
  }

  result = myStringArr.filter((elem) => elem !== 0).join("");
  return result;
}

//카운트 다운
function ex54(start, end) {
  const result = [];
  for (let i = start; i >= end; i--) {
    result.push(i);
  }
  return result;
}

//가까운 1 찾기
function ex55(arr, idx) {
  return arr.findIndex((elem, index) => index >= idx && elem === 1);
}
