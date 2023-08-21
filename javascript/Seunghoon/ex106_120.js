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
