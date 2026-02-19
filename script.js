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
const commonParams = [
  "Ignition Switch",
  "Parking & Roof Marker",
  "Head Lamp Low Beam",
  "Head Lamp High Beam",
  "Head Lamp Pass",
  "Indicator LH",
  "Indicator RH",
  "Windscreen Washer",
  "Wiper Low Speed",
  "Wiper High Speed",
  "Hazard Switch",
  "Interior Lamp",
  "DPF Switch"
];
const modelExtraParams = {
  "For A/C Models": [
    "Blower 1",
    "Blower 2",
    "Blower 3",
    "Blower 4"
  ]
};
