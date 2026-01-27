async function FetchGeeksforGeeksData() {
  let url = "https://geeks-for-geeks-api.vercel.app/aryan_anand";
  let response = await fetch(url);
  let data = await response.json();

  const gfgList = document.getElementById("gfg-list");

  let newItem = document.createElement("li");
  newItem.textContent = `Total Questions Solved : ${data.info.totalProblemsSolved}`;
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Institute Rank : ${data.info.instituteRank}`;
  gfgList.appendChild(newItem);
}

FetchGeeksforGeeksData();
