const textAreaElement = document.getElementById("textarea");

const totalCounter = document.getElementById("total-counter");

const remainingCounter = document.getElementById("remaining-counter");

textAreaElement.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  totalCounter.innerText = textAreaElement.value.length;

  remainingCounter.innerText =
    textAreaElement.getAttribute("maxLength") - textAreaElement.value.length;
}
