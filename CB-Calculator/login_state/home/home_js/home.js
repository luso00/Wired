function logout() {
  localStorage.removeItem("remember");
  window.location.href = "../../../logout_state/home/home.html";
}
