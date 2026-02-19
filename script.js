const cabinEl = document.getElementById("cabin");
const modelEl = document.getElementById("model");

cabinEl.classList.remove("value");
void cabinEl.offsetWidth; // reflow
cabinEl.classList.add("value");

modelEl.style.animation = "none";
modelEl.offsetHeight;
modelEl.style.animation = "slideIn 0.7s ease forwards";