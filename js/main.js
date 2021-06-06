var getUsername = prompt("whats ur name");

console.log(getUsername);

document.getElementById("username").innerText = getUsername;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })