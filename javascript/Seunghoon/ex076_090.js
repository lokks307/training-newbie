//대문자로 바꾸기
function ex76(myString) {
  return myString.toUpperCase();
}

//소문자로 바꾸기
function ex77(myString) {
  return myString.toLowerCase();
}

//배열에서 문자열 대소문자 변환하기
function ex78(strArr) {
  return strArr.map((str, idx) => {
    if (idx % 2 === 0) return str.toLowerCase();
    return str.toUpperCase();
  });
}

//A 강조하기
function ex79(myString) {
  let myStringArr = [...myString];
  return myStringArr
    .map((string, idx) => {
      string = string.toLowerCase();
      if (string === "a") return string.toUpperCase();
      return string.toLowerCase();
    })
    .join("");
}

//특정한 문자를 대문자로 바꾸기
function ex80(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

//특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function ex81(myString, pat) {
  const lastIndex = myString.lastIndexOf(pat);
  return myString.slice(0, lastIndex) + pat;
}

//문자열이 몇 번 등장하는지 세기
function ex82(myString, pat) {
  let count = 0;
  let findIndex = myString.indexOf(pat);

  while (findIndex !== -1) {
    count += 1;
    findIndex = myString.indexOf(pat, findIndex + 1);
  }

  return count;
}
