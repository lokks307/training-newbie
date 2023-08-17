let input;

solveThis(ex2);

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
