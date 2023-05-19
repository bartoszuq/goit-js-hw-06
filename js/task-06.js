const input = document.querySelector("input#validation-input");
const inputValidatorLength = input.getAttribute("data-length");

input.addEventListener("blur", (event) => {
  const inputLength = input.value.length;

  if (inputLength == inputValidatorLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    console.log(`class: ${input.getAttribute("class")}`);
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    console.log(`class: ${input.getAttribute("class")}`);
  }
  console.log(`characters typed: ${inputLength}`);
  console.log(`estimated characters: ${inputValidatorLength}`);
  console.log("\n");
});
