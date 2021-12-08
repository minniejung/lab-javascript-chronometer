const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null;

function printTime() {
  // ... your code goes here
  //chronometer.start(callback); //?

  printMinutes();
  printSeconds();
}

function printMinutes() {
  // ... your code goes here
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.textContent = minutes[0];
  minUniElement.textContent = minutes[1];
  // * same as minDecElement.textContent ?
}

function printSeconds() {
  // ... your code goes here
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.textContent = seconds[0];
  secUniElement.textContent = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  let newLi = document.createElement('li');
  let timeText = document.createTextNode(chronometer.split());

  newLi.appendChild(timeText);
  splitsElement.appendChild(newLi);

  splitsElement.textContent[0];
  }

function clearSplits() {
  // ... your code goes here
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.classList.remove('start');
  btnLeftElement.classList.add('stop');
  // chronometer.start(printTime);
  console.log("setStopBtn")
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.classList.remove('reset');
  btnRightElement.classList.add('split');
}

function setStartBtn() {
  // ... your code goes here
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.classList.remove('stop');
  btnLeftElement.classList.add('start');
  // chronometer.stop();
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.classList.remove('split');
  btnRightElement.classList.add('reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  
 // if (btnLeft.innerHTML === "START") { /***** askkk */ ?

  if (btnLeftElement.classList.contains("start")) {
    setStopBtn(); 
    chronometer.start(printTime);
    setSplitBtn();
  }
  else {
    setStartBtn();
    chronometer.stop();
    setResetBtn();
  }

  // if (btnLeftElement.classList.contains("start")) {
  // if (btnLeftElement.classList.includes("start")) {

});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here

 // if (btnRight.innerHTML === "RESET") { ?
  if (btnRightElement.classList.contains("reset")) {
    clearSplits();
    chronometer.reset();
    printTime();
  }
  else {
    printSplit();
  };

});
