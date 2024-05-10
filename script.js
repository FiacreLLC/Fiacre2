// Define budget as a global variable
let budget;

// Add event listener to the confirmation button
const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", confirmChoices);

// Function to handle confirmation of choices
function confirmChoices() {
    console.log("Button clicked"); // Log to check if function is called
    // Get selected market sector and budget
    const sectorDropdown = document.getElementById("sector-dropdown");
    const selectedSector = sectorDropdown.value;
    const budgetInput = document.getElementById("budget");
    budget = parseFloat(budgetInput.value);

    // Call function to calculate investment allocations
    const investmentAllocations = calculateInvestmentAllocations(selectedSector, budget);
    console.log("Investment allocations:", investmentAllocations); // Log allocations

    // Display investment allocations on the webpage
    displayResults(investmentAllocations);
}

// Function to calculate investment allocations
function calculateInvestmentAllocations(sector, budget) {
    // Define lists of companies for each sector
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
        const randomPercentage = Math.random() * 100;
        const roundedPercentage = Math.round(randomPercentage * 100) / 100;
        const investmentAmount = (budget * roundedPercentage) / 100;
        allocations.push({ company: companies[i], investment: investmentAmount });
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
        const percentage = ((allocation.investment / budget) * 100).toFixed(2);
        listItem.textContent = `${allocation.company}: $${allocation.investment.toFixed(2)} (${percentage}%)`;
        stockList.appendChild(listItem);
    });
}
