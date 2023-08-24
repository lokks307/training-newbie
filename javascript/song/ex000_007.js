// 문제 순서 바뀌어서 풀었을 때 푼 문제들은 건너 뛰고 풀었습니다 :)

// 암호 해독

function ex148CodeBreaking(cipher, code) {
  let answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

//

// 369게임

function ex149Game369(order) {
  let count = 0;
  const orderList = [...String(order)];
  for (let num of orderList) {
    if (num === "3" || num === "6" || num === "9") {
      count++;
    }
  }
  return count;
}

//

// 중복된 문자 제거

function ex152(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (!answer.includes(my_string[i])) {
      answer += my_string[i];
    }
  }
  return answer;
}

// Set 이용해서

function ex152a(my_string) {
  return [...new Set(my_string)].join("");
}

//
