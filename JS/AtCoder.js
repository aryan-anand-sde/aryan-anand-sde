const atCoderList = document.getElementById("atCoder-list");

let newItem = document.createElement("li");
newItem.innerHTML = "Gray Coder";
atCoderList.appendChild(newItem);

newItem = document.createElement("li");
newItem.textContent = "Rated Matches  : 5";
atCoderList.appendChild(newItem);

newItem = document.createElement("li");
newItem.textContent = "Current Rating  : 110 (11 Kyu)";
atCoderList.appendChild(newItem);
