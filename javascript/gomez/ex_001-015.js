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
    let len = input.length;
    input = [...input];
    for(let i = 0; i<len ; i++){
        if(input[i] == input[i].toUpperCase()){
            input[i] = input[i].toLowerCase()
        }
        else{
            input[i] = input[i].toUpperCase();
        }
    }
    console.log(input.join(''));
}
function prob5(){
    console.log("!@#$%^&*(\\\'\"<>?:;")
}
function prob6(){
    input = input.split(' ');
    console.log(input[0] + " + " + input[1] + " = " + (Number(input[0]) + Number(input[1])) );
}
function prob7(){
    /* regex ^,*,+,g recall automata */
    console.log(input.replace(/\s+/g, ""));
}
function prob8(){
    let len = input.length;
    input = [...input];
    for(let i = 0; i<len ; i++){
       console.log(input[i]);
    }
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

/* 
how javascript distinguish functions with same name.
js do not support function overloading with different parameters. (c,c++ supports it.)
The last function wriiten is used.
*/
function solution(my_string, k) {
    var answer = '';
    for (let i = 0 ; i<k ; i++){
        answer += my_string;
    }
    return answer;
}
function solution(a, b) {
    a = a.toString();
    b = b.toString();
    let ab = a + b;
    let ba = b + a;
    var answer = ab;
    for (let i =0 ; i< ab.length; i++){
        if (ab[i] > ba[i]){
            answer = ab;
            break;
        }
        else if(ab[i] < ba[i]){
            answer =  ba;
            break;
        }
        else continue;
    }
    return Number(answer);
}
function solution(a, b) {
    let ba = 2*a*b;
    ba = ba.toString();
    a = a.toString();
    b = b.toString();
    let ab = a + b;
    var answer = ab;
    for (let i =0 ; i< ab.length; i++){
        if (ab[i] > ba[i]){
            answer = ab;
            break;
        }
        else if(ab[i] < ba[i]){
            answer =  ba;
            break;
        }
        else continue;
    }
    return Number(answer);
}
//SolveInterface(prob9);

