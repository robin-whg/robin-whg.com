const body = document.querySelector("html");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  body.classList.add("dark");

document
  .querySelector("#darkModeToggle")
  .addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  console.log("test");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
