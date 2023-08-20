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
