function check_loggedin() {
  let state = $("#state").text();
  if (state == "Login") {
    alert("You must login first!");
  }
}
$(document).ready(function () {
  let remember = localStorage.getItem("remember");
  if (remember) {
    window.location.href = "../../../login_state/home/home.html";
  }
  // signup page for home
  $("#signup-entry").submit(function (x) {
    let signup_email = $("#signup_email").val();
    let signup_password = $("#signup_password").val();
    let signup_password_confirm = $("#signup_password_confirm").val();
    if (signup_password != signup_password_confirm) {
      alert("Password didn't match!");
    } else if (!signup_email || !signup_password || !signup_password_confirm) {
      alert("Please fill out all the entries.");
    } else {
      localStorage.setItem("email", signup_email);
      localStorage.setItem("password", signup_password);
      window.location.href = "../../../login_state/home/home.html";
    }
    x.preventDefault();
  });
  //end of signup page for home
  // login page for home
  $("#login-entry").submit(function (x) {
    let login_email = $("#login_email").val();
    let login_password = $("#login_password").val();
    let signup_email = localStorage.getItem("email");
    let signup_password = localStorage.getItem("password");
    let remember_me = $("#rememberme").prop("checked");
    if (remember_me) {
      localStorage.setItem("remember", remember_me);
    }
    if (login_email != signup_email || login_password != signup_password) {
      alert("Invalid e-mail or password!");
    } else {
      window.location.href = "../../../login_state/home/home.html";
    }

    x.preventDefault();
  });
  // end of login page for home
});
