async function FetchCodechefData() {
  const gfgList = document.getElementById("codechef-list");

  let newItem = document.createElement("li");
  newItem.innerHTML = "1 &star; Coder";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Current Rating  : 1282";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Max Rank : ${data.result[0].maxRank}`;
  gfgList.appendChild(newItem);
}

FetchCodechefData();
