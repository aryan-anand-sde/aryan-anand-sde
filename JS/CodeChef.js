async function FetchCodechefData() {
  const gfgList = document.getElementById("codechef-list");

  let newItem = document.createElement("li");
  newItem.innerHTML = "&star; Coder";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Current Rating  : 1390";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Global Rank : 46668";
  gfgList.appendChild(newItem);
}

FetchCodechefData();
