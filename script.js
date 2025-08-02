// Update current time every second
function updateCurrentTime() {
  const currentTimeElem = document.getElementById("currentTime");
  const now = new Date();
  currentTimeElem.textContent = now.toString();
}

// Initial update and interval setup
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Handle form submission and display input values
const form = document.getElementById("messageForm");
const displayName = document.getElementById("displayName");
const displayDate = document.getElementById("displayDate");
const displayGender = document.getElementById("displayGender");
const displayMessage = document.getElementById("displayMessage");
const displayInfo = document.getElementById("displayInfo");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Check form validity
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Gather form values
  const name = form.name.value.trim();
  const tanggalLahir = form.tanggalLahir.value;
  const jenisKelamin = form.jenisKelamin.value;
  const pesan = form.pesan.value.trim();

  // Display values
  displayName.textContent = name || "-";
  displayDate.textContent = tanggalLahir || "-";
  displayGender.textContent = jenisKelamin || "-";
  displayMessage.textContent = pesan || "-";

  // Accessibility focus for updated info region
  displayInfo.focus();
});
