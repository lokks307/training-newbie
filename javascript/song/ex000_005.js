// 날짜 비교하기

function ex115CompareDate(date1, date2) {
  if (new Date(date1) < new Date(date2)) return 1;
  return 0;
}

//

// 커피 심부름

//

// 그림 확대

//

// 조건에 맞게 수열 변환하기 3

function ex118TransformSeq(arr, k) {
  return arr.map((el) => (k % 2 === 0 ? el + k : el * k));
}

//

// l로 만들기

function ex119MakeItL(myString) {
  return [...myString].map((el) => (el.charCodeAt() < 108 ? "l" : el)).join("");
}

//
