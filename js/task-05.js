const spanOutput = document.querySelector(`span#name-output`);
const spanInput = document.querySelector(`input#name-input`);

// function nameUpdate(name) {
//   spanOutput.textContent = name;
//   spanOutput.textContent = "Anonymous";
// }

// spanOutput.textContent = "Anonymous";

document.addEventListener("input", () => {
  spanInput.value === ""
    ? (spanOutput.textContent = "Anonymous")
    : (spanOutput.textContent = spanInput.value);
  // if (spanInput.value === "") {
  //   spanOutput.textContent = "Anonymous";
  // } else if (spanInput.value !== "") {
  //   spanOutput.textContent = spanInput.value;
  // }
});
// nameUpdate(spanInput.textContent);

// if (spanInput.textContent === "") {
//     spanOutput.textContent = "Anonymous";
// } else if (spanInput.textContent !== "") {
//     spanOutput.textContent = "dick";
// }
