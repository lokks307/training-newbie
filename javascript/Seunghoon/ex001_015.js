let input;

solveThis(ex9);

//문자열 출력하기
function ex1() {
  console.log(input);
}

//a와b 출력하기
function ex2() {
  const [a, b] = input.split(" ");
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
}

//문자열 반복해서 출력하기
function ex3() {
  let [string, iteration] = input.split(" ");
  iteration = Number(iteration);
  console.log(string.repeat(iteration));
}

//대소문자 바꿔서 출력하기
function ex4() {
  let result = "";

  for (const word of input) {
    if (word === word.toUpperCase()) {
      result += word.toLowerCase();
    } else {
      result += word.toUpperCase();
    }
  }
  console.log(result);
}

//특수문자 출력하기
function ex5() {
  console.log(`!@#$%^&*(\\'"<>?:;`);
}

//덧셈식 출력하기
function ex6() {
  let [a, b] = input.split(" ").map(Number);
  console.log(`${a} + ${b} = ${a + b}`);
}

//문자열 붙여서 출력하기
function ex7() {
  const result = input.split(" ");
  console.log(result.join(""));
}

//문자열 돌리기
function ex8() {
  for (word of input) {
    console.log(word);
  }
}

//홀짝 구분하기
function ex9() {
  const number = Number(input);
  number % 2 === 0
    ? console.log(`${number} is even`)
    : console.log(`${number} is odd`);
}

//문자열 겹쳐쓰기
function ex10(my_string, overwrite_string, s) {
  const overwriteLength = overwrite_string.length;
  const my_stringArr = my_string.split("");

  my_stringArr.splice(s, overwriteLength, overwrite_string);
  return my_stringArr.join("");
}

//문자열 섞기
function ex11(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += str1[i] + str2[i];
  }
  return result;
}

//문자 리스트를 문자열로 변환하기
function ex12(arr) {
  return arr.join("");
}

function solveThis(solveFunction) {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input = [line][0];
  }).on("close", solveFunction);

  return rl;
}
