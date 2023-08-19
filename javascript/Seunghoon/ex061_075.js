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

//n개 간격의 원소들
/** 
function ex65(num_list, n) {
  const result = [];
  for (let i = 0; i < num_list.length; i += n) {
    result.push(num_list[i]);
  }
  return result;
}
*/
// n개 간격은 n의 배수로 볼 수 있음
function ex65(num_list, n) {
  return num_list.filter((_, idx) => idx % n === 0);
}

//홀수 vs 짝수
function ex66(num_list) {
  const odd = num_list.reduce((prev, curr, idx) => {
    if (idx % 2 === 0) return prev + curr;
    return prev;
  }, 0);

  const even = num_list.reduce((prev, curr, idx) => {
    if (idx % 2 !== 0) return prev + curr;
    return prev;
  }, 0);

  if (odd >= even) return odd;
  return even;
}

//5명씩
function ex67(names) {
  return names.filter((_, idx) => idx % 5 === 0);
}

//할 일 목록
function ex68(todo_list, finished) {
  return todo_list.filter((_, idx) => finished[idx] === false);
}

//n보다 커질 때까지 더하기
function ex69(numbers, n) {
  // let result = 0;
  // for(let i = 0; i < numbers.length; i++){
  //     if(result > n) return result
  //     result += numbers[i]
  // }
  // return result

  return numbers.reduce((acc, curr) => {
    if (acc <= n) return acc + curr;
    return acc;
  });
}

//수열과 구간 쿼리 1
function ex70(arr, queries) {
  for (const query of queries) {
    const [start, end] = query;

    for (let i = start; i <= end; i++) {
      arr[i] += 1;
    }
  }
  return arr;
}

//조건에 맞게 수열 변환하기 1
function ex71(arr) {
  return arr.map((elem) => {
    if (elem >= 50 && elem % 2 === 0) {
      return elem / 2;
    } else if (elem < 50 && elem % 2 !== 0) {
      return elem * 2;
    }
    return elem;
  });
}
