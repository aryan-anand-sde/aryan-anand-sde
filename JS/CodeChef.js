async function FetchCodechefData() {
  const gfgList = document.getElementById("codechef-list");

  let newItem = document.createElement("li");
  newItem.innerHTML = "&star;&star; Coder";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Current Rating  : 1438";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Global Rank : 36908";
  gfgList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = "Country Rank : 34234";
  gfgList.appendChild(newItem);
}

FetchCodechefData();
