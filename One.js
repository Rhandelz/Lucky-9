let cone = document.querySelector("#c1");
let ctwo = document.querySelector("#c2");
let res = document.querySelector("#res");
let ext = document.querySelector("#c3");

function rand() {
  let num = Math.floor(Math.random() * 9);
  return num;
}

let cardone = rand();
let cardTwo = rand();
let sum = cardone + cardTwo;
let arr = [];

function play() {
  if (arr.length <= 0) {
    arr.push(cardone);
    arr.push(cardTwo);
    cone.textContent += cardone;
    ctwo.textContent += cardTwo;
  } else {
  }

  if (sum > 10) {
    sum -= 10;
  }

  if (sum === 9) {
    res.textContent = "You've got Lucky 9!";
  } else if (sum >= 5) {
    res.textContent = "So Close!";
  } else {
    res.textContent = "So low i think!";
  }
}

function extra() {
  let cthrd = rand();

  if (arr.length > 0) {
    if (arr.length <= 2) {
      sum += cthrd;
      arr.push(cthrd);
      ext.textContent += cthrd;
      play();
    }
  }
}
