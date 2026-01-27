setInterval(() => {
  Time();
}, 1000);

function Time() {
  let now = new Date();
  let hours = now.getHours();
  let AMPM = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let day = now.getDate();
  let month = now.getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = now.getFullYear();
  let time = document.getElementById("time");
  time.innerHTML = `${hours}:${minutes} ${AMPM}, ${day} - ${monthNames[month]}, ${year}`;
}
