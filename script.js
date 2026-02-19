const statusDiv = document.getElementById("status");
statusDiv.addEventListener("click", () => {
if (cabinId && cabinDB[cabinId]) {
statusDiv.innerText = "✔ ELECTRICAL TEST IN PROGRESS";
statusDiv.style.background = "#16a34a";
statusDiv.style.cursor = "not-allowed";
statusDiv.style.opacity = "0.85";
} else {
alert("Invalid cabin. Scan barcode again.");
}
});
