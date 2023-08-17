let input;

solveThis(ex6);

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
