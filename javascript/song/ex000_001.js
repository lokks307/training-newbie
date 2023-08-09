function ex1() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = [line];
  }).on("close", function () {
    str = input[0];
    console.log(str);
  });
}

function ex2() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    console.log(`a = ${Number(input[0])}\nb = ${Number(input[1])}`);
  });
}

function ex3() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n));
  });
}
