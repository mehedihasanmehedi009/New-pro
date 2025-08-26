const validPin = 1234;
const DateTime = [];
//  function get value
function getInputValueNumber(id) {
  const values = parseInt(document.getElementById(id).value);
  return values;
}
function getInputValue(id) {
  const field = document.getElementById(id);
  const fields = field.value;
  return fields;
}
// function getInput innerText

function getInputText(id) {
  const eliment = document.getElementById(id);
  const eliments = eliment.innerText;
  const elimentes = parseInt(eliments);
  return elimentes;
}

// function to set innerText
function setInnerText(value) {
  const valueNumber = document.getElementById("Balance");
  valueNumber.innerText = value;
}
// add money function

document.getElementById("btn-money").addEventListener("click", function (e) {
  e.preventDefault();
  const banks = document.getElementById("bank").value;

  const Account = getInputValue("Account-Number");

  const Amount = getInputValueNumber("Amount-to");
  if (Amount <= 0) {
    alert("invalid amount");
    return;
  }

  const pin = getInputValueNumber("add-pin");

  const Balances = getInputText("Balance");

  if (Account.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== validPin) {
    alert("please provide valid pin number ");
    return;
  }

  total = Amount + Balances;

  setInnerText(total);

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  DateTime.push(data);
  console.log(DateTime);
});

document
  .getElementById("TransacTions-button")
  .addEventListener("click", function () {
    const TransacTionsContainer = document.getElementById(
      "TransacTions-container"
    );
    TransacTionsContainer.innerText = "";
    for (const data of DateTime) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class=" mt-5 bg-white rounded-lg p-3 flex justify-between items-center"> 
            <div class="flex items-center">
              <div class="rounded-full bg-slate-100 p-3 mr-2">
                     <img class="mx-auto" src="./img/send1.png" alt="" />
              </div>
             <div>
                 <h1  class="text-[16px]  font-bold" >${data.name}</h1>
              <p>${data.date}</p>
             </div>
           </div>
           <i class="fa-solid fa-ellipsis-vertical"></i>
       </div>
      
      `;
      TransacTionsContainer.appendChild(div);
    }
  });

// Withdraw-money
document
  .getElementById("Withdraw-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const Amounts = parseInt(document.getElementById("Withdraw-amount").value);
    const balance = parseInt(document.getElementById("Balance").innerText);
    if (Amounts <= 0 || Amounts > balance) {
      alert("invalid number");
      return;
    }
    const total = balance - Amounts;
    setInnerText(total);

    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };
    DateTime.push(data);
    console.log(DateTime);
  });

// toggling -function
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");

  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
// border-color

function background(id) {
  const from = document.getElementsByClassName("form-btn");
  for (const item of from) {
    item.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    item.classList.add("border-gray-200");
  }
  document.getElementById(id).classList.remove("border-gray-200");
  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// exta

document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("Add-Money-parent");
  background("add-button");
});
document
  .getElementById("Cash-Out-button")
  .addEventListener("click", function () {
    handleToggle("Cash-Out-Parent");
    background("Cash-Out-button");
  });
document
  .getElementById("Transfer-Money-button")
  .addEventListener("click", function () {
    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
      form.style.display = "none";
    }
    document.getElementById("Transfer-Money").style.display = "block";
    background("Transfer-Money-button");
  });

document
  .getElementById("Get-Bonus-button")
  .addEventListener("click", function () {
    handleToggle("Get-Bonus");
    background("Get-Bonus-button");
  });

document
  .getElementById("Pay-Bill-button")
  .addEventListener("click", function () {
    handleToggle("Pay-Bill");
    const from = document.getElementsByClassName("form-btn");
    for (const item of from) {
      item.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      item.classList.add("border-gray-200");
    }
    document
      .getElementById("Pay-Bill-button")
      .classList.remove("border-gray-200");
    document
      .getElementById("Pay-Bill-button")
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
  });

document
  .getElementById("TransacTions-button")
  .addEventListener("click", function () {
    handleToggle("Transaction-History");
    background("TransacTions-button");
  });
