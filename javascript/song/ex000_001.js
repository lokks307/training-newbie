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

function ex4() {
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
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].toUpperCase()) {
        arr[i] = arr[i].toLowerCase();
      } else {
        arr[i] = arr[i].toUpperCase();
      }
    }
    console.log(arr.join(""));
  });
}

function ex5() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("close", function () {
    console.log(`!@#$%^&*(\\'"<>?:;`);
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
      }`
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
    console.log(`${str1}${str2}`);
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
