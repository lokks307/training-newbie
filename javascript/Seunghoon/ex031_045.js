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
/** 
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
*/

function isAllZeroOrFive(num) {
  const individualNumbers = String(num).split(""); //매개변수 num를 split 하고
  return individualNumbers.every((digit) => digit === "0" || digit === "5"); // 각 자리마다 0인지 5인지 확인하여 모두 문제 없다면 true 반환
}

/** 1. 반복문 안에서 조건 검사할 때는 함수로 만들기 
function ex32(l,r){
  let result = [];

  for(let i =l; i <= r; i++){ //l ~ r까지 반복
    if(i % 5 !== 0){  //5로 나누어 떨어지지 않으면 넘어간다.
      continue;
    }
    if(isAllZeroOrFive(i)) {
      // 기존 0과 5로만 이루어져있는 지 확인하는 부분을  isAllZeroOrFive 로 뺀다.
      result.push(i); // isAllZeroOrFive 가 true 라면 result 배열에 i 추가
    }
  }
  if(result.length === 0) return [ -1]; // for문 반복하고 나왔는데도 result에 아무 값도 없다면 [-1] 반환
  return result;
}
*/

// 2. 부정적 개념 긍정 개념으로 바꾸기
function ex32(l, r) {
  const NO_RESULT = [-1]; // 상수는 대문자로 표기한다.
  const MULTIPLE_OF = 5;
  let result = [];

  for (let i = l; i <= r; i++) {
    // 처음엔 5로 나누어떨어지지 '않으면' continue를 하는 부정의 개념을 썼으나, i % MULTIPLE_OF === 0 을 통해 긍정의 개념으로 바꾼다.
    if (i % MULTIPLE_OF === 0 && isAllZeroOrFive(i)) {
      result.push(i);
    }
  }
  if (result.length === 0) return NO_RESULT;
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

//콜라츠 수열 만들기
function ex34(n) {
  let result = [n];

  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  return result;
}

//배열 만들기 4
/** 
function ex35(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    }

    if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }
  return stk;
}
*/

//중복 피하기, 굳이 변수명 줄여쓰기 않기
function ex35FindLongestIncreasingSubsequence(arr) {
  //이해하기쉬운 함수명 정해주기, 조금 지나긴 했지만 앞으로 푸는 문제는 함수명도 고민해보자.
  let stack = []; // stack을 굳이 stk로 쓰는 것을 지양하자.
  let i = 0;

  while (i < arr.length) {
    if (stack.length === 0 || stack[stack.length - 1] < arr[i]) {
      //아예 같은 동작하는 일을 굳이 따로 적을 이유가 있었나? 중복을 피하자.
      stack.push(arr[i]);
      i++;
    } else {
      stack.pop();
    }
  }
  return stack;
}

//간단한 논리 연산
/** 
function ex36(x1, x2, x3, x4) {
  let first, second, result;

  const checkValueDown = (x, y) => {
    if (x === false && y === false) {
      return false;
    }
    return true;
  };
  const checkValueUp = (x, y) => {
    if (x === true && y === true) {
      return true;
    }
    return false;
  };

  first = checkValueDown(x1, x2);
  second = checkValueDown(x3, x4);
  result = checkValueUp(first, second);

  return result;
}
*/

// 논리 연산자
// 처음보는 문자열 ∨ ∧ 에 당황해 생각치도 못하게 이상하게 풀었습니다 😧
function ex36(x1, x2, x3, x4) {
  const first = x1 || x2; // x1 = false, x2 = true 라면 first 는 true다. 반대로 x1 = true, x2 = false 여도 true다. 둘 다 true면 true, 둘 다 false면 false 다.
  const second = x3 || x4; // 위와 같다.
  const result = first && second; // 하나라도 false라면 false다. 둘 다 true여야 true다.

  return result;
}

//주사위 게임 3

/**
function ex37(a, b, c, d) {
  let [first, second, third, fourth] = [a, b, c, d].sort((a, b) => a - b);

  if (first === second && third === fourth && first === fourth) {
    return 1111 * a;
  }

  if (first !== second && second === third && third === fourth) {
    return (10 * fourth + first) ** 2;
  }

  if (first === second && second === third && third !== fourth) {
    return (10 * first + fourth) ** 2;
  }

  if (first === second && second !== third && third === fourth) {
    return (first + third) * Math.abs(first - third);
  }

  if (first === second && second !== third && third !== fourth) {
    return third * fourth;
  }

  if (first !== second && second === third && third !== fourth) {
    return first * fourth;
  }

  if (first !== second && second !== third && third === fourth) {
    return first * second;
  }

  return first;
}
 */

/*
 주사위게임입니다. 저는 정확하게 이런 순서로 코드를 작성할 거예요
  1. 숫자를 정렬한다
  2. 각 주사위 숫자의 개수를 센다
  3. 주사위 규칙에 따라 점수를 계산한다
    3-1. 모두 같은 경우
    3-2. 모두 다른 경우
    3-3. 2개는 같지만, 나머지가 다른 경우
    
    위 3가지 케이스를 머리속에서 지워보세요.
    남은 케이스는 주사위가 (2🎲🎲, 2🎲🎲)씩 나왔거나, (3🎲🎲🎲,1🎲)씩 나온 경우입니다.
    나머지 케이스를 고려할 필요가 없습니다. 머리가 가벼워지죠?

    3-4. 2개씩 같은 경우
    3-5. 3개만 같은 경우

 A. 주사위게임은 순서가 상관없습니다.
    그러나 숫자를 정렬해두면, 사람의 머리속으로 상상하는 내용이 단순해집니다.
 B. 주의! object의 keys는 String입니다. 나중에 key를 숫자로 쓰려면 Number로 변환해줘야 합니다.
*/

function ex37(a, b, c, d) {
  const numbers = [a, b, c, d];
  numbers.sort((x, y) => x - y); // 처음 나온 값들 정렬 --> 1. 숫자를 정렬한다.

  const diceReport = countDuplicates(numbers); //처음 값들의 중복이 있는지 확인 --> 2. 각 주사위 숫자의 개수를 센다.
  const keys = Object.keys(diceReport); // diceReport = {2: 2, 5: 1, 6: 1} 이라면 -> keys = ['2', '5', '6']

  // 쉬운 케이스를 먼저 처리하고 머리속에서 잊으세요.
  // keys.length는 1에서 4까지밖에 안나온다.
  // keys를 쓰는것. 거기에 keys.length를 활용하려고 생각하는 걸 어떻게 할까?
  switch (keys.length) {
    case 1:
      return sameAll(a); // keys.length 가 1이라는 건 모든 주사위 숫자가 같다는 말.
    case 4:
      return differentAll(numbers); // keys.length 가 4라는 건 모든 주사위 숫자가 다른 것.
    case 3:
      return same211(diceReport); // 3은 2개는 같고, 1개, 1개 다르다.
    case 2: // 2일 때는 2개 - 2개 씩 같거나 3개 - 1개씩 같을 수 있다.
      if (diceReport[a] === 2)
        // diceReport[a] ===3 || diceReport[a] === 1 이렇게 비교할 수도 있는데, 2 한번만 비교하는게 더 간편해요.
        return same22(keys.map(Number));
      return same31(diceReport, keys.map(Number));
  }
}

// arr = [ 2, 2, 5, 6] 이라면
// { 2 : 2, 5: 1, 6: 1 }
function countDuplicates(arr) {
  const countMap = {};

  for (const num of arr) {
    if (countMap[num] === undefined)
      //처음 들어온 값이라면
      countMap[num] = 0; //등록

    countMap[num] += 1; //후 1 늘려줌 , 처음 온 게 아니면 바로 +1
  }

  return countMap;
}

function sameAll(p) {
  return p * 1111;
}

function same31(report, [p, q]) {
  if (report[p] === 1) [p, q] = [q, p]; // p가 1개인 경우, swap(p ,q). 그럼 p가 3개짜리 숫자가 됩니다.

  return Math.pow(10 * p + q, 2); // Math.pow(base, exponent) -- base 밑값에 exponent 주어진 지수 값으로 거듭제곱
}

function same22([p, q]) {
  return (p + q) * Math.abs(p - q);
}

function same211(report) {
  const [q, r] = Object.keys(report)
    .filter((key) => report[key] === 1)
    .map(Number); // filter 메서드 통해 1개인 애들만 살림..
  return q * r;
}

function differentAll(arr) {
  return Math.min(...arr);
}

//글자 이어 붙여 문자열 만들기
/** 
function ex38(my_string, index_list) {
  let result = [];

  for (const index of index_list) {
    result.push(my_string[index]);
  }
  return result.join("");
}
*/

//ES6 컨벤션 따르기 - 카멜케이스
function ex38(myString, indexList) {
  let result = [];

  for (const index of indexList) {
    result.push(myString[index]);
  }
  return result.join("");
}

//9로 나눈 나머지
/** 
function ex39(number) {
  const individualNumber = [...number].map(Number);
  const sumNumbers = individualNumber.reduce((prev, curr) => prev + curr);

  return sumNumbers % 9;
}
*/

// 단,복수 대신 List로 쓰기, reduce 매개변수 이름
function ex39(number) {
  //앞서 내 코드는 individualNumber에서 map(Number)로 모든 값을 숫자로 바꿨지만,
  // reduce 하나로 작성하면 각 자리에 Number(digit) 할 때 초기값이 필요하다.
  // 초기값 없이 reduce를 쓰면 문자열로 인식해 숫자가 문자열처럼 더해지기 때문
  const sum = [...number].reduce((sum, digit) => sum + Number(digit), 0);

  return sum % 9;
}

//문자열 여러 번 뒤집기
/** 
function ex40(my_string, queries) {
  const arr = [...my_string];

  for (const query of queries) {
    const [s, e] = query;
    const reverseString = arr.splice(s, e - s + 1).reverse();
    arr.splice(s, 0, ...reverseString);
  }
  return arr.join("");
}
*/

function ex40(myString, queries) {
  const arr = myString.split("");

  for (const query of queries) {
    const [s, e] = query;
    //splice(start, deleteCount)는 변경 시작할 인덱스 start에서 제거할 수 deleteCount(option)를 지정한다.
    //slice(begin, end)는 begin부터 end(미포함) 까지 새로운 배열 객체로 반환한다.
    const reverseString = arr.slice(s, e + 1).reverse(); // 굳이 splice 써서 deleteCount를 어렵게 정해줄 필요 없다.
    arr.splice(s, reverseString.length, ...reverseString);
  }
  return arr.join("");
}

//배열 만들기 5
/** 
function ex41(intStrs, k, s, l) {
  const result = [];

  for (const intStr of intStrs) {
    const arr = [...intStr];
    const findStr = Number(arr.splice(s, l).join(""));

    if (findStr > k) {
      result.push(findStr);
    }
  }
  return result;
}
*/

//map, filter로도 구현 가능하다.
// + 잘라낸 문자열을 함수로 빼놔서 더 읽기 쉬운 코드가 된 듯
function extractNumber(str, start, length) {
  // str = "0123456789", start = 5 length = 5
  return Number(str.slice(start, start + length)); // 56789 반환
}

function ex41BuildArray(stringNumbers, k, s, l) {
  return stringNumbers
    .map((num) => extractNumber(num, s, l)) //map에서 각각의 값을 extractNumber로 반환해준다.
    .filter((newNum) => newNum > k); //extractNumber를 거치고 나온 값을 filter 처리 해준다.
}

//부분 문자열 이어 붙여 문자열 만들기

/** 
function ex42(my_strings, parts) {
  let result = [];

  my_strings.forEach((myString, idx) => {
    const [s, e] = parts[idx];
    const arr = [...myString].splice(s, e + 1).join("");
    result.push(arr);
  });
  return result.join("");
}
*/

/** 
function ex42(my_strings, parts) {
  let result = "";

  my_strings.forEach((myString, idx) => {
    const [s, e] = parts[idx];
    result += myString.substring(s, e + 1);
  });
  return result;
}
*/

//substring과 slice의 차이
//아주 비슷하나 미묘하게 다른 점이 있는데,
// 1. start, end에서 end가 더 짧을 경우, 예를들어 start 5, end 2
//  substring은 알아서 end와 start 자리를 바꿔서 출력한다. start 2, end 5
//  slice는 빈 문자열을 뱉는다.
// 2. 음수일 경우 start -5 end -2
//   substring은 음수를 0으로 친다.
//   slice는 뒤에서 부터 세서 출력해준다.
function ex42BuildString(myString, parts) {
  const getSubstring = (str, start, end) => str.slice(start, end + 1); //getSubstring 함수로 들어온 str을 start, end 길이에 맞춰 slice한다.

  return parts
    .map(([start, end], i) => getSubstring(myString[i], start, end))
    .join(""); //map의 첫 번째 매개변수에 배열 형태로 start,end를 넣는 걸 처음 보았다.
}

//문자열의 뒤의 n글자
/** 
function ex43(my_string, n) {
  const start = my_string.length - n;
  return my_string.substring(start);
}
*/

//slice로 반환하기
function ex43(myString, n) {
  const start = myString.length - n;
  return myString.slice(start);
}

//접미사 배열
/** 
function ex44(my_string) {
  const result = [];

  for (let i = 0; i < my_string.length; i++) {
    result.push(my_string.substring(i));
  }

  return result.sort();
}
*/

//for문 map으로 바꿔보기
function ex44SuffixArray(myString) {
  const buildSuffix = (str, start) => str.slice(start); // substring 대신 slice 사용.

  const suffixList = [...myString].map((_, i) => buildSuffix(myString, i)); //map 인덱스로 buildSuffix 함수에 slice 할 수 있게 해준다.
  const orderedSuffixLst = suffixList.sort(); //리스트 정렬

  return orderedSuffixLst;
}

//접미사인지 확인하기
/** 
function ex45(my_string, is_suffix) {
  const suffix = [];
  for (let i = 0; i < my_string.length; i++) {
    suffix.push(my_string.substring(i));
  }
  if (suffix.includes(is_suffix)) return 1;
  return 0;
}
*/

//Array.from을 통해 배열을 만들어 값을 넣는 방법.
function ex45IsSuffix(myString, isSuffix) {
  const suffixes = generateSuffixes(myString);
  return suffixes.includes(isSuffix) ? 1 : 0;
}

function generateSuffixes(str) {
  //array.from을 통해 새로운 배열을 만들고 맵핑 함수로 각 값을 slice 해준다.
  //{length: str.length} 까지만 하면 [undefined , undefined ...] 로 str.length만큼 생성되는데,
  // 두번째 맵핑 함수를 통해 들어온 str을 인덱스별로 잘라주게 되니
  //"banana" 가 들어오게 되면  [ 'banana', 'anana', 'nana', 'ana', 'na', 'a' ] 를 최종적으로 반환하게 된다.
  return Array.from({ length: str.length }, (_, i) => str.slice(i));
}
