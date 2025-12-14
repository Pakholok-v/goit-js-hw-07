
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {

  const rawValue = event.currentTarget.value;
  
  const trimmedValue = rawValue.trim();

  if (trimmedValue === "") {
    // Якщо порожнє, встановлюємо "Anonymous"
    nameOutput.textContent = "Anonymous";
  } else {
    // Якщо не порожнє, встановлюємо обрізане значення як ім'я
    nameOutput.textContent = trimmedValue;
  }
});
