//n의 배수
function ex16(num, n) {
  if (num % n === 0) {
    return 1;
  }
  return 0;
}

//공배수
function ex17(number, n, m) {
  if (number % n === 0 && number % m === 0) {
    return 1;
  }
  return 0;
}
