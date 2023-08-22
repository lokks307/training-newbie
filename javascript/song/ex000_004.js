// 문자열 묶기

function ex98(strArr) {
  let lenArr = strArr.map((el) => el.length);
  let countMap = {};

  for (let num of lenArr) {
    if (countMap[num] === undefined) countMap[num] = 0;
    countMap[num] += 1;
  }

  let countArr = Object.values(countMap);
  return Math.max(...countArr);
}

//
