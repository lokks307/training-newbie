function solution45(my_string, n) {
    return my_string.slice(0,n);
}

function solution46(my_string, is_prefix) {
    let prefixLen = is_prefix.length;
    return my_string.slice(0,prefixLen) === is_prefix ? 1 : 0;
}

const {revertString} = require( "./ex_031-045.js");

function solution47(my_string, s, e) {
    return revertString(my_string,[s,e]);
}

function solution48(my_string, m, c) {
    let answer = "";
    c = c-1;
    for (let i = 0 ; (i + c)<my_string.length;i+=m){
        answer+=my_string[i+c];
    }
    return answer;
}

function solution49(q, r, code) {
    var answer = '';
    for(let i = 0 ; (i+r) < code.length; i += q){
        answer += code[i + r];
    }
    return answer;
}

function solution50(my_string) {
    var answer = new Array(52).fill(0);
    for(idx in my_string){
        let ascii = my_string.charCodeAt(idx);
        if(ascii >= 97){
            answer[ascii - 71]++;
        }
        else{
            answer[ascii -65]++;
        }
    }
    return answer;
}

function solution51(n, k) {
    var answer = [];
    for(let i = k ; i<=n; i+=k){
        answer.push(i);
    }
    return answer;
}

function solution52(my_string, indices) {
    my_string = my_string.split('');
    for(elem of indices){
        my_string[elem] = "0";
    }
    my_string = my_string.filter(a => a !== "0").join('');
    return my_string;
}

function solution53(start, end_num) {
    var answer = [];
    for (;start >= end_num; start--){
        answer.push(start);
    }
    return answer;
}

function solution54(arr, idx) {
    let answer = -1;
    for( let i = idx ; i<arr.length; i++){
        if(arr[i] === 1) return i;
    }
    return answer;
}

function solution55(n, slicer, num_list) {
    var answer = [];
    let [a,b,c] = slicer;
    switch(n){
        case 1:
            for(let i = 0; i<=b ; i++){
                answer.push(num_list[i]);
            }
            break;
        case 2:
            for(let i = a; i<num_list.length ; i++){
                answer.push(num_list[i]);
            }
            break;
        case 3:
            for(let i = a; i<= b ; i++){
                answer.push(num_list[i]);
            }
            break;
        case 4:
            for(let i = a; i<= b ; i+= c){
                answer.push(num_list[i]);
            }
            break;
    }
    return answer;
}

function solution56(num_list) {
    var answer = -1;
    for (idx in num_list){
        if(num_list[idx] < 0) return Number(idx);
    }
    return answer;
}

function solution57(arr, intervals) {
    var answer = [];
    for([a,b] of intervals){
        answer = answer.concat(arr.slice(a,b+1));
    }
    return answer;
}

function solution58(arr) {
    let areaIndex = [];
    for (idx in arr ){
        if (arr[idx] === 2) areaIndex.push(+idx);
    }
    if(areaIndex.length === 0) return [-1];
    else if (areaIndex.length === 1) return [2];
    else{
        let startIndex = areaIndex[0];
        let endIndex = areaIndex[areaIndex.length - 1];
        return arr.slice(startIndex,endIndex+1);
    }
}

function solution59(arr, query) {
    for(idx in query){
        if( idx % 2 === 0){
            arr = arr.slice(0,query[idx]+1);
        }
        else{
            arr = arr.slice(query[idx]);
        }
    }
    return arr;
}

function solution60(num_list, n) {
    return num_list.slice(n-1);
}