const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

const dividend = document.querySelector('input[name="dividend"]').value;
const divider = document.querySelector('input[name="divider"]').value;

if (dividend === "" || divider === "") {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return;
}

if (parseInt(divider) === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again";
  console.error("Error: Division by zero");
  return;
}

const quotient = Math.floor(parseInt(dividend) / parseInt(divider));
result.innerText = `${quotient}`;
});