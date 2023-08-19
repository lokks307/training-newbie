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
