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
