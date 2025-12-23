document.getElementById("contact_button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contactPopup").style.display = "flex";
});

document.getElementById("contact-popup-submit").addEventListener("click", function (e) {
  e.preventDefault();

  const submitBtn = e.target;
  const originalBtnText = submitBtn.innerText;
  
  // 1. Collect Data
  var email = document.getElementById("contact-popup-email").value;
  var message = document.getElementById("contact-popup-message").value;

  if (!email || !message) {
    alert("Please fill in all fields");
    return;
  }

  // 2. Visual Feedback
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  // 3. YOUR URL GOES HERE
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxHEQE9Usrgky741ircRMlMRHiAO53y_RGxRlxE8_lFJt9imHB8sCA0Oqk8jaaBBuM_/exec';

  fetch(scriptURL, {
    method: 'POST',
    mode: 'no-cors', // Crucial for bypassing CORS with Google Apps Script
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, message: message })
  })
  .then(() => {
    // 4. Success Handling
    console.log("Data successfully sent to Google Sheets!");
    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;

    // Show submission popup and hide form
    document.getElementById("contactPopup").style.display = "none";
    document.getElementById("submissionPopup").style.display = "flex";

    // Clear form for next use
    document.getElementById("contact-popup-email").value = "";
    document.getElementById("contact-popup-message").value = "";
  })
  .catch(error => {
    console.error('Submission error:', error);
    submitBtn.innerText = originalBtnText;
    submitBtn.disabled = false;
    alert("Something went wrong. Please try again.");
  });
});

function closeContactPopup() {
  document.getElementById("contactPopup").style.display = "none";
  document.getElementById("submissionPopup").style.display = "none";
}