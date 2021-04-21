const body = document.querySelector("html");
const container = document.querySelector("#container");

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  body.classList.add("dark");

document
  .querySelector("#darkModeToggle")
  .addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

async function getRepos() {
  const url = "https://api.github.com/users/robin-whg/repos";
  const { data } = await axios.get(url);
  data.forEach((x) => {
    insertCard(x);
  });
}

function insertCard(x) {
  container.insertAdjacentHTML(
    "beforeend",
    `
    <div class="bg-gray-50 dark:bg-gray-900 py-4 px-8 rounded-xl flex flex-col">
    <h3 class="mb-2">${x.name}</h3>
    <p class="mb-2 text-gray-700 dark:text-gray-300">
      ${x.description}
    </p>
    <a
      target="_blank"
      class="flex items-center text-blue-500"
      href="${x.html_url}"
      >github
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ml-1 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  </div>
  `
  );
}

getRepos();
