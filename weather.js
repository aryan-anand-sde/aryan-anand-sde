import { LocationData } from "./Location.js";

Info();
async function Info() {
  try {
    let data = await LocationData();
    let lat = data.latitude;
    let lon = data.longitude;
    weather(lat, lon);
  } catch (error) {
    console.log("Location data not found");
  }
}

async function weather(lat, lon) {
  let photo = document.getElementById("pic");
  let wet = document.getElementById("weather");
  let url = `https://api.weatherapi.com/v1/current.json?key=f7004a0cf1dc496497c162215250410&q=${lat},${lon}`;
  try {
    let response = await fetch(url);
    let data = await response.json();
    let temp = data.current.temp_c;
    let cond = data.current.condition.text;
    let pic = data.current.condition.icon;
    wet.innerHTML = `${temp} (${cond})`;
    photo.src = pic;
  } catch {
    console.log("Error fetching weather data.");
  }
}
