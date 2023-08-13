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
    In this case event line and close
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

function prob2(){
    input = input.split(' ');
    console.log("a = " + input[0] + "\nb = " + input[1]);
}

SolveInterface(prob2);

