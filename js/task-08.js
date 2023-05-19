const form = document.querySelector("form.login-form");

function submitForm(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const result = {
    email: email.value,
    password: password.value,
  };
  console.log(result);

  event.currentTarget.reset();
}

form.addEventListener("submit", submitForm);

// !!!!!!czyści wypełnione przez urzytkownika okienka!!!!!!
// event.currentTarget.reset();

// !!!!!!blokuje domyślne zachowania zdarzenia, w tym przypadku odświeżanie strony!!!!!!
// event.preventDefault();
