//양꼬치
function ex196_calcPrice(n, k) {
  const lambSkewer = 12000 * n;
  const drink = 2000 * k;
  const service = Math.floor(n / 10) * 2000;

  return lambSkewer + drink - service;
}

//각도기
function ex197_compass(angle) {
  if (angle > 0 && angle < 90) return 1;
  if (angle === 90) return 2;
  if (angle > 90 && angle < 180) return 3;
  return 4;
}

//특정 문자 제거하기
function ex198_removeSpecificString(myString, letter) {
  return [...myString].filter((str) => str !== letter).join("");
}

//문자 반복 출력하기
function ex199_printRepeatString(myString, n) {
  return [...myString].map((str) => str.repeat(n)).join("");
}

//짝수 홀수 개수
function ex200_countOddEven(numList) {
  const evenCount = numList.filter((num) => num % 2 === 0).length;
  const oddCount = numList.filter((num) => num % 2 !== 0).length;

  return [evenCount, oddCount];
}

//직각삼각형 출력하기 ex201
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= input; i++) {
    console.log("*".repeat(i));
  }
});

//문자열 뒤집기
function ex202_reverseString(myString) {
  return [...myString].reverse().join("");
}

//배열 뒤집기
function ex203_reverseList(numList) {
  return numList.reverse();
}

//나이 출력
function ex204_printAge(age) {
  const standard = 2022;

  return standard - age + 1;
}

//아이스 아메리카노
function ex205_americano(money) {
  const buyAmericano = Math.floor(money / 5500);
  const change = money % 5500;

  return [buyAmericano, change];
}

//옷가게 할인 받기
function checkDiscountRate(price) {
  let discountRate = 1;
  if (price >= 500000) discountRate = 0.8;
  else if (price >= 300000) discountRate = 0.9;
  else if (price >= 100000) discountRate = 0.95;

  return discountRate;
}

function ex206_getDiscount(price) {
  const discount = checkDiscountRate(price);

  return Math.floor(price * discount);
}

//배열의 평균값
function ex207_averageOfList(numbers) {
  const result = numbers.reduce((prev, curr) => prev + curr) / numbers.length;

  return result;
}

//피자 나눠 먹기 (3)
function ex208_sharePizza(slice, n) {
  if (n % slice !== 0) {
    return Math.floor(n / slice) + 1;
  }
  return Math.floor(n / slice);
}

//피자 나눠 먹기 (2)
function minPizza(pizza, n) {
  let count = 1;

  while (pizza % n !== 0) {
    count++;
    pizza += 6;
  }

  return count;
}

function ex209_sharePizza(n) {
  let pizza = 6;
  const result = minPizza(pizza, n);

  return result;
}

//피자 나눠 먹기 (1)
function ex210_sharePizza(n) {
  let pizza = 7;

  while (Math.floor(pizza / n) === 0) {
    pizza += 7;
  }

  return Math.floor(pizza / 7);
}
