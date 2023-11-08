//짝수는 싫어요
function ex211_hateEvenNumber(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (num) => num % 2 !== 0
  );
}

//최빈값 구하기
function countDuplicate(list) {
  const obj = {};
  for (const num of list) {
    if (obj[num] === undefined) {
      obj[num] = 0;
    }
    obj[num] += 1;
  }
  return obj;
}

function getMode(obj, maxValue) {
  let result = 0;

  for (const key in obj) {
    if (obj[key] === maxValue) {
      return (result = Number(key));
    }
  }
}

function ex212_maximumFrequency(array) {
  const countObj = countDuplicate(array);
  const value = Object.values(countObj);
  const maxValue = Math.max(...value);
  const mode = getMode(countObj, maxValue);

  const isModeDuplicate = value.filter((el) => el === maxValue).length;

  if (isModeDuplicate > 1) {
    return -1;
  }

  return mode;
}

//중앙값 구하기
function ex213_medianValue(array) {
  array.sort((a, b) => a - b);
  const midIndex = Math.floor(array.length / 2);

  return array[midIndex];
}

//나머지 구하기
function ex214_remainder(num1, num2) {
  return num1 % num2;
}

//배열 두배 만들기
function ex215_makeListDouble(numbers) {
  return numbers.map((num) => num * 2);
}

//분수의 덧셈
function greatestCommonDivisor(a, b) {
  while (a != 0) {
    let c = b % a;
    b = a;
    a = c;
  }
  return b;
}

function ex216_additionFraction(numer1, denom1, numer2, denom2) {
  const newNumer1 = numer1 * denom2;
  const newDenom1 = denom1 * denom2;
  const newNumer2 = numer2 * denom1;
  const newDenom2 = denom2 * denom1;

  const newNumer = newNumer1 + newNumer2;
  const gcd = greatestCommonDivisor(newNumer, newDenom1);

  return [newNumer / gcd, newDenom1 / gcd];
}

//숫자 비교하기
function ex217_compareNumber(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

//두 수의 나눗셈
function ex218_divisionNumber(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

//몫 구하기
function ex219_quotient(num1, num2) {
  return Math.floor(num1 / num2);
}

//두 수의 곱
function ex220_multiply(num1, num2) {
  return num1 * num2;
}

//두 수의 차
function ex221_subtract(num1, num2) {
  return num1 - num2;
}

//두 수의 합
function ex222_sum(num1, num2) {
  return num1 + num2;
}

//머쓱이보다 키 큰 사람
function ex223_tallerThanHim(array, height) {
  return array.filter((num) => num > height).length;
}

//중복된 숫자 개수
function ex224_checkDuplicate(array, n) {
  return array.filter((num) => num === n).length;
}
