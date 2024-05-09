// Selecting the form element using its data attribute
const form = document.querySelector("[data-form]");
// Selecting the result element using its data attribute
const result = document.querySelector("[data-result]");

// Adding event listener to the form for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

// Getting the values of dividend and divider inputs
const dividend = document.querySelector('input[name="dividend"]').value;
const divider = document.querySelector('input[name="divider"]').value;

// Checking if either dividend or divider is empty
if (dividend === "" || divider === "") {
  result.innerText = "Division not performed. Both values are required in inputs. Try again.";
  return;
}

// Checking if the divider is zero
if (parseInt(divider) === 0) {
  result.classList.add("error-message");
  result.innerText = "Division not performed. Invalid number provided. Try again";
  console.error("Error: Division by zero");
  return;
}

// Checking if either dividend or divider is not a number
if (isNaN(parseInt(dividend)) || isNaN(parseInt(divider))) {
  result.classList.add("critical-error");
  result.innerText = "Something critical went wrong. Please reload the page";
  console.error("Error: Invalid input provided");
  return;
}

// Calculating the quotient and displaying the result
const quotient = Math.floor((dividend) / (divider));
result.innerText = `${quotient}`;
});