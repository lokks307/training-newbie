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

  const filteredArr = arr.filter((_, i) => i % q === r);
  return filteredArr.join("");
}

//

// 문자 개수 세기

function ex51CountCharacter(my_string) {
  let arr = new Array(52).fill(0);

  let strArr = [...my_string];

  strArr.map((el, i) => {
    const charcode = my_string.charCodeAt(i);

    if (charcode >= 65 && charcode <= 90) {
      arr[charcode - 65] += 1; // charcode가 대문자일 때
    } else if (charcode >= 97 && charcode <= 122) {
      arr[charcode - 97 + 26] += 1;
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

function ex55FindIndex(arr, idx) {
  let answer;
  for (item of arr) {
    answer = arr.findIndex((el, i) => el === 1 && i >= idx);
  }
  return answer;
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
  const slicedArr = arr.slice(indices[0], indices[indices.length - 1] + 1);
  if (slicedArr.length === 0) return [-1];
  return slicedArr;
}

//

// 배열 조각하기

function ex60SliceArray(arr, query) {
  let answer = arr;
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) answer = answer.slice(0, query[i] + 1);
    else answer = answer.slice(query[i]);
  }
  return answer;
}

//

// n 번째 원소부터

function ex61FromNthElement(num_list, n) {
  return num_list.slice(n - 1);
}

//

// 순서 바꾸기

function ex62SwapOrder(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

//

// 왼쪽 오른쪽

function ex63LeftRight(str_list) {
  const idx = str_list.findIndex((el) => el === "l" || el === "r");

  if (idx === -1) {
    return [];
  } else if (str_list[idx] === "l") {
    return str_list.slice(0, idx);
  } else {
    return str_list.slice(idx + 1);
  }
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
      arr[i] += 1;
    }
  }
  return arr;
}

//

// 조건에 맞게 수열 변환하기 1

function ex71ConvertSeq(arr) {
  return arr.map((el) => {
    if (el >= 50 && el % 2 === 0) {
      return el / 2;
    } else if (el < 50 && el % 2 !== 0) {
      return el * 2;
    }
    return el;
  });
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

function ex87Angle(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
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

function ex90GetTotalPrice(n, k) {
  return n * 12000 + k * 2000 - Math.floor(n / 10) * 2000;
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
