const myImage = document.querySelector("img");
const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

// Смена картинки при клике
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Logo.png") {
    myImage.setAttribute("src", "images/CHOSO.png");
  } else {
    myImage.setAttribute("src", "images/Logo.png");
  }
});

// Установка имени пользователя
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); // если имя не введено — повторить
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `NAMI is cool, ${myName}`;
  }
}

// Проверка имени при загрузке
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `NAMI is cool, ${storedName}`;
}

// Кнопка для смены имени
myButton.addEventListener("click", () => {
  setUserName();
});
