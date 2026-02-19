window.addEventListener("DOMContentLoaded", () => {

const cabinEl = document.getElementById("cabin");
const modelEl = document.getElementById("model");
const testButton = document.getElementById("testBtn");
const statusMsg = document.getElementById("statusMsg");

cabinEl.classList.remove("value");
cabinEl.offsetWidth;
cabinEl.classList.add("value");

modelEl.style.animation = "none";
modelEl.offsetHeight;
modelEl.style.animation = "slideIn 0.7s ease forwards";

testButton.addEventListener("click", () => {
if (cabinId && cabinDatabase[cabinId]) {
statusMsg.textContent = "✔ Electrical Test Started Successfully";
statusMsg.style.color = "green";
testButton.textContent = "TEST IN PROGRESS";
testButton.disabled = true;
} else {
alert("Invalid cabin. Scan barcode again.");
}
});
});
