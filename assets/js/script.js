// Navigation
const leftArr = document.getElementById("left");
const rightArr = document.getElementById("right");
const sections = document.getElementsByTagName("section");
const input = document.getElementsByTagName("input");

// Adding event listeners
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("change", (e) => changeColor(e));
}

leftArr?.addEventListener("click", () => changeSection(-1, 0));
rightArr?.addEventListener("click", () => changeSection(1, 0));

// State for current section
let currentSectionInView = 0;

const changeSection = (action, index) => {
  // Perform change
  if (action === 0) {
    currentSectionInView = index;
  } else {
    currentSectionInView = currentSectionInView + action;
  }

  // animate into view
  sections[currentSectionInView].scrollIntoView({
    behavior: "smooth",
  });

  // Update left and right arrow visibility
  if (currentSectionInView === 0) {
    leftArr?.classList.add("hide");
  } else {
    leftArr?.classList.remove("hide");
  }

  if (currentSectionInView === sections.length - 1) {
    rightArr?.classList.add("hide");
  } else {
    rightArr?.classList.remove("hide");
  }
};

// Change color
const changeColor = (event) => {
  sections[currentSectionInView].style.backgroundColor = event.target.value;
};
