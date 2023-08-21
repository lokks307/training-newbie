//0 떼기
function ex106(n_str) {
  return String(Number(n_str));
}

//두 수의 합
function ex107(a, b) {
  return String(BigInt(a) + BigInt(b));
}

//문자열로 변환
function ex108(n) {
  return String(n);
}

//배열의 원소 삭제하기
function ex109(arr, delete_list) {
  return arr.filter((num) => delete_list.includes(num) === false);
}

//부분 문자열인지 확인하기
function ex110(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}

//부분 문자열
function ex111(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}

//꼬리 문자열
function ex112(str_list, ex) {
  return str_list.filter((str) => str.includes(ex) === false).join("");
}

//정수 찾기
function ex113(num_list, n) {
  return num_list.includes(n) ? 1 : 0;
}

//주사위 게임 1
function isOdd(num) {
  if (num % 2 === 0) return 0;
  return 1;
}

function ex114(a, b) {
  const checkA = isOdd(a);
  const checkB = isOdd(b);
  const oddSum = checkA + checkB;

  switch (oddSum) {
    case 0:
      return noOdd(a, b);
    case 1:
      return oneOdd(a, b);
    case 2:
      return allOdd(a, b);
  }
}

function noOdd(a, b) {
  return Math.abs(a - b);
}

function oneOdd(a, b) {
  return 2 * (a + b);
}

function allOdd(a, b) {
  return a ** 2 + b ** 2;
}

//날짜 비교하기
function getDate(date) {
  const [year, month, day] = date;
  return new Date(`${year}-${month}-${day}`);
}

function ex115(date1, date2) {
  const dateA = getDate(date1);
  const dateB = getDate(date2);

  if (dateA < dateB) return 1;
  return 0;
}

//커피 심부름
function checkPrice(order) {
  //아메 4,500원 라테 5,000원 아무거나 4,500원
  const price = {
    americano: 4500,
    latte: 5000,
    anything: 4500,
  };
  const priceKeys = Object.keys(price);
  for (key of priceKeys) {
    if (order.includes(key)) {
      return price[key];
    }
  }
}

function ex116(order) {
  const changePrice = order.map((item) => checkPrice(item));
  return changePrice.reduce((prev, curr) => prev + curr);
}

//그림 확대
//더 깔끔한 코드가 있을 것 같은데..
function ex117(picture, k) {
  let temp = [];
  const arr = [];
  const result = [];

  for (const pic of picture) {
    const spreadPicture = [...pic];
    for (const spreadPic of spreadPicture) {
      temp.push(spreadPic.repeat(k));
    }
    arr.push(temp.join(""));
    temp = [];
  }

  arr.map((item) => {
    for (let i = 0; i < k; i++) {
      result.push(item);
    }
  });

  return result;
}

//조건에 맞게 수열 변환하기 3
function ex118(arr, k) {
  if (k % 2 === 0) {
    return arr.map((num) => num + k);
  }
  return arr.map((num) => num * k);
}
