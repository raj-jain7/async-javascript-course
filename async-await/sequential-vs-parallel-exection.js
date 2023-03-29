function getFirstNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 4000);
  });
}

function getSecondNumber() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 4000);
  });
}
// In sequence
async function inSequence() {
  const firstNumber = await getFirstNumber();
  const secondNumber = await getSecondNumber();
  console.log(firstNumber, secondNumber);
}

inSequence();

// In parallel
async function inParallel() {
  const promise1 = getFirstNumber();
  const promise2 = getSecondNumber();
  const firstNumber = await promise1;
  const secondNumber = await promise2;
  console.log("In Parallel: " + firstNumber);
  console.log("In Parallel: " + secondNumber);
}

inParallel();
