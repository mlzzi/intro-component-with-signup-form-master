const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    setErrorFor(fname, "First name cannot be empty");
    document.getElementById("fname").placeholder = "";
  } else {
    setSuccessFor(fname);
  }

  if (lnameValue === "") {
    setErrorFor(lname, "Last name cannot be empty");
    document.getElementById("lname").placeholder = "";
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email name cannot be empty");
    document.getElementById("email").placeholder = "";
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    document.getElementById("email").value = "";
    document.getElementById("email").placeholder = "exemple@site.com";
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password name cannot be empty");
    document.getElementById("password").placeholder = "";
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form__control error";
  small.innerText = message;
}

function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
