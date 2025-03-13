const jsonArr = {
  users: [
    {
      id: 0,
      name: "akash",
      role: "ass-manager",
      age: 22,
      location: "dubai",
      education: "diplomo",
      assets: ["laptop", "mobile", "pad", "ipod", "bmw", "duke"],
    },
    {
      id: 1,
      name: "prakash",
      role: "developer",
      age: 21,
      location: "india",
      education: "BE",
      assets: ["laptop", "mobile", "ipod", "rolls royse", "duke"],
    },
  ],
};



function jsonDetails() {
    let text = "";
  for (let [key, value] of Object.entries(jsonArr.users[1])) {
    text += "<b>" + key + ": " + value + "<b><br>";
  }
  console.log(text)
  document.getElementsByClassName("jsonDisplay")[0].innerHTML = text.toUpperCase();
}
jsonDetails()
