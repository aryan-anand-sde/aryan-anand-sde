async function FetchCodeforcesData() {
  let url = "https://codeforces.com/api/user.info?handles=a_r_y_a_n_anand";
  let response = await fetch(url);
  let data = await response.json();

  const gfgList = document.getElementById("codeforces-list");

  let newItem = document.createElement("li");
  newItem.textContent = `Current Rating : ${data.result[0].rating}`;
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Max Rating : ${data.result[0].maxRating}`;
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Max Rank : ${data.result[0].maxRank}`;
  gfgList.appendChild(newItem);
}

FetchCodeforcesData();
