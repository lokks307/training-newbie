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
