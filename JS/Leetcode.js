async function FetchLeetcodeData() {
  let url = "https://leetcode-api-faisalshohag.vercel.app/a_r_y_a_n_anand";
  let response = await fetch(url);
  let data = await response.json();

  const leetcodeList = document.getElementById("leetcode-list");

  let newItem = document.createElement("li");
  newItem.textContent = "Current Rating : 1360";
  leetcodeList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Total Questions Solved : ${data.totalSolved} out of ${data.totalQuestions}`;
  leetcodeList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Total Easy Questions Solved : ${data.easySolved} out of ${data.totalEasy}`;
  leetcodeList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Total Medium Questions Solved : ${data.mediumSolved} out of ${data.totalMedium}`;
  leetcodeList.appendChild(newItem);

  newItem = document.createElement("li");
  newItem.textContent = `Total Hard Questions Solved : ${data.hardSolved} out of ${data.totalHard}`;
  leetcodeList.appendChild(newItem);
}

FetchLeetcodeData();
