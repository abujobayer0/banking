// deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    ///input value
    const depositInput = document.getElementById("deposit-Input");
    const depositAmount = depositInput.value;
    const newDepositAmount = parseFloat(depositAmount); 
    ///add deposit
    const deposit = document.getElementById("deposit");
    const NewDeposit = deposit.innerText;
    const depositTotal =parseFloat(NewDeposit);
    const newDepositValue = newDepositAmount + depositTotal;
    deposit.innerText = newDepositValue;
    depositInput.value = "";
 //update account balance
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotalText);
//update balance
const newBalanceTotal=  newDepositAmount + previousBalanceTotal ;
balanceTotal.innerText = newBalanceTotal;



});
// withdraw
document
  .getElementById("Withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("Withdraw-Input");
    const withdrawAmount = withdrawInput.value;
    const numberWithdrawAmount=parseFloat(withdrawAmount);


 //update account balance
const balanceTotal=document.getElementById('balance-total');
const balanceTotalText=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotalText);
//update balance
const newBalanceTotal=  previousBalanceTotal  - numberWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;


//withdrawAmount box 
const withdrawAmountText=document.getElementById('withdraw-amount');
const withdrawBoxInner = withdrawAmountText.innerText;
const convertNumber = parseFloat(withdrawBoxInner);
const withdrawTotal =convertNumber+ numberWithdrawAmount;
withdrawAmountText.innerText=withdrawTotal;



withdrawInput.value='';
  });
