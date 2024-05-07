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

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = Math.floor(dividend / divider);
});