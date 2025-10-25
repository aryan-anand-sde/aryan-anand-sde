export async function LocationData() {
  let regionP = document.getElementById("region");
  const url = "https://get.geojs.io/v1/ip/geo.json";
  try {
    let response = await fetch(url);
    let data = await response.json();
    regionP.innerHTML = `${data.city}, ${data.region}, ${data.country} - ${data.country_code}`;
    return data;
  } catch (error) {
    console.error("Failed to fetch location data:", error);
    return null;
  }
}
