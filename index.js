//  LOGIN BUTTON
document.getElementById("Login").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("mehedi hasan");
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValueConverted = parseInt(
    document.getElementById("Mobile-number").value
  );
  const pinNumberValueConverted = parseInt(
    document.getElementById("pin-number").value
  );
  //   console.log(mobileNumberValueConverted, pinNumberValueConverted);
  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href = "./index.html";
  } else {
    alert("invalid credentials");
  }
});
