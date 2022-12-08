const openButton = document.querySelector('#openOverlay');
const body = document.body;

openButton.addEventListener("click", e => {
  const overlayElement = document.createElement("div");
  overlayElement.classList.add("overlay");

  overlayElement.addEventListener("click", e => {
    if (e.target == overlayElement) {
      closeElement.click();
    }
  });

  const containerElemet = document.createElement("div");
  containerElemet.classList.add('modal-container');

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  contentElement.innerHTML = "Hello world!"

  const closeElement = document.createElement("a");
  closeElement.classList.add("close");
  closeElement.textContent = "x";
  closeElement.href = "#";

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    body.removeChild(overlayElement);
  });

  overlayElement.appendChild(containerElemet);
  containerElemet.appendChild(closeElement);
  containerElemet.appendChild(contentElement);
  body.appendChild(overlayElement);

})