//! Variable Declaration

const loanType = document.querySelector(".form-select");
const paymentTerms = document.querySelector("#payment-terms");
const loanAmount = document.querySelector("#loan-amount");
const hiddenTable = document.querySelector(".table");

let loanRate = 1.29;

//! Button & Checks

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn")) {
    if (!loanType.value || !paymentTerms.value || !loanAmount.value) {
      alert("Please fill all the blanks");
    } else if (paymentTerms.value < 0) {
      alert("This is not possible, positive values only");
    } else {
      calculateLoan();
      showTable();
    }
  }
});

//TODO keydown for Enter (W.I.P)

// loanAmount.addEventListener("keydown", (key) => {
//   if (key.keycode === 13) {
//     document.querySelector(".btn").click();
//   }
// });

//! Calculate Loan

const calculateLoan = () => {
  if (loanType.value == "mortgage") {
    loanRate = 1.29;
  } else if (loanType.value == "student") {
    loanRate = 1.49;
  } else if (loanType.value == "vehicle") {
    loanRate = 1.99;
  }
  const interest = loanRate / 100;
  (monthlyPayment =
    loanAmount.value * (interest * (1 + interest) ** paymentTerms.value)) /
    ((1 + interest) ** paymentTerms.value - 1);
  console.log(monthlyPayment);
};

//! Assign values to the table

//! Display hiddenTable

const showTable = () => {
  hiddenTable.style.display = "in-line";
};
