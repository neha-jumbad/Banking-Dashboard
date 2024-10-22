// script.js

// Set initial balance
let balance = 1000;

// Get elements from the DOM
const balanceDisplay = document.getElementById('balance');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');
const depositAmount = document.getElementById('depositAmount');
const withdrawAmount = document.getElementById('withdrawAmount');

// Function to update the balance display
function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}

// Deposit button click event
depositBtn.addEventListener('click', () => {
    const amount = parseFloat(depositAmount.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount to deposit.');
    } else {
        balance += amount;
        updateBalance();
        depositAmount.value = ''; // Clear the input
    }
});

// Withdraw button click event
withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(withdrawAmount.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount to withdraw.');
    } else if (amount > balance) {
        alert('Insufficient balance for this withdrawal.');
    } else {
        balance -= amount;
        updateBalance();
        withdrawAmount.value = ''; // Clear the input
    }
});

// Initialize the balance on page load
updateBalance();
