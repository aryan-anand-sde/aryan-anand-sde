function TimeFormatter(contestTimestampSeconds) {
  const contestTimestampMilliseconds = contestTimestampSeconds * 1000;
  const dateObject = new Date(contestTimestampMilliseconds);
  const fullYear = dateObject.getFullYear();
  const year = fullYear.toString().slice(-2);
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObject.getDate().toString().padStart(2, "0");
  const customDate = `${month}-${year}`;
  return customDate;
}

const ac = document.getElementById("atCoderChart");
AtCoderChart();
function AtCoderChart() {
  let yAxis = ["Start", "08-25", "08-25", "09-25", "01-26"];
  let contestRating = [0, 10, 17, 38, 67];

  let data = {
    labels: yAxis,
    datasets: [
      {
        label: "Rating",
        data: contestRating,
        // --- Line Specific Styling ---
        borderColor: "#0077b6", // Color of the line
        backgroundColor: "#00b4d8", // Color under the line (optional)
        tension: 0.25, // Smoothness of the line (0 is sharp, 0.4 is smooth)
        fill: true, // Fills the area under the line
        pointRadius: 5, // Size of the data points
        pointHoverRadius: 9, // Size of data points on hover
      },
    ],
  };

  new Chart(ac, {
    type: "line",
    data: data,
    options: {
      // Optional configuration options
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "AtCoder Rating Curve",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
          },
        },
      },
    },
  });
}

const cc = document.getElementById("codechefChart");
CodechefChart();
function CodechefChart() {
  let yAxis = [
    "Start",
    "08-25",
    "08-25",
    "08-25",
    "08-25",
    "09-25",
    "09-25",
    "09-25",
    "10-25",
  ];
  let contestRating = [0, 916, 994, 1046, 1071, 1136, 1203, 1233, 1282];

  let data = {
    labels: yAxis,
    datasets: [
      {
        label: "Rating",
        data: contestRating,
        // --- Line Specific Styling ---
        borderColor: "#0077b6", // Color of the line
        backgroundColor: "#00b4d8", // Color under the line (optional)
        tension: 0.25, // Smoothness of the line (0 is sharp, 0.4 is smooth)
        fill: true, // Fills the area under the line
        pointRadius: 5, // Size of the data points
        pointHoverRadius: 9, // Size of data points on hover
      },
    ],
  };

  new Chart(cc, {
    type: "line",
    data: data,
    options: {
      // Optional configuration options
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Codechef Rating Curve",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
          },
        },
      },
    },
  });
}

const cf = document.getElementById("codeforcesChart");
CodeforcesChart();
async function CodeforcesChart() {
  let url = "https://codeforces.com/api/user.rating?handle=a_r_y_a_n_anand";
  let response = await fetch(url);
  let kaamKeCheez = await response.json();

  let yAxis = ["Start"];
  let contestRating = [0];
  let len = await kaamKeCheez.result.length;
  for (let i = 0; i < len; i++)
    contestRating.push(kaamKeCheez.result[i].newRating);
  for (let i = 0; i < len; i++)
    yAxis.push(TimeFormatter(kaamKeCheez.result[i].ratingUpdateTimeSeconds));

  let data = {
    labels: yAxis,
    datasets: [
      {
        label: "Rating",
        data: contestRating,
        // --- Line Specific Styling ---
        borderColor: "#0077b6", // Color of the line
        backgroundColor: "#00b4d8", // Color under the line (optional)
        tension: 0.25, // Smoothness of the line (0 is sharp, 0.4 is smooth)
        fill: true, // Fills the area under the line
        pointRadius: 5, // Size of the data points
        pointHoverRadius: 9, // Size of data points on hover
      },
    ],
  };

  new Chart(cf, {
    type: "line",
    data: data,
    options: {
      // Optional configuration options
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Codeforces Rating Curve",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: false,
          },
        },
      },
    },
  });
}
