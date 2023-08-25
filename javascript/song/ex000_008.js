// 평행 162

//

// 저주의 숫자 163

//

// 외계어 사전 164

//

// 삼각형의 완성조건 (2) 165

//

// 안전지대 166

//

// 숨어있는 숫자의 덧셈 (2)

function ex167(my_string) {
  let filteredList = my_string
    .split(/[a-zA-Z]/g)
    .filter((ch) => Number(ch))
    .map(Number);
  return filteredList.reduce((acc, cur) => acc + cur, 0);
}

//

// 다항식 더하기 168

//

// 최댓값 만들기 (2)

function ex169MakeMaxNumber(numbers) {
  numbers.sort((a, b) => b - a);
  const first = numbers[0];
  const second = numbers[1];
  const last = numbers[numbers.length - 1];
  const prev = numbers[numbers.length - 2];
  return Math.max(first * second, last * prev);
}

//

// 캐릭터의 좌표 170

//

// 직사각형 넓이 구하기 171

//

// 컨트롤 제트 173

//

// 소인수분해 174

//

// 숨어있는 숫자의 덧셈 (1) 175

function ex175(my_string) {
  let filteredList = [...my_string].filter((ch) => Number(ch)).map(Number);
  return filteredList.reduce((acc, cur) => acc + cur, 0);
}

//

// 문자열 정렬하기 (1)

function ex176ArrangeString(my_string) {
  return (filteredList = [...my_string]
    .filter((ch) => Number(ch) || ch === "0")
    .map(Number)
    .sort());
}

//

// 모음 제거 177

//

// 합성수 찾기 180

//
