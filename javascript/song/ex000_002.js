// 문자열 앞의 n글자

function ex46SubStrString(my_string, n) {
  return my_string.substr(0, n);
}

//

// 접두사인지 확인하기

function ex47IsPrefix(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) return 1;
  return 0;
}

//

// 문자열 뒤집기

// function ex48ReverseString(my_string, s, e) {
//   let revStr = my_string
//     .split("")
//     .slice(s, e + 1)
//     .reverse()
//     .join("");

//   return my_string.slice(0, s) + revStr + my_string.slice(e + 1);
// }

function ex48ReverseString(my_string, s, e) {
  const reverseString = (str) => str.split("").reverse().join("");
  const originalSubstr = my_string.slice(s, e + 1);
  const reversedSubstr = reverseString(originalSubstr);
  const leftPart = my_string.slice(0, s);
  const rightPart = my_string.slice(e + 1);

  return leftPart + reversedSubstr + rightPart;
}

// 세로 읽기

// function ex49ExtStr(my_string, m, c) {
//   let answer = "";

//   for (let i = 0; i < my_string.length; i += m) {
//     answer += my_string[i + c - 1];
//   }
//   return answer;
// }

function ex49ExtStr(my_string, m, c) {
  const extractedCharacters = extractCharacters(my_string, m, c);
  const answer = extractedCharacters.join("");
  return answer;
}

function extractCharacters(str, interval, offset) {
  return str
    .split("")
    .slice(offset - 1)
    .filter((_, index) => index % interval === 0);
}

//

// qr code

function ex50QrCode(q, r, code) {
  let arr = [...code];

  const filteredCharacters = arr.filter((_, i) => i % q === r);
  return filteredCharacters.join("");
}

//

// 문자 개수 세기

// function ex51CountCharacter(my_string) {
//   let arr = new Array(52).fill(0);

//   let strArr = [...my_string];

//   strArr.map((el, i) => {
//     const charcode = my_string.charCodeAt(i);

//     if (charcode >= 65 && charcode <= 90) {
//       arr[charcode - 65] += 1; // charcode가 대문자일 때
//     } else if (charcode >= 97 && charcode <= 122) {
//       arr[charcode - 97 + 26] += 1;
//     }
//   });
//   return arr;
// }

// 하드코딩된 숫자들을 상수로 지정하기

function ex51CountCharacter(my_string) {
  const char_A = 65;
  const char_Z = 90;
  const char_a = 97;
  const char_z = 122;
  const _atoz_ = 26;

  let arr = new Array(_atoz_ * 2).fill(0);
  let strArr = [...my_string];

  strArr.map((el, i) => {
    const charcode = my_string.charCodeAt(i);

    if (charcode >= char_A && charcode <= char_Z) {
      arr[charcode - char_A] += 1;
    } else if (charcode >= char_a && charcode <= char_z) {
      arr[charcode - char_a + _atoz_] += 1;
    }
  });

  return arr;
}

//

// 배열 만들기 1

function ex52BuildArray(n, k) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      arr.push(i);
    }
  }
  return arr;
}

//

// 글자 지우기

function ex53DeleteCharacter(my_string, indices) {
  let arr = [...my_string];
  for (idx of indices) {
    delete arr[idx];
  }
  return arr.join("");
}

//

// 카운트 다운

function ex54CountDown(start, end) {
  let answer = [];
  for (let i = start; i >= end; i--) {
    answer.push(i);
  }
  return answer;
}

//

// 가까운 1 찾기

// function solution(arr, idx) {
//   let answer;
//   answer = arr.findIndex((el, i) => el === 1 && i >= idx);

//   return answer;
// }

function ex55FindIndex(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}

//

// 리스트 자르기

function ex56SliceArray(n, slicer, num_list) {
  let answer;
  const [a, b, c] = slicer;
  switch (n) {
    case 1:
      answer = num_list.slice(0, b + 1);
      break;
    case 2:
      answer = num_list.slice(a);
      break;
    case 3:
      answer = num_list.slice(a, b + 1);
      break;
    case 4:
      const slicedArr = num_list.slice(a, b + 1);
      answer = slicedArr.filter((_, i) => i % c === 0);
      break;
  }
  return answer;
}

//

// 첫 번째로 나오는 음수

function ex57FindIndex(num_list) {
  return num_list.findIndex((el) => el < 0);
}

//

// 배열 만들기 3

function ex58BuildArray(arr, intervals) {
  const [[a, b], [c, d]] = intervals;

  const res = arr.slice(a, b + 1);
  const res2 = arr.slice(c, d + 1);
  return [...res, ...res2];
}

//

// 2의 영역

function ex59AreaOfTwo(arr) {
  const indices = arr.reduce((acc, cur, idx) => {
    if (cur === 2) {
      acc.push(idx);
    }
    return acc;
  }, []);
  if (indices.length === 0) return [-1];
  const slicedArr = arr.slice(indices[0], indices[indices.length - 1] + 1);
  return slicedArr;
}

function ex59BoundaryOf2(arr) {
  var answer = [];
  const idxList = getAllIndexes(arr, 2);
  const len = idxList.length;
  switch (len) {
    case 0:
      return [-1];
    case 1:
      return [2];
    case 2:
    default: // 앞에 정의한 case 이외의 경우일 때
      var last = idxList[len - 1] + 1;
      var start = idxList[0];
      return arr.slice(start, last);
  }
}

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}
//

// 배열 조각하기

// function ex60SliceArray(arr, query) {
//   let answer = arr;
//   for (let i = 0; i < query.length; i++) {
//     if (i % 2 === 0) answer = answer.slice(0, query[i] + 1);
//     else answer = answer.slice(query[i]);
//   }
//   return answer;
// }

function ex60SliceArray(arr, query) {
  for (let i = 0; i < query.length; i++) {
    const start = i % 2 === 0 ? 0 : query[i]; // start index
    const end = i % 2 === 0 ? query[i] + 1 : undefined; // end index
    arr = arr.slice(start, end);
  }
  return arr;
}

//

// n 번째 원소부터

function ex61FromNthElement(num_list, n) {
  return num_list.slice(n - 1);
}

//

// 순서 바꾸기

// function ex62SwapOrder(num_list, n) {
//   return num_list.slice(n).concat(num_list.slice(0, n));
// }

function ex62SwapOrder(num_list, n) {
  const part1 = num_list.slice(n);
  const part2 = num_list.slice(0, n);
  return [...part1, ...part2];
}

//

// 왼쪽 오른쪽

// function ex63LeftRight(str_list) {
//   const idx = str_list.findIndex((el) => el === "l" || el === "r");

//   if (idx === -1) {
//     return [];
//   } else if (str_list[idx] === "l") {
//     return str_list.slice(0, idx);
//   } else {
//     return str_list.slice(idx + 1);
//   }
// }

function ex63LeftRight(str_list) {
  const idx = str_list.findIndex((el) => el === "l" || el === "r"); // str_list에서 "l"이거나 "r"인 원소의 index를 구한다
  if (idx === -1) {
    // "l" 과 "r" 이 다 없다면 빈 배열 return
    return [];
  }
  const isL = str_list[idx] === "l";
  const start = isL ? 0 : idx + 1; // "l"이라면 0부터 시작, 아니면 idx + 1부터 시작
  const end = isL ? idx : undefined; // "r"이라면 idx가 end 위치
  return str_list.slice(start, end); // start부터 end까지 slice 실행
}

//

// n 번째 원소까지

function ex64ToNthElement(num_list, n) {
  return num_list.slice(0, n);
}

//

// n개 간격의 원소들

function ex65FilteredLIst(num_list, n) {
  return num_list.filter((_, i) => i % n === 0);
}

//

// 홀수 vs 짝수

function ex66OddVersusEven(num_list) {
  const oddSum = num_list
    .filter((_, i) => i % 2 !== 0)
    .reduce((acc, cur) => acc + cur, 0);
  const evenSum = num_list
    .filter((_, i) => i % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);

  if (oddSum >= evenSum) return oddSum;
  return evenSum;
}

//

// 5명씩

function ex67FilterFirst(names) {
  return names.filter((_, i) => i % 5 === 0);
}

//

// 할 일 목록

function ex68ToDoList(todo_list, finished) {
  return todo_list.filter((_, i) => finished[i] === false);
}

//

// n보다 커질 때까지 더하기

function ex69AddUntilLarger(numbers, n) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    if (sum > n) break;
  }

  return sum;
}

//

// 수열과 구간 쿼리 1

function ex70SeqAndQuery(arr, queries) {
  for (const [s, e] of queries) {
    for (let i = s; i <= e; i++) {
      arr[i]++;
    }
  }
  return arr;
}

//

// 조건에 맞게 수열 변환하기 1

// function ex71ConvertSeq(arr) {
//   return arr.map((el) => {
//     if (el >= 50 && el % 2 === 0) {
//       return el / 2;
//     } else if (el < 50 && el % 2 !== 0) {
//       return el * 2;
//     }
//     return el;
//   });
// }

function transformElement(el) {
  if (el >= 50 && el % 2 === 0) {
    return el / 2;
  } else if (el < 50 && el % 2 !== 0) {
    return el * 2;
  }
  return el;
}
function ex71ConvertSeq(arr) {
  return arr.map(transformElement);
}
//

// 조건에 맞게 수열 변환하기 2

function ex72ConvertSeq(arr) {
  let count = 0;

  while (
    !arr.every((el) => (el > 50 && el % 2 !== 0) || (el < 50 && el % 2 === 0))
  ) {
    arr = arr.map((el) => {
      if (el >= 50 && el % 2 === 0) {
        return el / 2;
      } else if (el < 50 && el % 2 !== 0) {
        return el * 2 + 1;
      }
      return el;
    });
    count++;
  }
  return count;
}

//

// 1로 만들기

function ex73CountForOne(num_list) {
  let count = 0;

  for (el of num_list) {
    while (el !== 1) {
      if (el % 2 === 0) {
        el /= 2;
      } else {
        el -= 1;
        el /= 2;
      }
      count++;
    }
  }
  return count;
}

//

// 길이에 따른 연산

function ex74ReduceArr(num_list) {
  let sum = 0;
  if (num_list.length >= 11) {
    sum = num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    sum = num_list.reduce((acc, cur) => acc * cur, 1);
  }

  return sum;
}

//

// 원하는 문자열 찾기

function ex75FindString(myString, pat) {
  if (myString.toUpperCase().includes(pat.toUpperCase())) return 1;
  return 0;
}

//

// 대문자로 바꾸기

function ex76ReplaceWithCap(myString) {
  return myString.toUpperCase();
}

//

// 소문자로 바꾸기

function ex77ReplaceWithLow(myString) {
  return myString.toLowerCase();
}

//

// 배열에서 대소문자 변환하기

function ex78ConvertAlp(strArr) {
  return strArr.map((el, i) => {
    if (i % 2 === 0) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  });
}

//

// 두 수의 곱

function ex79Multiply(num1, num2) {
  return num1 * num2;
}

//

// 숫자 비교하기

function ex80CompareNum(num1, num2) {
  if (num1 === num2) return 1;
  return -1;
}

//

// 몫 구하기

function ex81GetQuotient(num1, num2) {
  return Math.floor(num1 / num2);
}

//

// 두 수의 차

function ex82GetDifference(num1, num2) {
  return num1 - num2;
}

//

// 나머지 구하기

function ex83GetRemainder(num1, num2) {
  return num1 % num2;
}

//

// 나이 출력

function exGetYear(age) {
  return 2022 - age + 1;
}

//

// 두 수의 합

function ex85GetSum(num1, num2) {
  return num1 + num2;
}

//

// 두 수의 나눗셈

function ex86Division(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

//

// 각도기

// function ex87Angle(angle) {
//   if (angle < 90) {
//     return 1;
//   } else if (angle === 90) {
//     return 2;
//   } else if (angle < 180) {
//     return 3;
//   } else {
//     return 4;
//   }
// }

function solution(angle) {
  var answer = 0;
  return ex87Angle(angle);
}

function ex87Angle(angle) {
  const 각도기 = { 예각: 1, 직각: 2, 둔각: 3, 평각: 4, 모름: 5 };

  if (angle < 90) return 각도기.예각;
  if (angle === 90) return 각도기.직각;
  if (angle < 180) return 각도기.둔각;
  if (angle === 180) return 각도기.평각;

  return 각도기.모름;
}

//

// 짝수의 합

function ex88SumOfEvenNums(n) {
  let sum = 0;
  for (let i = 0; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

//

// 배열의 평균값

function ex89GetAverage(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

//

// 양꼬치

// function ex90GetTotalPrice(n, k) {
//   return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
// }

function ex90GetTotalPrice(n, k) {
  const 양꼬치 = 12000; // 양꼬치 1인분 가격
  const drink = 2000; // 음료 한 개 가격
  const serviceCount = Math.floor(n / 10); // 할인받는 금액

  return n * 양꼬치 + (k - serviceCount) * drink; // 총 결제 금액
}

//

// 편지

function ex91GetLength(message) {
  return 2 * message.length;
}

//

// 피자 나눠 먹기 (1)

function ex92SharePizza(n) {
  let quotient = Math.floor(n / 7);
  if (n % 7 >= 1) return quotient + 1;
  return quotient;
}

//

// 배열 자르기

function ex93SliceArray(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

//

// 배열 뒤집기

function ex94ReverseArray(num_list) {
  return num_list.reverse();
}

//

// 최댓값 만들기 (1)

function ex95GetMaxNum(numbers) {
  let sortedArr = numbers.sort((a, b) => b - a);
  return sortedArr[0] * sortedArr[1];
}

//

// 순서쌍의 개수

function ex96CountDivisor(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
}

//

// 삼각형의 완성조건 (1)

// function ex97IsTriangle(sides) {
//   let sortedArr = sides.sort();
//   let MaxLength = sortedArr[2];
//   let MinLength = sortedArr[0];

//   if (MaxLength < MinLength + sortedArr[1]) return 1;
//   return 2;
// }

function ex000IsTriangle(sides) {
  if (sides.length !== 3) {
    return answerBuilder(false);
  }

  const [a, b, c] = sides.sort((x, y) => x - y);

  if (c < a + b) {
    return answerBuilder(true);
  }
  return answerBuilder(false);
}

function answerBuilder(b) {
  return b ? 1 : 2;
}

//

// 문자열 뒤집기

function ex98ReverseString(my_string) {
  return [...my_string].reverse().join("");
}

//

// 피자 나눠 먹기 (3)

function ex99SharePizza(slice, n) {
  return Math.ceil(n / slice);
}

//

// 배열 두 배 만들기

function ex100MultiplyByTwo(numbers) {
  return numbers.map((ch) => ch * 2); // element가 숫자라면 el 대신 n 쓰기!
}

//

// 배열 원소의 길이

function ex101GetLengthOfElement(strlist) {
  return strlist.map((str) => str.length); // el 대신 str!
}

//

// 옷가게 할인 받기

function ex102GetDiscount(price) {
  const Discount20 = Math.floor(price * 0.8);
  const Discount10 = Math.floor(price * 0.9);
  const Discount5 = Math.floor(price * 0.95);

  if (price >= 500000) {
    return Discount20;
  }
  if (price >= 300000) {
    return Discount10;
  }
  if (price >= 100000) {
    return Discount5;
  }
  return price;
}

//

// 가까운 수

function ex103GetCloseNum(array, n) {
  array.sort((a, b) => a - b);
  console.log(array);

  let difArr = [];

  for (let i = 0; i < array.length; i++) {
    difArr.push(Math.abs(n - array[i]));
  }
  let min = Math.min(...difArr);
  let minIdx = difArr.indexOf(min);
  return array[minIdx];
}

//

// 2차원으로 만들기

// function ex104BuildDimensionArray(num_list, n) {
//   let answer = [];

//   for (let i = 0; i < num_list.length / n; i++) {
//     answer.push(num_list.slice(i * n, i * n + n));
//   }
//   return answer;
// }

function solution(num_list, n) {
  return ex103BuildDimensionArray(num_list, n); // ex103BuildDimensionArray 실행값 리턴
}

function ex103BuildDimensionArray(num_list, chunkSize) {
  let result = []; // 빈 배열 result로 선언

  for (let i = 0; i < num_list.length / chunkSize; i++) {
    // num_list의 길이만큼 반복
    result.push(getSubArray(num_list, i * chunkSize, chunkSize)); // result 배열에 getSubArray 실행값을 넣는다
  }
  return result;
}

function getSubArray(arr, start, length) {
  return arr.slice(start, start + length); // arr 배열에서 start부터 start+length 까지 자른 배열을 return
}

//
