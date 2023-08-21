//세 개의 구분자
function ex91(myStr) {
  let changeAB = [...myStr]
    .map((str) => {
      if (str === "a" || str === "b") return (str = "c");
      return str;
    })
    .join("")
    .split("c");

  changeAB = changeAB.filter((str) => str !== "");

  if (changeAB.length === 0) return ["EMPTY"];
  return changeAB;
}

//배열의 원소만큼 추가하기
function ex92(arr) {
  let result = [];

  for (const num of arr) {
    for (let i = 0; i < num; i++) {
      result.push(num);
    }
  }
  return result;
}

//빈 배열에 추가, 삭제하기
function ex93(arr, flag) {
  let result = [];
  arr.map((num, idx) => {
    if (flag[idx]) {
      for (let i = 0; i < num * 2; i++) {
        result.push(num);
      }
    } else {
      for (let i = 0; i < num; i++) {
        result.pop();
      }
    }
  });
  return result;
}

//배열 만들기 6
function ex94(arr) {
  let result = [];

  arr.forEach((num, idx) => {
    if (result[result.length - 1] === num) {
      result.pop();
    } else {
      result.push(num);
    }
  });

  return result.length === 0 ? [-1] : result;
}

//무작위로 K개의 수 뽑기
function ex95(arr, k) {
  let result = [];
  let deduplicationArr = [...new Set(arr)];
  for (let i = 0; i < k; i++) {
    if (deduplicationArr[i] === undefined) {
      result.push(-1);
    } else {
      result.push(deduplicationArr[i]);
    }
  }
  return result;
}

//배열의 길이를 2의 거듭제곱으로 만들기
function ex96(arr) {
  let logNumber = Math.log2(arr.length);
  if (Number.isInteger(logNumber)) {
    return arr;
  }
  let zeroCount = Math.pow(2, Math.ceil(logNumber)) - arr.length;
  for (let i = 0; i < zeroCount; i++) {
    arr.push(0);
  }
  return arr;
}

//배열 비교하기
function compareAB(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
}

function ex97(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const sumArr1 = arr1.reduce((prev, curr) => prev + curr);
    const sumArr2 = arr2.reduce((prev, curr) => prev + curr);
    return compareAB(sumArr1, sumArr2);
  }
  return compareAB(arr1.length, arr2.length);
}

//문자열 묶기
function ex98(strArr) {
  const strLengthArr = strArr.map((str) => str.length);
  const lengthObj = {};

  strLengthArr.forEach((num) => {
    if (lengthObj[num] === undefined) {
      lengthObj[num] = 0;
    }
    lengthObj[num] += 1;
  });

  const values = Object.values(lengthObj);
  return Math.max(...values);
}

//배열의 길이에 따라 다른 연산하기
function ex99(arr, n) {
  if (arr.length % 2 === 0) {
    return arr.map((num, idx) => {
      if (idx % 2 !== 0) return num + n;
      return num;
    });
  }
  return arr.map((num, idx) => {
    if (idx % 2 === 0) return num + n;
    return num;
  });
}
