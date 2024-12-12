import { showLoadingSpinner, hideLoadingSpinner, showModal } from "./util.js";
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = document.getElementById("contactForm");
    var formData = new FormData(form);

    showLoadingSpinner();

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        // Hide the loading spinner
        hideLoadingSpinner();

        if (result.success) {
          showModal("Success", "Message has been sent successfully!");
        } else {
          showModal(
            "Error",
            result.error
              ? `Message could not be sent. Error: ${result.error}`
              : "Message could not be sent. Please try again later."
          );
        }
      })
      .catch((error) => {
        // Hide the loading spinner
        hideLoadingSpinner();

        showModal(
          "Error",
          "Message could not be sent. Please try again later."
        );
      });
  });
