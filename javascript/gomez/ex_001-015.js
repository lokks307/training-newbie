let input = [];
/* 이 방법은 멋진 거 같아요! */
function SolveInterface(probfunc){
    /* node internal module readline is called */
    const readline = require('readline');
    /* createInterface is a method of readline module 
    It returns object Interface*/
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    /* method of Interface object
    on calls function when designated event occurs
    In this case, event line and close
    When the user puts some inputs and type enter. then event line is called. it passes the input to the 1st parameter of the callbakc func.
    when the terminal is closed, it calls prob function which is written to solve the problem.
     */
    rl.on('line', function (line) {
        input = line;
    }).on('close',probfunc);
    return rl;
}

function prob1(){
    console.log(input);
}

/* 하드 코딩 말고 생각이 나질 않는걸요*/
function prob2(){
    input = input.split(' ');
    console.log("a = " + input[0] + "\nb = " + input[1]);
}

function prob3(){
    input = input.split(' ');
    console.log(input[0].repeat(Number(input[1])));
}
function prob4(){
    const arr = line.split("").map(char => {
        //check whether char is upper, if true -> lower,else upper.
        return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
      });
  console.log(arr.join(""));
}
function prob5(){
    console.log("!@#$%^&*(\\\'\"<>?:;")
}
function prob6(){
    const [num1, num2] = input.map(Number);
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}
function prob7(){
    /* regex ^,*,+,g recall automata */
    console.log(input.replace(/\s+/g, ""));
}
function prob8(){
    input = [...input];
    input.map(char => console.log(char));
}
function prob9(){
    input = Number(input);
    if(input % 2 == 0){
        console.log(input + " is even");
    }
    else{
        console.log(input + " is odd");
    }
}
function solution(my_string, overwrite_string, s) {
    my_string = [...my_string];
    let over_s_len = overwrite_string.length;
    overwrite_string = [...overwrite_string];
    for (let i = 0 ;i < over_s_len ; i++){
        my_string[ i + s] = overwrite_string[i];
    }
    var answer = my_string.join('');
    return answer;
}
function solution(str1, str2) {
    var answer = '';
    let len = str1.length;
    for(let  i = 0; i<len ;i++){
        /* [] operator overloaded on string object. i totally forgot it */
        answer = answer.concat(str1[i]).concat(str2[i]);
    }
    return answer;
}
function solution(arr) {
    var answer = arr.join('');
    return answer;
}

function solution(my_string, k) {
    var answer = '';
    for (let i = 0 ; i<k ; i++){
        answer += my_string;
    }
    return answer;
}
function solution14(a, b) {
    a = String(a);
    b = String(b);
    let ab = a + b;
    let ba = b + a;
    if( ab > ba ) return Number(ab);
    else return Number(ba);
}
function solution(a, b) {
    let abmul2 = 2 * a * b;
    let aplusb = Number(String(a) + String(b));
    return abmul2 > aplusb ? abmul2 : aplusb;
}


