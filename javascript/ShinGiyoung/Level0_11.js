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
    let repeatStr = "";
    for (let i = 1; i <= n; i++) {
      repeatStr += str;
    }
    console.log(repeatStr);
  });
}

function ex4() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  let answer = "";
  rl.on("line", function (line) {
    input = [line];
  }).on("close", function () {
    str = input[0];
    for (let i = 0; i < str.length; i++) {
      str[i] === str[i].toUpperCase()
        ? (answer += str[i].toLowerCase())
        : (answer += str[i].toUpperCase());
    }

    console.log(answer);
  });
}

function ex5() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("close", function () {
    console.log(`!@#$%^&*(\\'"<>?:;
`);
  });
}

function ex6() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    console.log(
      `${Number(input[0])} + ${Number(input[1])} = ${
        Number(input[0]) + Number(input[1])
      }`,
    );
  });
}

function ex7() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    str1 = input[0];
    str2 = input[1];
    console.log(str1 + str2);
  });
}

function ex8() {
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
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  });
}

function ex9() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    n = Number(input[0]);
    n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);
  });
}

function ex10(my_string, overwrite_string, s) {
  var answer = "";
  answer =
    my_string.substr(0, s) +
    overwrite_string +
    my_string.substr(s + overwrite_string.length);

  return answer;
}

function ex11(str1, str2) {
  var answer = "";
  for (let i = 0; i < str1.length; i++) {
    answer += str1[i] + str2[i];
  }
  return answer;
}

function ex12(arr) {
  var answer = "";

  arr.forEach((str) => (answer += str));
  return answer;
}

function ex13(my_string, k) {
  var answer = "";

  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}

function ex14(a, b) {
  var answer = 0;
  const ab = a.toString() + b.toString();
  const ba = b.toString() + a.toString();
  if (ab < ba) {
    answer = ba;
  } else {
    answer = ab;
  }

  return Number(answer);
}

function ex15(a, b) {
  const plus = a.toString() + b.toString();
  const multiply = 2 * a * b;
  var answer = 0;
  if (plus < multiply) {
    answer = multiply;
  } else {
    answer = plus;
  }
  return Number(answer);
}
