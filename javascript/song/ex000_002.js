// 문자열 앞의 n글자

function ex46SubStrString(my_string, n) {
  return my_string.substr(0, n);
}

//

// 접두사인지 확인하기

function ex47IsPrefix(my_string, is_prefix) {
  if (my_string.startsWith(is_prefix)) return 1;
  return 0;
}

//

// 문자열 뒤집기

function ex48ReverseString(my_string, s, e) {
  let revStr = my_string
    .split("")
    .slice(s, e + 1)
    .reverse()
    .join("");

  return my_string.slice(0, s) + revStr + my_string.slice(e + 1);
}
