// Add event listener to the confirmation button
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", confirmChoices);

// Function to handle confirmation of choices
function confirmChoices() {
    console.log("Button clicked"); // Log to check if function is called
    // Get selected market sector, budget, profit target, and loss target
    const sectorDropdown = document.getElementById("sector-dropdown");
    const selectedSector = sectorDropdown.value;
    const budgetInput = document.getElementById("budget");
    const budget = parseFloat(budgetInput.value);
    const profitTargetInput = document.getElementById("profit-target");
    const profitTarget = parseFloat(profitTargetInput.value);
    const lossTargetInput = document.getElementById("loss-target");
    const lossTarget = parseFloat(lossTargetInput.value);

    // Call function to calculate investment allocations
    const investmentAllocations = calculateInvestmentAllocations(selectedSector, budget);
    console.log("Investment allocations:", investmentAllocations); // Log allocations

    // Display investment allocations on the webpage
    displayResults(investmentAllocations, budget, profitTarget, lossTarget);
}

// Function to calculate investment allocations
function calculateInvestmentAllocations(sector, budget) {
    // Your code to calculate investment allocations based on sector and budget
    // This function should return an array of objects containing company names and their allocated amounts
    // For demonstration purposes, let's assume we have some sample allocations
    const sampleAllocations = [
        { company: "Apple Inc.", investment: budget * 0.25 },
        { company: "Microsoft Corporation", investment: budget * 0.20 },
        { company: "Amazon.com Inc.", investment: budget * 0.15 },
        { company: "Alphabet Inc. (Google)", investment: budget * 0.30 },
        { company: "Facebook Inc.", investment: budget * 0.10 }
    ];
    return sampleAllocations;
}

// Function to display investment allocations on the webpage
function displayResults(investmentAllocations, budget, profitTarget, lossTarget) {
    const stockList = document.getElementById("stock-list");
    // Clear previous results
    stockList.innerHTML = "";
    // Calculate total investment amount
    const totalInvestment = investmentAllocations.reduce((total, allocation) => total + allocation.investment, 0);
    // Display new results
    investmentAllocations.forEach(allocation => {
        const listItem = document.createElement("li");
        // Calculate percentage of investment for each company
        const percentage = (allocation.investment / totalInvestment) * 100;
        listItem.textContent = `${allocation.company}: $${allocation.investment.toFixed(2)} (${percentage.toFixed(2)}%)`;
        // Add profit target and loss target to the list item
        const profitTargetAmount = (allocation.investment * profitTarget / 100).toFixed(2);
        const lossTargetAmount = (allocation.investment * lossTarget / 100).toFixed(2);
        listItem.innerHTML += `<br>Profit Target: $${profitTargetAmount}<br>Loss Target: $${lossTargetAmount}`;
        stockList.appendChild(listItem);
    });
}
