const cabinDB = {
  "LCV240156": "DOST",
  "LCV240189": "PARTNER",
  "LCV240210": "BADA DOST",
  "LCV240250": "DOST PLUS"
};

const params = new URLSearchParams(window.location.search);
const cabinId = params.get("cabin");

const cabinElement = document.getElementById("cabin");
const modelElement = document.getElementById("model");

if (cabinId) {
  cabinElement.innerText = cabinId;
  modelElement.innerText = cabinDB[cabinId] || "MODEL NOT FOUND";
} else {
  cabinElement.innerText = "INVALID SCAN";
  modelElement.innerText = "--";
}
