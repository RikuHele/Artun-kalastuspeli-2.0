const menu = document.getElementById("menu");
const help = document.getElementById("help");

document.getElementById("start-button").addEventListener("click", () => {
  window.location.href = "game.html";
});

document.getElementById("help-button").addEventListener("click", () => {
  menu.hidden = true;
  help.hidden = false;
  document.getElementById("back-button").focus();
});

document.getElementById("back-button").addEventListener("click", () => {
  help.hidden = true;
  menu.hidden = false;
  document.getElementById("help-button").focus();
});
