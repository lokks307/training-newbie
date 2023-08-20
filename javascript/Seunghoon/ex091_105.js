//세 개의 구분자
function ex91(myStr) {
  let changeAB = [...myStr]
    .map((str) => {
      if (str === "a" || str === "b") return (str = "c");
      return str;
    })
    .join("")
    .split("c");

  changeAB = changeAB.filter((str) => str !== "");

  if (changeAB.length === 0) return ["EMPTY"];
  return changeAB;
}

//배열의 원소만큼 추가하기
function ex92(arr) {
  let result = [];

  for (const num of arr) {
    for (let i = 0; i < num; i++) {
      result.push(num);
    }
  }
  return result;
}
