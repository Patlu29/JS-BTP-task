const user = {
  name: "Prakash",
  from: "Tenkasi",
  work: "Intern-CD",
};

function displayUser() {
  let text = "";
  for (let [key, value] of Object.entries(user)) {
    text += key + ": " + value + "<br>";
  }
  document.getElementsByClassName("object-display")[0].innerHTML =
    text.toUpperCase();
}

displayUser();

function addEntry() {
  let inputKey = document.getElementsByClassName("input-key")[0].value;
  let inputValue = document.getElementsByClassName("input-value")[0].value;

  user[inputKey] = inputValue;
  displayUser();

  document.getElementsByClassName("input-key")[0].value = "";
  document.getElementsByClassName("input-value")[0].value = "";
}

function deleteKeyValue() {
  let inputDeleteKey =
    document.getElementsByClassName("input-delete-key")[0].value;

  delete user[inputDeleteKey];
  displayUser();

  document.getElementsByClassName("input-delete-key")[0].value = "";
}
