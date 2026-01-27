const atCoderList = document.getElementById("atCoder-list");

let newItem = document.createElement("li");
newItem.innerHTML = "Gray Coder";
atCoderList.appendChild(newItem);

newItem = document.createElement("li");
newItem.textContent = "Rated Matches  : 4";
atCoderList.appendChild(newItem);

newItem = document.createElement("li");
newItem.textContent = "Current Rating  : 67 (12 Kyu)";
atCoderList.appendChild(newItem);
