const toggleElement = document.getElementById("toggle");
const stickElement = document.getElementById("stick");

toggleElement.addEventListener("click", () => {
  if (!toggleElement.classList.contains("toggle--no-events")) {
    toggleElement.classList.toggle("toggle--active");
    toggleElement.classList.add("toggle--no-events");
    if (!toggleElement.classList.contains("toggle--active")) {
      stickElement.classList.add("stick--right");
      setTimeout(() => stickElement.classList.remove("stick--right"), 1500);
    } else {
      stickElement.classList.add("stick--left");
      setTimeout(() => stickElement.classList.remove("stick--left"), 1500);
    }
    setTimeout(() => toggleElement.classList.remove("toggle--no-events"), 2000);
  }
});