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
