import words from "./dataArr1.js";
var inputString = document.getElementsByClassName("inp")[0];
var submitBtn = document.getElementsByClassName("btn")[0];
let queryString = "";

let subSeq = [];
//For grabbing all the subsequences of the given string.
function recur(arrSt, ind, ds) {
  if (ind === arrSt.length) {
    if (ds.length >= 3) {
      let temp = ds;
      subSeq.push(ds.split("").sort().join(""));
    }
    return;
  }
  ds = ds + arrSt[ind];
  recur(arrSt, ind + 1, ds);
  ds = ds.slice(0, ds.length - 1);
  recur(arrSt, ind + 1, ds);
}

submitBtn.addEventListener("click", function () {
  let queryString = String(inputString.value);
  let string = queryString;
  let ds = "";
  const arrSt = string.split("");
  recur(arrSt, 0, ds);

  let sizeThree = [];
  let sizeFour = [];
  let sizeFive = [];
  let sizeSix = [];

  for (let index = 0; index < words.length; index++) {
    let mainStr = words[index];
    const element = mainStr.split("").sort().join("");
    for (let j = 0; j < subSeq.length; j++) {
      if (subSeq[j].includes(element)) {
        if (element.length == 3) {
          if (!sizeThree.includes(mainStr)) sizeThree.push(words[index]);
        }
        if (element.length == 4) {
          if (!sizeFour.includes(mainStr)) sizeFour.push(words[index]);
        }
        if (element.length == 5) {
          if (!sizeFive.includes(mainStr)) sizeFive.push(words[index]);
        }
        if (element.length == 6) {
          if (!sizeSix.includes(mainStr)) sizeSix.push(words[index]);
        }
      }
    }
  }
  document.getElementsByClassName("three")[0].textContent = sizeThree[0];
  document.getElementsByClassName("four")[0].textContent = sizeFour;
  document.getElementsByClassName("five")[0].innerHTML = sizeFive;
  document.getElementsByClassName("six")[0].innerHTML = sizeSix;

  // console.log(sizeThree + "\n");
  // console.log(sizeFour + "\n");
  // console.log(sizeFive + "\n");
  // console.log(sizeSix + "\n");
});
