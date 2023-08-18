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
