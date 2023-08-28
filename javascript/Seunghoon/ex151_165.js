//가까운 수
function findNearestNum(array, n) {
  array.sort((a, b) => a - b);
  const list = array.map((num) => Math.abs(num - n));
  const nearest = Math.min(...list);
  const idx = list.indexOf(nearest);

  return array[idx];
}

function ex151_nearestNumber(array, n) {
  const result = findNearestNum(array, n);

  return result;
}

//삼각형의 완성조건 (1)
function isSatisfyTriangle(sides) {
  sides.sort((a, b) => a - b);
  const [a, b, c] = sides;

  if (c < a + b) return 1;
  return 2;
}

function ex152_triangleCondition(sides) {
  const result = isSatisfyTriangle(sides);

  return result;
}

//중복된 문자 제거
function ex153_removeDuplicateString(myString) {
  return [...new Set(myString)].join("");
}

//k의 개수
function splitNumber(start, end) {
  let str = "";
  for (let i = start; i <= end; i++) {
    str += i;
  }
  return [...str];
}

function ex154_countOfK(i, j, k) {
  const numList = splitNumber(i, j);
  const result = numList.filter((num) => Number(num) === k).length;

  return result;
}

//A로 B만들기
function changeOrder(before, after) {
  let sortBefore = [...before].sort().join("");
  let sortAfter = [...after].sort().join("");

  return sortBefore === sortAfter ? 1 : 0;
}

function ex155_makeBfromA(before, after) {
  const result = changeOrder(before, after);

  return result;
}

//이진수 더하기
function ex156_sumBinary(bin1, bin2) {
  bin1 = parseInt(bin1, 2);
  bin2 = parseInt(bin2, 2);
  const result = (bin1 + bin2).toString(2);

  return result;
}

//치킨 쿠폰
function maxServiceChicken(coupon) {
  let sum = 0;

  while (coupon >= 10) {
    const serviceChicken = Math.floor(coupon / 10);
    sum += serviceChicken;
    coupon = (coupon % 10) + serviceChicken;
  }
  return sum;
}

function ex157_chickenCoupon(chicken) {
  const result = maxServiceChicken(chicken);

  return result;
}

//로그인 성공?
function checkDbIdPw(id, pw, dbList) {
  for (const data of dbList) {
    const [dbId, dbPw] = data;
    if (id === dbId && pw === dbPw) {
      return "login";
    } else if (id === dbId && pw !== dbPw) {
      return "wrong pw";
    }
  }
  return "fail";
}

function ex158_successLogin(id_pw, db) {
  const [id, pw] = id_pw;
  const result = checkDbIdPw(id, pw, db);

  return result;
}

//등수 매기기
function rankAverageScore(score) {
  const averageScore = score.map(([eng, math]) => {
    return (eng + math) / 2;
  });
  const sortav = [...averageScore].sort((a, b) => b - a);

  return averageScore.map((aver) => {
    return sortav.indexOf(aver) + 1;
  });
}

function ex159_rankingScore(score) {
  const result = rankAverageScore(score);

  return result;
}

//특이한 정렬
function sortingByN(numList, n) {
  return numList.sort((a, b) => {
    if (Math.abs(a - n) - Math.abs(b - n) === 0) {
      return b - a;
    }
    return Math.abs(a - n) - Math.abs(b - n);
  });
}

function ex160_unusualSorting(numlist, n) {
  const result = sortingByN(numlist, n);

  return result;
}

//유한소수 판별하기
function ex161_finiteNumber(a, b) {
  const 최대공약수 = greatestCommonDivisor(a, b);
  const 기약분수 = b / 최대공약수;
  const primeFactor = intFactorization(기약분수);

  const result = primeFactor.filter((num) => num !== 2 && num !== 5);

  return result.length > 0 ? 2 : 1;
}

function greatestCommonDivisor(a, b) {
  while (a != 0) {
    let c = b % a;
    b = a;
    a = c;
  }
  return b;
}

function intFactorization(num) {
  let divide = 2;
  let result = [];

  while (num >= 2) {
    if (num % divide === 0) {
      result.push(divide);
      num = num / divide;
    } else {
      divide += 1;
    }
  }

  return [...new Set(result)];
}

//겹치는 선분의 길이
//풀이가 생각나지 않아 다른사람의 풀이를 참고했습니다..
function findOverlapLine(lines) {
  let result = 0;
  const [firstStart, firstEnd] = lines[0];
  const [secondStart, secondEnd] = lines[1];
  const [thirdStart, thirdEnd] = lines[2];

  for (let i = -100; i < 100; i++) {
    //제한사항에 주어진 길이 -100 ~ 100
    //돌때마다 count는 다시 0으로 시작
    let count = 0;

    //i가 line안에 들어 있다면 count를 하나씩 올려준다.
    if (firstStart <= i && i < firstEnd) count += 1;
    if (secondStart <= i && i < secondEnd) count += 1;
    if (thirdStart <= i && i < thirdEnd) count += 1;
    // 그 count가 2 이상이라면, 두 선분이 겹친 곳이기에 result를 1 올려주게 된다.
    if (count > 1) result += 1;
  }
  return result;
}

function ex162_overlapLineLength(lines) {
  const result = findOverlapLine(lines);
  return result;
}

//평행
function slope(a, b) {
  return Math.abs(b[1] - a[1]) / Math.abs(b[0] - a[0]);
}

function isParallel(dots) {
  const slopes = [
    slope(dots[0], dots[1]),
    slope(dots[0], dots[2]),
    slope(dots[0], dots[3]),
    slope(dots[1], dots[2]),
    slope(dots[1], dots[3]),
    slope(dots[2], dots[3]),
  ];
  if (
    slopes[0] === slopes[5] ||
    slopes[1] === slopes[4] ||
    slopes[2] === slopes[3]
  ) {
    return 1;
  }
  return 0;
}

function ex163_parallel(dots) {
  const result = isParallel(dots);

  return result;
}

//저주의 숫자 3
function exceptThree(numList) {
  return numList.filter(
    (num) => !String(num).split("").includes("3") && num % 3 !== 0
  );
}

function ex164_curseNumberThree(n) {
  const numList = Array.from({ length: 185 }, (_, i) => i + 1);
  const exceptThreeList = exceptThree(numList);

  return exceptThreeList[n - 1];
}

//외계어 사전
function isIncludeDic(word, spell) {
  word = [...word].sort();
  spell.sort();

  if (
    word.every((str, i) => str === spell[i]) &&
    word.length === spell.length
  ) {
    return 1;
  }
  return 2;
}

function ex165_alienDictionary(spell, dic) {
  const list = dic.map((str) => {
    return isIncludeDic(str, spell);
  });

  if (list.includes(1)) return 1;
  return 2;
}
