//수열과 구간 쿼리 4
function ex31(arr, queries) {
  let result = [...arr];

  for (const query of queries) {
    const [s, e, k] = query;
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        result[i] += 1;
      }
    }
  }
  return result;
}

//배열 만들기 2
function ex32(l, r) {
  let result = [];

  for (let i = l; i <= r; i++) {
    if (i % 5 !== 0) {
      continue;
    }
    const individualNumbers = String(i).split("");
    if (individualNumbers.every((num) => num === "0" || num === "5")) {
      result.push(i);
    }
  }
  if (result.length === 0) return [-1];
  return result;
}

//카운트 업
function ex33(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
