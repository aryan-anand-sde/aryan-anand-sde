const mediaQuery = window.matchMedia("(max-width: 775px)");
const card = document.getElementById("screen-size");

function handleClassRemoval(e) {
  // 'e.matches' is true if the media query currently matches (i.e., screen is small)
  if (e.matches) {
    // Small screen reached: remove the class
    card.classList.remove("col-9");
    // console.log(`Class "${"col-9"}" removed.`);
  } else {
    // Large screen: add the class back (optional, but good practice)
    card.classList.add("col-9");
    // console.log(`Class "${"col-9"}" added.`);
  }
}

handleClassRemoval(mediaQuery);

// Listen for future changes in screen size (when the breakpoint is crossed)
mediaQuery.addEventListener("change", handleClassRemoval);
