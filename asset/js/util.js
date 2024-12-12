document.querySelector("#modal button").addEventListener("click", function () {
  const modal = document.getElementById("modal");

  modal.classList.remove("animate-fadeIn");
  modal.parentNode.classList.add("hidden");
});

export function showLoadingSpinner() {
  var spinner = document.getElementById("loadingSpinner");
  spinner.classList.remove("hidden");
}

export function hideLoadingSpinner() {
  var spinner = document.getElementById("loadingSpinner");
  spinner.classList.add("hidden");
}

export function showModal(title, message) {
  var modal = document.getElementById("modal");

  document.querySelector("#modal h2").textContent = title;
  document.querySelector("#modal p").textContent = message;
  modal.parentNode.classList.remove("hidden");
  modal.classList.add("animate-fadeIn");
}
