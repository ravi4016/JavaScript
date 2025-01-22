function checkBalance(balance,withdrawalAmount) {
    return new Promise((resolve, reject) => {
      if (balance >= withdrawalAmount) {
        resolve(balance-withdrawalAmount);
      } else {
        reject("Insufficient balance");
      }
    });
  }

  function confirmTransaction(update) {
    return new Promise((resolve, reject) => {
      if (update) {
        resolve("Transaction successful");
      } else {
        reject("Transaction failed");
      }
    });
  }
  
const accountBalance = 5000;
const withdrawalAmount = 2000;

checkBalance(accountBalance, withdrawalAmount)
.then((updatedBalance) => {
  console.log("Updated balance:", updatedBalance);
  return confirmTransaction(updatedBalance);
})
.then((message) => {
  console.log(message);
})