function logout() {
  localStorage.removeItem("remember");
  window.location.href =
    "../../../logout_state/important_terms_and_table/ITT.html";
}
