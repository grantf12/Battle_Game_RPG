$(document).ready(() => {
  $("#battle-button").click(() => {
    window.location.href = "/character-select";
  });
  $("#signout-button").click(() => {
    window.location.href = "/login";
  });
});
$.get("/api/user_data").then(data => {
  $("#member-name").text(data.email);
});
