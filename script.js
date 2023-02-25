var formCheckPassed =0;
function validateForm() {
  const passRegex = /^(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;
  const emailregex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let password = document.forms["myForm"]["password"].value;
  let userName = document.forms["myForm"]["userName"].value;
  let verify = document.forms["myForm"]["passwordRep"].value;

  if (name == "" ) {
    alert("Name must be filled out");
    return false;
  }
  if (userName == "" ) {
    alert("user Name must be filled out");
    return false;
  }
  if (!emailregex.test(email)){
    alert("Please input a valid email address!");
    return false;
  }
  if (!passRegex.test(password)) {
    alert(
      "Password Invalid, should be at least 8 characters,has at least 1 number, 1 uppercase letter, & 1 non alpha-numeric character"
      );
      console.log(Passregex.test.password);
    return false;
  }
  if (password !==verify  ) {
    alert("Password should match!");
    return false;
  }
  formCheckPassed =1; 
  return true;
}
