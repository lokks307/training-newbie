function solution16(num, n) {
    const divisor = 1;
    const notdivisor = 0;
    let answer = num % n ? notdivisor : divisor;
    return answer;
}

function solution17(number, n, m) {
    const divisor = 1;
    const notdivisor = 0;
    let answer = (solution16(number,n) && solution16(number,m)) ? divisor : notdivisor;
    return answer;
}

function solution18(n) {
    let isOdd = n % 2;
    if(isOdd){
        return ( n + 1 ) * (n + 1) /4;
    } else{
        let sum = 0;
        let init = 2;
        while(init <= n){
            sum += init**2;
            init += 2;
        }
        return sum;
    }
    return answer;
}

function solution19(ineq, eq, n, m) {
    if ( ineq == ">" && eq == "="){
        return Number(n >= m);
    }else if(ineq == ">" && eq != "="){
        return Number(n > m);
    }else if(ineq != ">" && eq == "="){
        return Number(n <= m);
    }else{
        return Number(n < m);
    }
}

function solution20(a, b, flag) {
    return flag ? a + b : a - b;
}


function solution21(code) {
    code = [...code];
    let mode = 0;
    const answer = code.filter( (char, idx) => {
        if(char == "1"){
            if(mode == 1) mode = 0;
            else mode = 1;
            return false;
        }else{
        return idx % 2 === mode;
        }
    })
    if ( answer.length === 0) return "EMPTY";
    else return answer.join('');
}

function solution22(a, d, included) {
    let acc = 0;
    included.forEach( (elem, idx ) => {
        acc += elem ? a + d*idx : 0; 
    })
    return acc;
}

function solution23(a, b, c) {
    let counter = 0;
    counter += a === b ? 1 : 0;
    counter += a === c ? 1 : 0;
    counter += b === c ? 1 : 0;
    if(counter === 0 ){
        return a + b + c;
    }else if (counter === 1){
        return (a + b +c) * (a**2 + b**2 + c**2);
    }else{
        return (a + b +c) * (a**2 + b**2 + c**2)*(a**3 + b**3 + c**3);
    }

}

function solution24(num_list) {
    let added = 0;
    let multiplied = 1;
    num_list.forEach( elem => {
      added += elem;
      multiplied *= elem;
    })
    return added**2 > multiplied ? 1 : 0;
}

function solution25(num_list) {
    let oddAdded = "";
    let evenAdded = "";
    num_list.forEach( elem => {
        if(elem % 2) oddAdded += String(elem);
        else evenAdded += String(elem);
    })
    return Number(oddAdded) + Number(evenAdded);
}
function solution26(num_list) {
    let len = num_list.length;
    let last = num_list[len-1];
    let beforeLast = num_list[len-2];
    
    if(last > beforeLast) {
        num_list.push(last - beforeLast);
    }else {
        num_list.push(last*2);
    }
    return num_list;
 }

 function solution27(n, control) {
    var answer = n;
    for (let i=0; i<control.length; i++){
        let char = control[i];
        switch(char){
            case 'w': answer += 1; break;
            case 's': answer -= 1; break;
            case 'd': answer += 10; break;
            case 'a': answer -= 10; break;
            default: console.log("erorr"); break;
        }
    }
    return answer;
}

function solution28(numLog) {
    var answer = '';
    for(let i = 1; i<numLog.length; i++){
        switch(numLog[i] - numLog[i -1])
        {
            case 1: answer += "w";break;
            case -1: answer += "s";break;
            case 10: answer += "d";break;
            case -10: answer += "a";break;
        }
    }
    return answer;
}

function swap(i,j,arr){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function solution29(arr, queries) {
    queries.forEach(elem =>{
        swap(elem[0],elem[1],arr);
    })
    return arr;
}

let answer = [];
function getSmallestElem(s,e,k,arr){
    let isQuerySatisfied = false;
    let minQueriedElem = 0;
    for(let i = s; i <=e ;i++){
        if(arr[i] > k){
            if(isQuerySatisfied){
                minQueriedElem = minQueriedElem < arr[i] ? minQueriedElem : arr[i];
            }
            else{
                minQueriedElem = arr[i];
                isQuerySatisfied = true;
            }
        }
    }
    if(isQuerySatisfied) answer.push(minQueriedElem);
    else answer.push(-1);
}
function solution30(arr, queries) {
    queries.forEach(elem =>{
        getSmallestElem(elem[0],elem[1],elem[2],arr);
    })
    return answer;
}