let answer = document.getElementById("answerInput");

let result = document.getElementById("showResult");

let maxNum = (document.getElementById("maxNum").innerHTML = 10);

let minNum = (document.getElementById("minNum").innerHTML = 1);

let theAnswerIs = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

let maxInput = document.getElementById("maxInput");
maxInput.value = 10;

let minInpnut = document.getElementById("minInput");
minInpnut.value = 1;

let decimals = document.getElementById("decimals");

let dec = document.getElementById("dec");
dec.innerHTML = decimals.value;

let andTheResult = document.getElementById("andTheResult");
andTheResult.addEventListener("click", theResult);

function theResult() {
  if (answer.value === theAnswerIs || Number(answer.value) === theAnswerIs) {
    result.innerHTML = "Correct, you've guess it!";
  } else if (answer.value === "") {
    result.innerHTML = "You din't type in anything yet...";
  } else {
    result.innerHTML = "Wrong, try again!";
  }
}

let genRanNum = document.getElementById("genRanNum");
genRanNum.disabled = false;
genRanNum.addEventListener("click", generate);

function generate() {
  maxNum = document.getElementById("maxNum").innerHTML = (Math.random() * (maxInput.value - minInpnut.value) + Number(minInpnut.value)).toFixed(decimals.value);

  minNum = document.getElementById("minNum").innerHTML = (Math.random() * (maxNum - minInpnut.value) + Number(minInpnut.value)).toFixed(decimals.value);

  theAnswerIs = (Math.random() * (maxNum - minNum) + Number(minNum)).toFixed(decimals.value);

  answer.value = "";

  result.innerHTML = "";

  if (maxNum === minNum) {
    generate();
  }
}

maxInput.addEventListener("input", check);

minInpnut.addEventListener("input", check);

function check() {
  if (maxInput.value === "" || minInpnut.value === "" || Number(minInpnut.value) >= Number(maxInput.value)) {
    genRanNum.disabled = true;
  } else {
    genRanNum.disabled = false;
  }
}

decimals.addEventListener("input", decVal);

function decVal() {
 dec.innerHTML = decimals.value;
}
