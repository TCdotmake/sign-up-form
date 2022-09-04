const pwd = document.getElementById("password");
const pwdConfirm = document.getElementById("password_confirm");
const msg = document.getElementById("pwdMsg");
let pwdMatch = false;
const noMatch = `<span style="color: red; padding-right: 7ch"
>* Passwords do not match</span
>`;
const match = `<span style="color: blueviolet; padding-right: 15ch"
>Password match</span
>`;
function compareValue(a, b) {
  if (a.value === "" && b.value === "") {
    return false;
  } else return a.value === b.value;
}

function updateMsg() {
  if (!pwdMatch) {
    msg.innerHTML = noMatch;
  } else {
    msg.innerHTML = match;
  }
}

pwd.addEventListener("input", (e) => {
  pwdMatch = compareValue(pwd, pwdConfirm);
  updateMsg();
});
pwdConfirm.addEventListener("input", (e) => {
  pwdMatch = compareValue(pwd, pwdConfirm);
  updateMsg();
});

updateMsg();
