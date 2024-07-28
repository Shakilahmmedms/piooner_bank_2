// login button event handler

const loginButton = document.getElementById('loginBtn');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transactionArea = document.getElementById('transaction_area');
    transactionArea.style.display = "block";
})

// deposit button event handler

const depositButton = document.getElementById('deposit');
depositButton.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount');
    updateSpanText('currentDeposit', depositNumber);
    document.getElementById('depositAmount').value = "";

    // update balance
    updateSpanText('currentBalance', depositNumber);
})

// withdraw button event handler

const withdrawButton = document.getElementById('withdraw');
withdrawButton.addEventListener('click', function(){
   const WithrawAmountNumber =  getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', WithrawAmountNumber);
    document.getElementById('withdrawAmount').value = "";

    // update balance
    updateSpanText('currentBalance', -1 * WithrawAmountNumber)
})

function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber
}

function updateSpanText(id, addNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = addNumber + currentNumber;
    document.getElementById(id).innerText = total;
}



