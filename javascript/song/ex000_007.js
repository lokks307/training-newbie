<<<<<<< HEAD
// 문제 순서 바뀌어서 풀었을 때 푼 문제는 건너 뛰고 풀었습니다:)
=======
// 문제 순서 바뀌어서 풀었을 때 푼 문제들은 건너 뛰고 풀었습니다 :)
>>>>>>> feature/day11

// 암호 해독

function ex148CodeBreaking(cipher, code) {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

//

// 369게임

function ex149Game369(order) {
  let count = 0;
  const orderList = [...String(order)];
<<<<<<< HEAD
  const filteredList = orderList.filter(
    (num) => num === "3" || num === "6" || num === "9"
  );
  return filteredList.length;
=======
  for (let num of orderList) {
    if (num === "3" || num === "6" || num === "9") {
      count++;
    }
  }
  return count;
>>>>>>> feature/day11
}

//

// 중복된 문자 제거

<<<<<<< HEAD
function ex152RemoveDupCh(my_string) {
=======
function ex152(my_string) {
>>>>>>> feature/day11
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

<<<<<<< HEAD
// Set 이용해서 풀기
function ex152RemoveDupCh(my_string) {
=======
// Set 이용해서

function ex152a(my_string) {
>>>>>>> feature/day11
  return [...new Set(my_string)].join("");
}

//
<<<<<<< HEAD

// k의 개수

function ex153NumberOfK(i, j, k) {
  let numList = [
    ...Array.from({ length: j - i + 1 }, (_, idx) => idx + i).join(""),
  ].map(Number);
  return numList.filter((num) => num === k).length;
}

//

// A로 B 만들기

function ex154MakeBWithA(before, after) {
  let befSort = [...before].sort().join("");
  let aftSort = [...after].sort().join("");

  return befSort === aftSort ? 1 : 0;
}

//

// 이진수 만들기

function ex155MakeBinaryNumber(bin1, bin2) {
  const dec1 = parseInt(bin1, 2);
  const dec2 = parseInt(bin2, 2);

  return (dec1 + dec2).toString(2);
}

//

// 치킨 쿠폰

function ex156ChickenCoupon(chicken) {
  let coupon = chicken;
  let service = 0;

  while (coupon >= 10) {
    service += Math.floor(coupon / 10);
    coupon = (coupon % 10) + Math.floor(coupon / 10);
  }
  return service;
}

//

// 로그인 성공?

function ex157IsLoginSuceed(id_pw, db) {
  let answer = "fail";
  const [id, pw] = id_pw;

  db.map((list) => {
    if (list[0] === id && list[1] === pw) {
      answer = "login";
    }
    if (list[0] === id && list[1] !== pw) {
      answer = "wrong pw";
    }
  });
  return answer;
}

//

// 등수 매기기

function ex158Ranking(score) {
  let averageList = score.map((list) => (list[0] + list[1]) / 2);
  let sortedList = [...averageList].sort((a, b) => b - a);
  return averageList.map((num) => sortedList.indexOf(num) + 1);
}

//

// 특이한 정렬

function ex159UnusualSorting(numlist, n) {
  return numlist
    .sort((a, b) => b - a)
    .sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
}

//

// 유한소수 판별하기

function ex160(a, b) {
  let MaxDivision = 1;
  for (let i = 2; i <= b; i++) {
    if (a % i === 0 && b % i === 0) MaxDivision = i;
  }

  b /= MaxDivision;

  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

//

// 겹치는 선분의 길이

// 고민해봐도 모르겠습니다..ㅠㅠ

//
=======
>>>>>>> feature/day11
