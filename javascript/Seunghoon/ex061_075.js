//n 번째 원소부터
function ex61(num_list, n) {
  return num_list.splice(n - 1);
}

//순서 바꾸기
function ex62(num_list, n) {
  const toNumList = num_list.splice(n);
  return [...toNumList, ...num_list];
}
