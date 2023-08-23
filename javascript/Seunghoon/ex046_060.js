//문자열의 앞의 n글자
function ex46(my_string, n) {
  return my_string.substring(0, n);
}

//접두사인지 확인하기
function ex47(my_string, is_prefix) {
  const prefix = [];
  for (let i = 1; i <= my_string.length; i++) {
    prefix.push(my_string.substring(0, i));
  }

  if (prefix.includes(is_prefix)) return 1;
  return 0;
}

//문자열 뒤집기
function ex48(my_string, s, e) {
  const myStringArr = [...my_string];
  const reverseString = myStringArr.splice(s, e - s + 1).reverse();
  myStringArr.splice(s, 0, ...reverseString);

  return myStringArr.join("");
}

//세로 읽기
function ex49(my_string, m, c) {
  const arr = [...my_string];
  const splitWithMArr = [];
  const result = [];

  for (let i = 0; i < my_string.length; i += m) {
    splitWithMArr.push(arr.splice(0, m));
  }

  splitWithMArr.forEach((word) => {
    result.push(word[c - 1]);
  });

  return result.join("");
}

function ex49ExStr(myString, m, c) {
  //str = "ihrhbakrfpndopljhygc" interval = 4 offset = 2 라고 했을 때,
  function extractCharacters(str, interval, offset) {
    return str
      .split("") //str을 split 하여 ["i", "h", "r", "h", "b", "a", "k" ....] 로 나눔
      .slice(offset - 1) //slice 하면 ["h", "r", "h", "b", "a", "k" ....], 이렇게 하면 내가 찾는 문자열이 0번째부터 시작하게되는데, 이렇게 생각을 어떻게 하나요..?
      .filter((_, index) => index % interval === 0); //filter를 돌며, index % interval인 나머지 값이 0인 애들만 남김
  }
  //기존에는 for문으로 바로 들어가 처리했는데, extractCharacters 함수를 만들어 해당 함수가 처리하게 한다.
  const extractedCharacters = extractCharacters(myString, m, c);
  const answer = extractedCharacters.join("");
  return answer;
}

//qr code
function ex50(q, r, code) {
  const codeArr = [...code];
  const result = codeArr.filter((code, idx) => idx % q === r).join("");

  return result;
}

function ex50qrCode(q, r, code) {
  const codeArr = [...code];
  const result = codeArr.filter((_, idx) => idx % q === r).join("");

  return result;
}

//문자 개수 세기
// 65 ~ 90 - A ~ Z, 97 ~ 122 - a ~ z
function ex51(my_string) {
  const result = new Array(52).fill(0);
  const myStringArr = [...my_string];

  myStringArr.map((myString) => {
    const asciiNumber = myString.charCodeAt();
    if (asciiNumber < 91) {
      result[asciiNumber - 65] += 1;
    } else {
      result[asciiNumber - 97 + 26] += 1;
    }
  });
  return result;
}

// 생각의 흐름.

//  아스키코드를 쓰면 될 것 같은데, 매직넘버를 없애자. 명시해주기.
//  A ~ Z를 담는 배열과 a ~ z를 담는 배열을 만들어볼까
//  하나씩 담는데 그 값이 A, B가 아닌 실제로 몇 개가 들어있는지를 확인해야하니 카운트를 해야겠네.
//  카운트 해주는건 따로 해줘도 되겠다.
//  아마 정규표현식으로 하면 쉽게 확인할 수 있겠지?
//  매개변수로 들어온 myStrign에 A가 몇 개 있을까 , 아 - 값이 나오면 배열에 담기니 length로 하면 count가 되겠구나.
//  각각의 대문자 배열과 소문자 배열에 count를 담아줬으니, ...을 써서 한 번에 출력해보면 되겠다.

function ex51_countString(myString) {
  //'횟수 발생' 함수를 만들어 count를 세준다.
  function countOccurrences(str, ch) {
    // String.match() 는 정규표현식을 통해 맞는 게 있는지 확인하는데
    // ch에 대문자를 확인할 때는 A, B, C... 가 차례로 들어올 것이고, 소문자로는 a, b, c ... 가 들어올것이다.
    // 근데 "g"를 통해 str에 A가 있는지를 전체 탐색하고 있으면 ['A'] 를 반환해주고, 이를 length로 받으니 1이 나올 것이다.
    // || [] 가 없다면, 아예 match되지 않는 값은 null을 나타나게 된다. 그러니 || []을 넣어주고, 이를 length로 받으면 0이 나오는 것이다.
    const count = (str.match(new RegExp(ch, "g")) || []).length;
    return count;
  }

  //매직넘버를 없애자.
  const char_A = 65;
  const char_Z = 90;
  const char_a = 97;
  const char_z = 122; // 굳이 쓰이지 않는데 정의한 이유는 폼을 맞추기 위해서라 보면 될까요?
  const _atoz_ = 26; // 같은 의문입니다.
  const gap_aA = char_a - char_A;

  let upperList = [];
  let lowerList = [];

  for (let i = char_A; i <= char_Z; i++) {
    const upperChar = String.fromCharCode(i); // A, B, C, D ... Z 까지 하나씩
    const lowerChar = String.fromCharCode(i + gap_aA); // a, b, c, d ... z 까지 하나씩

    const upperCount = countOccurrences(myString, upperChar); //매개변수로 들어온 값이 A, B, C, D ...등 대문자를 포함하고 있는지 체크
    upperList.push(upperCount); //체크한 값은 count인 숫자로 들어온다.
    const lowerCount = countOccurrences(myString, lowerChar); //매개변수로 들어온 값이 a, b, c, d ...등 소문자를 포함하고 있는지 체크
    lowerList.push(lowerCount);
  }

  return [...upperList, ...lowerList]; //전개 연산자를 통해 A ~ Z 의 count 한 값과 a ~ z count 값을 하나의 배열로 출력하게 해준다.
}

//배열 만들기 1
function ex52(n, k) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) result.push(i);
  }
  return result;
}

//글자 지우기
function ex53(my_string, indices) {
  let result;
  const myStringArr = [...my_string];

  for (const idx of indices) {
    myStringArr[idx] = 0;
  }

  result = myStringArr.filter((elem) => elem !== 0).join("");
  return result;
}

//---- 쉽게 읽힐 수 있는, 함수로 빼내기 방법.
function removeCharacters(arr, indices) {
  for (const idx of indices) {
    arr[idx] = 0; //idx에 해당하는 arr의 idx를 0으로 바꿔준다.
  }
  return arr;
}

function ex53_removeCharacter(myString, indices) {
  const charList = [...myString]; // 글자 리스트, 라는 변수명인 charList --> 난 왜 글자 하면 Character가 안떠올랐을까?
  removeCharacters(charList, indices); // removeCharacters 함수에 펼친 charList를 보내준다.

  const result = charList.filter((elem) => elem !== 0).join("");
  return result;
}

//카운트 다운
function ex54(start, end) {
  const result = [];
  for (let i = start; i >= end; i--) {
    result.push(i);
  }
  return result;
}

//-- 읽히기 쉬운 함수명, 함수로 빼내기
function generateDescendingList(start, end) {
  const rangeArr = [];
  for (let i = start; i >= end; i--) {
    rangeArr.push(i);
  }
  return rangeArr;
}

function ex54_countDown(start, end) {
  const result = generateDescendingList(start, end); //generateDescendingList 이름을 통해 --> 아~ 감소하는 리스트를 만들어주는 함수구나
  return result;
}

//가까운 1 찾기
function ex55(arr, idx) {
  return arr.findIndex((elem, index) => index >= idx && elem === 1);
}

//리스트 자르기
function ex56(n, slicer, num_list) {
  const [a, b, c] = slicer;
  let result = [];

  switch (n) {
    case 1:
      result = num_list.splice(0, b + 1);
      break;
    case 2:
      result = num_list.splice(a);
      break;
    case 3:
      result = num_list.splice(a, b - a + 1);
      break;
    case 4:
      const tempArr = num_list.splice(a, b - a + 1);
      for (let i = 0; i < tempArr.length; i += c) {
        result.push(tempArr[i]);
      }
      break;
  }
  return result;
}

//
function ex56_sliceList(scenario, slicer, numList) {
  //매개변수에 n 대신 scenario라는, 상황을 나타내는 표현을 써 봤는데 이런건 어떨까요?
  const [a, b, c] = slicer;
  // 꼭 switch문이 제일 깔끔하고 읽기 쉬운게 아니다. (실상 switch문을 개발 할 때도 많이 안써봤는데..)
  if (scenario === 1) return numList.slice(0, b + 1);
  if (scenario === 2) return numList.slice(a);
  if (scenario === 3) return numList.slice(a, b + 1);

  const result = [];
  for (let i = a; i <= b; i += c) {
    result.push(numList[i]);
  }
  return result;
}

//첫 번째로 나오는 음수
function ex57(num_list) {
  return num_list.findIndex((elem) => elem < 0);
}

//배열 만들기 3
function ex58(arr, intervals) {
  let result = [];

  for (const interval of intervals) {
    const [a, b] = interval;
    const tempArr = arr.slice(a, b + 1);
    result = [...result, ...tempArr];
  }
  return result;
}

//--- 읽기 쉬운 코드 -> 함수로 빼내기, flat을 쓸 생각도 해보기
function extractIntervals(list, interval) {
  const [start, end] = interval; // interval = [1, 3] start = 1, end = 3
  return list.slice(start, end + 1); // 들어온 리스트가 [1,2,3,4,5] 라면 [2,3,4] 를 반환
}

function ex58_makeList(list, intervalList) {
  //intervalList를 map 하면 interval은 [1, 3] , [2, 4] 와 같은 형태가 차례로 들어가게 된다.
  //map을 다 돌고 나면 [ [ 2, 3, 4 ], [ 1, 2, 3, 4, 5 ] ] 의 형태로 되는데, 이때 flat()을 써줌으로써 배열을 평탄하게 해준다.
  // flat()은 기본값이 1인데 flat(2) 와 같이 안에 depth를 써주면 중첩배열도 평탄화를 쉽게 해줄 수 있다.
  //따라서 flat을 쓰고 나면 [2, 3, 4, 1, 2, 3, 4, 5] 의 1레벨 깊이의 배열로 반환할 수 있게 되는 것.
  const result = intervalList
    .map((interval) => extractIntervals(list, interval))
    .flat();
  return result;
}

//2의 영역
function ex59(arr) {
  const firstIndex = [...arr].indexOf(2);
  const lastIndex = [...arr].lastIndexOf(2);

  if (firstIndex === -1) return [-1];
  return arr.splice(firstIndex, lastIndex - firstIndex + 1);
}

//
function ex59_boundaryOf2(arr) {
  const idxList = getAllIndexes(arr, 2); // [1, 5]
  const len = idxList.length; // 2
  // len은 0부터 2 ~~ 이상씩 나오게 될텐데, 2 이상이면 맨 앞, 맨 뒤를 알면 되기에 default로 둔다.
  switch (len) {
    case 0:
      return [-1];
    case 1:
      return [2];
    case 2:
    default:
      let start = idxList[0];
      let last = idxList[len - 1] + 1; //slice는 last를 포함하지 않으니 +1로 last값까지 해주려고

      return arr.slice(start, last);
  }
}

// arr = [1, 2, 1, 4, 5, 2, 9]
function getAllIndexes(arr, val) {
  let indexes = [],
    i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) indexes.push(i); // indexes 배열 안에 value인 2의 인덱스 값을 넣는다.
  }
  return indexes; // [1, 5]
}

//배열 조각하기
function ex60(arr, query) {
  query.map((_, index) => {
    if (index % 2 === 0) {
      arr.splice(query[index] + 1);
    } else {
      arr.splice(0, query[index]);
    }
  });
  return arr;
}

// 짝수 인덱스 - query 뒷부분 버림
// 홀수 인덱스 - query 앞부분 버림
function ex60_pieceList(arr, query) {
  query.map((_, i) => {
    //짝수라면 뒷부분을 버리니까, 0 부터 해당 query까지가 살아야됨
    //홀수라면 앞부분을 버리니까, 해당 query부터 맨 끝까지 살면 됨
    const start = i % 2 === 0 ? 0 : query[i];
    const end = i % 2 === 0 ? query[i] + 1 : undefined;
    arr = arr.slice(start, end); //그렇게 정해진 start, end 값을 arr에 업데이트해줌
  });
  return arr;
}
