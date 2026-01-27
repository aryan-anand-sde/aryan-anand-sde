async function FetchGitHubData() {
  const url = "https://api.github.com/users/aryan-anand-sde";
  let response = await fetch(url);
  let data = await response.json();

  const githubList = document.getElementById("github-list");

  let newItem = document.createElement("li");
  newItem.textContent = `Total Public Repos : ${data.public_repos}`;
  githubList.appendChild(newItem);
}

FetchGitHubData();
