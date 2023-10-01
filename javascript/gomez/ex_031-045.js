function isFactor(i,k){
    return i % k === 0;
}
function calQuery(queryElem,arr){
    let [s,e,k] = queryElem;
    for(let i = s ; i <= e; i++){
        if(isFactor(i,k)) arr[i] += 1;
    }
    return arr;
}
function solution31(arr, queries) {
    queries.forEach(elem => {
        calQuery(elem,arr);
    });
    return arr;
}


function checkZeroFive(elem){
    elem = String(elem);
    for(const e of elem ){
        if(e !== "5" && e !== "0") return false; 
    }
    return true;
}
function solution32 (l ,r ) {
    let arr = [];
    for(let i = l; i <= r; i++){
        if(checkZeroFive(i)) arr.push(i);
    }
    if(arr.length === 0) return [-1];
    else return arr;
}

function createRangeArr(s,e){
    let arr = [];
    for(let i = s; i<=e;i++){
        arr.push(i);
    }
    return arr;
}
function solution33(start_num, end_num) {
    return createRangeArr(start_num,end_num);
}

function makeCollatz(n, arr){
    arr.push(n);
    if( n === 1) return arr;
    
    if(n  % 2 === 0) return makeCollatz(n/2,arr);
    else return makeCollatz(3*n+1,arr);
}
function solution34(n) {
    return makeCollatz(n,[]);
}

function solution35(arr){
    let i = 0;
    let stk = [];
    for(let i = 0; i < arr.length;){
        if(stk.length === 0){
            stk.push(arr[i++]);
        }
        else{
            if(stk[stk.length - 1] < arr[i]){
                stk.push(arr[i++]);
            }
            else{
                stk.pop();
            }
        }
    }
    return stk;
}

function solution36(x1, x2, x3, x4) {
    return (x1 || x2 ) && (x3 || x4);
}


function checkCase(counter,a,b,c,d){
    let temp = [];
    //case check
    switch(Object.keys(counter).length){
        case 4:
            return Math.min(a,b,c,d);
        case 3:
            for( key in counter){
                 if (counter[key] === 1) temp.push(key);
            }
            return Number(temp[0]) * Number(temp[1]);
        case 2:
            temp = Object.keys(counter);
            let p = Number(temp[0]);
            let q = Number(temp[1]); 
            if(counter[temp[0]]===2){  
                return (p +q ) * Math.abs(p-q);
            }
            else if(counter[temp[0]]===3){
                return (10*p + q) **2;
            }
            else{
                return (10*q + p) **2;
            }
            
        case 1:
            return 1111*a;
    }
}
function solution37(a, b, c, d) {
    let counter = {};
    counter[a] = 0;
    counter[b] = 0;
    counter[c] = 0;
    counter[d] = 0;
    counter[a] +=1 ;
    counter[b] +=1 ;
    counter[c] +=1 ;
    counter[d] +=1 ;
    return checkCase(counter,a,b,c,d);
}

function solution38(my_string, index_list) {
    let answer = "";
    my_string = my_string.split("");
    for (elem of index_list){
        answer += my_string[elem];
    }
    return answer;
}

function solution39(number) {
    let acc = 0;
    for(elem of number){
        acc += Number(elem);
    }
    return acc % 9;
}

function revertString(string, query){
    let temp = string.split('');
    string = string.split('');
    for (let i = query[0], j = query[1]; i <= query[1] ; i++){
        string[i] = temp[j];
        j--;
    }
    return string.join('');
}
module.exports = {revertString};
function solution40(my_string, queries) {
    for (elem of queries){
        my_string = revertString(my_string,elem);
    }
    return my_string;
}

function solution41(intStrs, k, s, l) {
    let answer = [];
    for( elem of intStrs){
        let extractedNumber  = Number(elem.slice(s,s+l));
        if(extractedNumber > k) answer.push(extractedNumber);
    }
    return answer;
}

function solution42(my_strings, parts) {
    var answer = '';
    for(let i = 0 ; i< my_strings.length;i++){
        let [s,e] = parts[i];
        answer += my_strings[i].slice(s,e+1);
    }
    return answer;
}

function solution43(my_string, n) {
    let len = my_string.length;
    return my_string.slice(len - n, len + 1);
}

function solution44(my_string) {
    var answer = [];
    let len = my_string.length;
    for(let i = 0; i < len; i++){
        answer.push(my_string.slice(i,len + 1));
    }
    answer.sort((a,b) => b.localeCompare(a));
    return answer;
}

function solution45(my_string, is_suffix) {
    let myStringLen = my_string.length;
    let suffixLen = is_suffix.length;
    return my_string.slice(myStringLen-suffixLen,myStringLen) === is_suffix ? 1 : 0;
}