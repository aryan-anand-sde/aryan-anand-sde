const ctx = document.getElementById("myLineChart");

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

// Example usage (assuming an arbitrary timestamp):
// For a timestamp corresponding to 2025-09-24
// (the date you mentioned in your profile, which is a neat coincidence!)
// let exampleTimestamp = 1758787200; // Sept 24, 2025 in seconds
// TimeFormatter(exampleTimestamp); // Output: "09-25"

CodeforcesData();
async function CodeforcesData() {
  let url = "https://codeforces.com/api/user.rating?handle=a_r_y_a_n_anand";
  let response = await fetch(url);
  let kaamKeCheez = await response.json();

  let dot = ["Start"];
  let contestRating = [0];
  let len = await kaamKeCheez.result.length;
  for (let i = 0; i < len; i++)
    contestRating.push(kaamKeCheez.result[i].newRating);
  for (let i = 0; i < len; i++)
    dot.push(TimeFormatter(kaamKeCheez.result[i].ratingUpdateTimeSeconds));

  let data = {
    labels: dot,
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

  new Chart(ctx, {
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
