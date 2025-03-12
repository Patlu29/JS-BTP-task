function colorChange() {
  let paragraphContent = document.getElementsByClassName("paragraph")[0];
  let colorButton = document.getElementsByClassName("buttonColorChange")[0];

  if (colorButton.innerHTML === "Red color") {
    paragraphContent.style.color = "red";
    colorButton.innerHTML = "Blue color";
  } else if (colorButton.innerHTML === "Blue color") {
    paragraphContent.style.color = "blue";
    colorButton.innerHTML = "Red color";
  }
}



function changeTheme () {
  let body = document.getElementsByClassName("body")[0];
  let themeButton = document.getElementsByClassName("themeModeButton")[0];

  if (themeButton.innerHTML === "Dark mode") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    themeButton.innerHTML = "Light mode";
  } else if (themeButton.innerHTML === "Light mode") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    themeButton.innerHTML = "Dark mode";
  }
}
