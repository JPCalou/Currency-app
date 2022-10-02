const currencyOne = document.getElementById("curr-one");
const currencyTwo = document.getElementById("curr-two");
const inputOne = document.getElementById("number-one");
const inputTwo = document.getElementById("number-two");
const changeButton = document.getElementById("change");
const exchange = document.getElementById("exchange");

// EVENTS

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
inputOne.addEventListener("input", calculate);
inputTwo.addEventListener("input", calculate);
changeButton.addEventListener("click", calculate);

changeButton.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

function calculate() {
  const currOne = currencyOne.value;
  const currTwo = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/cbf4085ba3ef4e798d866c85/latest/${currOne}`
  )
    .then((result) => result.json())
    .then((data) => {
      const rate = data.conversion_rates[currTwo];

      exchange.innerText = `1 ${currOne} = ${rate} ${currTwo}`;
      inputTwo.value = (inputOne.value * rate).toFixed(2);
    });
}
