document.getElementById("contact_button").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("contactPopup").style.display = "flex";
});

document.getElementById("contact-popup-submit").addEventListener("click", function (e) {
    e.preventDefault();

    var email = document.getElementById("contact-popup-email").value;
    var message = document.getElementById("contact-popup-message").value;

    console.log("Email: " + email + " Message: " + message);

    document.getElementById("contactPopup").style.display = "none";
    document.getElementById("submissionPopup").style.display = "flex";
});

function closeContactPopup() {
    document.getElementById("contactPopup").style.display = "none";
    document.getElementById("submissionPopup").style.display = "none";
}
