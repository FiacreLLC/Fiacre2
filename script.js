// Add event listener to the confirmation button
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", confirmChoices);

// Function to handle confirmation of choices
function confirmChoices() {
    console.log("Button clicked"); // Log to check if function is called
    // Get selected market sector, budget, profit target percentage, and loss target percentage
    const sectorDropdown = document.getElementById("sector-dropdown");
    const selectedSector = sectorDropdown.value;
    const budgetInput = document.getElementById("budget");
    const budget = parseFloat(budgetInput.value);
    const profitTargetInput = document.getElementById("profit-target");
    const profitTargetPercentage = parseFloat(profitTargetInput.value);
    const lossTargetInput = document.getElementById("loss-target");
    const lossTargetPercentage = parseFloat(lossTargetInput.value);

    // Calculate profit and loss targets based on percentages
    const profitTarget = budget * (profitTargetPercentage / 100);
    const lossTarget = budget * (lossTargetPercentage / 100);

    // Call function to calculate investment allocations
    const investmentAllocations = calculateInvestmentAllocations(selectedSector, budget, profitTarget, lossTarget);
    console.log("Investment allocations:", investmentAllocations); // Log allocations

    // Display investment allocations on the webpage
    displayResults(investmentAllocations);
}

// Function to calculate investment allocations
function calculateInvestmentAllocations(sector, budget, profitTarget, lossTarget) {
    // Define lists of companies for each sector (same as before)
    const technologyCompanies = [
        "Apple Inc.",
        "Microsoft Corporation",
        "Alphabet Inc. (Google)",
        "Amazon.com Inc.",
        "Facebook Inc."
        // Add more technology companies as needed
    ];

    const healthcareCompanies = [
        "Johnson & Johnson",
        "Pfizer Inc.",
        "Merck & Co. Inc.",
        "UnitedHealth Group Inc.",
        "Abbott Laboratories"
        // Add more healthcare companies as needed
    ];

    const financeCompanies = [
        "JPMorgan Chase & Co.",
        "Bank of America Corporation",
        "Wells Fargo & Company",
        "Visa Inc.",
        "Mastercard Incorporated"
        // Add more finance companies as needed
    ];

    let companies;
    switch (sector) {
        case "technology":
            companies = technologyCompanies;
            break;
        case "healthcare":
            companies = healthcareCompanies;
            break;
        case "finance":
            companies = financeCompanies;
            break;
        default:
            companies = [];
    }

    // Calculate investment allocations
    const numCompanies = companies.length;
    const allocations = [];
    for (let i = 0; i < numCompanies; i++) {
        // Check if stock price has reached the profit target
        const hasReachedProfitTarget = Math.random() < 0.5; // Simulating randomness for demonstration
        // Check if stock price has reached the loss target
        const hasReachedLossTarget = Math.random() < 0.5; // Simulating randomness for demonstration
        if (hasReachedProfitTarget) {
            // Sell the stock at the profit target
            allocations.push({ company: companies[i], investment: profitTarget });
        } else if (hasReachedLossTarget) {
            // Sell the stock at the loss target
            allocations.push({ company: companies[i], investment: lossTarget });
        } else {
            // Otherwise, allocate a random percentage of the budget
            const randomPercentage = Math.random() * 100;
            const roundedPercentage = Math.round(randomPercentage * 100) / 100;
            const investmentAmount = (budget * roundedPercentage) / 100;
            allocations.push({ company: companies[i], investment: investmentAmount });
        }
    }
    return allocations;
}

// Function to display investment allocations on the webpage
function displayResults(investmentAllocations) {
    const stockList = document.getElementById("stock-list");
    // Clear previous results
    stockList.innerHTML = "";
    // Display new results
    investmentAllocations.forEach(allocation => {
        const listItem = document.createElement("li");
        listItem.textContent = `${allocation.company}: $${allocation.investment.toFixed(2)}`;
        stockList.appendChild(listItem);
    });
}
