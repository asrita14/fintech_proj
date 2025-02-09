let balance = 1000;

function calculateBudget() {
    let rent = parseInt(document.getElementById("rent").value);
    let food = parseInt(document.getElementById("food").value);
    let entertainment = parseInt(document.getElementById("entertainment").value);

    let totalExpenses = rent + food + entertainment;
    let remainingBalance = balance - totalExpenses;

    document.getElementById("balance").innerText = remainingBalance;
    document.getElementById("rentAmount").innerText = rent;
    document.getElementById("foodAmount").innerText = food;
    document.getElementById("entertainmentAmount").innerText = entertainment;

    let result = document.getElementById("result");
    if (remainingBalance > 500) {
        result.innerHTML = "✅ You're saving well!";
        result.style.color = "green";
    } else if (remainingBalance > 200) {
        result.innerHTML = "⚠️ Be cautious with spending.";
        result.style.color = "orange";
    } else {
        result.innerHTML = "❌ You're overspending!";
        result.style.color = "red";
    }
}
