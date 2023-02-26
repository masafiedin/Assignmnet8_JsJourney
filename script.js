let publicIp;
let locationInfo;
var continueButton = document.getElementById("continueButton");
var formCheckPassed = 0;
var countcontrol = 0;

function submitForm() {
  validateForm();
  if (formCheckPassed == 1) {
    return false;
  }
}

function validateForm() {
  //Calling a function during form submission.

  const passRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
  const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let password = document.forms["myForm"]["password"].value;
  let userName = document.forms["myForm"]["userName"].value;
  let verify = document.forms["myForm"]["passwordRep"].value;

  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (userName == "") {
    alert("user Name must be filled out");
    return false;
  }
  if (!emailregex.test(email)) {
    alert("Please input a valid email address!");
    return false;
  }
  if (!passRegex.test(password)) {
    alert(
      "Password Invalid, should be at least 8 characters,has at least 1 number, 1 uppercase letter, & 1 non alpha-numeric character"
    );
    return false;
  }
  if (password !== verify) {
    alert("Password should match!");
    return false;
  }
  formCheckPassed = 1;
}

async function getPublicIP() {
  return new Promise((resolve, reject) => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => resolve(data.ip))
      .catch((error) => reject(error));
  });
}

async function getLocation(ipAddress) {
  const url = `https://get.geojs.io/v1/ip/geo/${ipAddress}.json`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    city: data.city,
    country: data.country_name,
  };
}

function addListenertoContinue() {
  continueButton.addEventListener("click", hideDiv);
}

function hideDiv() {
  if (countcontrol > 0) {
    var continueButton = document.getElementById("continueButton");
    continueButton.removeEventListener("click", hideDiv);
    console.log("Listener Stopped.2");
    continueButton.addEventListener("click", getAge);
  }
  //hides first form, and shows ip with location
  else {
    var myform = document.getElementById("form1");
    var changeForm = document.getElementById("changeForm");
    var continueButton = document.getElementById("continueButton");
    var backButton = document.getElementById("backButton");
    var intro = document.getElementById("intro");
    myform.style.display = "none";
    changeForm.style.flexDirection = "row-reverse";
    changeForm.style.justifyContent = "space-between";
    document.getElementById("sideImage").src = "Resources/rhalf.png";
    continueButton.value = "Continue";
    continueButton.style.backgroundColor = "#F7DF1E";
    backButton.value = "Back";
    intro.innerHTML =
      "Please check your IP Address, and confirm your locatoin!";
    countcontrol += 1;
    newDiv();
  }
}

async function newDiv() {
  publicIp = await getPublicIP();
  locationInfo = await getLocation(publicIp);
  var locToString = JSON.stringify(locationInfo);

  var newDiv = document.getElementById("subForm");
  newDiv.appendChild(
    Object.assign(
      document.createElement("h3"),
      { id: "ipRow" },
      { innerHTML: String(publicIp) }
    )
  );
  newDiv.appendChild(
    Object.assign(
      document.createElement("h3"),
      { id: "locRow" },
      { innerHTML: locToString }
    )
  );
  countcontrol += 1;
}

function getAge() {
  flag = true;
  let age = prompt("Please enter your birth year");
  for (var i = 2; i < Math.sqrt(age); i++) {
    if (age % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    alert("Your birth year is a prime number!");
  } else {
    alert("your birth year is not a prime number!");
  }
  continueButton.removeEventListener("click", getAge);
  console.log("LoadNewPage");
  window.open('', '_blank');
}

addListenertoContinue("games.html");
