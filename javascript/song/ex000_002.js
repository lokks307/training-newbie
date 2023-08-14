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
