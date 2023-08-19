//n 번째 원소부터
function ex61(num_list, n) {
  return num_list.splice(n - 1);
}

//순서 바꾸기
function ex62(num_list, n) {
  const toNumList = num_list.splice(n);
  return [...toNumList, ...num_list];
}

//왼쪽 오른쪽
function ex63(str_list) {
  const findLIndex = str_list.indexOf("l");
  const findRIndex = str_list.indexOf("r");

  if ((findLIndex >= 0 && findLIndex < findRIndex) || findRIndex === -1) {
    return str_list.splice(0, findLIndex);
  } else if (
    (findRIndex >= 0 && findLIndex > findRIndex) ||
    findLIndex === -1
  ) {
    return str_list.splice(findRIndex + 1);
  }
  return [];
}

//n 번째 원소까지
function ex64(num_list, n) {
  return num_list.splice(0, n);
}
