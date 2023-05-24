// Navigation
const leftArr = document.getElementById("left");
const rightArr = document.getElementById("right");
const sections = document.getElementsByTagName("section");
const input = document.getElementsByTagName("input");

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("change", (e) => changeColor(e));
}

let currentSectionInView = 0;

leftArr?.addEventListener("click", () => changeSection(-1, 0));
rightArr?.addEventListener("click", () => changeSection(1, 0));

const changeSection = (action, index) => {
  if (action === 0) {
    currentSectionInView = index;
  } else {
    currentSectionInView = currentSectionInView + action;
  }

  sections[currentSectionInView].scrollIntoView({
    behavior: "smooth",
  });

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

const changeColor = (event) => {
  sections[currentSectionInView].style.backgroundColor = event.target.value;
};
