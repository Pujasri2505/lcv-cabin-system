const cabinDB = {
  "TRRS904929": "DOST A/C", 
  "TSRS901733": "DOST NON A/C", 
  "TRRS702501": "BADA DOST A/C LX", 
  "TRRS702571": "BADA DOST NON A/C LS", 
  "TRRS904501": "SAATHI A/C", 
  "TRRS904342": "SAATHI NON A/C", 
  "TRRS904658": "DOST EV", 
  "TRRS702453": "BADA DOST I5 A/C LX", 
  "TRRS702721": "BADA DOST I5 NON A/C", 
  "TRRS702320": "BADA DOST CNG", 
  "SCRS718973": "BADA DOST 3.8T BLOWER", 
  "TRRS800238": "PARTNER A/C BS6", 
  "TSRS800212": "PARTNER NON A/C BS3", 
  "TRRS702698": "BADA DOST EV"
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
