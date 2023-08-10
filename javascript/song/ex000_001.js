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
    // n % 2 === 0 ? console.log(`${n} is even`) : console.log(`${n} is odd`);   // 연산과 출력을 같이 하는 못된 습관이 복잡한 로직을 구현할 때 드러날 수 있어요.
    if (n % 2 === 0) {
      console.log(`${n} is even`);
    } else console.log(`${n} is odd`);
  });
}

function ex10(my_string, overwrite_string, s) {
  let arr = my_string.split("");
  arr.splice(s, overwrite_string.length, overwrite_string);
  return arr.join("");
}

function ex11(str1, str2) {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    arr.push(str1[i] + str2[i]);
  }
  return arr.join("");
}

function ex12(arr) {
  return arr.join("");
}

function ex13(my_string, k) {
  return my_string.repeat(k);
}

function ex14(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = Number(String(b) + String(a));

  if (fnum >= snum) {
    return fnum;
  } else return snum;
}

function ex15(a, b) {
  let fnum = Number(String(a) + String(b));
  let snum = 2 * a * b;

  let op = fnum >= snum ? fnum : snum;
  return op;
}

function ex16(num, n) {
  return num % n === 0 ? 1 : 0;
}

function ex17(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

function ex18(n) {
  let arr = [];
  for (let i = 1; i < 101; i++) {
    arr.push(i);
  }
  if (n % 2 === 1) {
    arr = arr.filter((el) => el <= n && el % 2 === 1);
    const result = arr.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);
    return result;
  } else {
    arr = arr.filter((el) => el <= n && el % 2 === 0);
    const result = arr.reduce(function add(sum, currValue) {
      return sum + currValue ** 2;
    }, 0);
    return result;
  }
}

function ex19(ineq, eq, n, m) {
  const op = ineq + eq;

  let result;
  let answer;

  switch (op) {
    case ">=":
      result = n >= m;
      break;
    case "<=":
      result = n <= m;
      break;
    case ">!":
      result = n > m;
      break;
    case "<!":
      result = n < m;
      break;
  }

  if (result) {
    answer = 1;
  } else answer = 0;

  return answer;
}

function ex20(a, b, flag) {
  if (flag) {
    return a + b;
  } else return a - b;
}
