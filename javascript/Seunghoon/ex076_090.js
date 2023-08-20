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
