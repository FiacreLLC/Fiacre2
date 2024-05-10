// Define a list of companies in the materials sector
const materialsCompanies = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E"
    // Add more companies as needed
];

// Function to simulate random investment allocation
function simulateInvestment(budget, numCompanies) {
    // Calculate total budget available for allocation
    const totalBudget = parseFloat(budget);
    
    // Initialize an empty array to store investment allocations
    const allocations = [];

    // Generate random percentages for each company
    for (let i = 0; i < numCompanies; i++) {
        // Generate a random percentage between 0 and 100
        const randomPercentage = Math.random() * 100;
        // Round the percentage to two decimal places
        const roundedPercentage = Math.round(randomPercentage * 100) / 100;
        // Calculate the investment amount based on the percentage
        const investmentAmount = (totalBudget * roundedPercentage) / 100;
        // Add the company and its investment amount to the allocations array
        allocations.push({ company: materialsCompanies[i], investment: investmentAmount });
    }

    return allocations;
}

// Example usage:
const budget = prompt("Enter your budget for investment:");
const numCompanies = materialsCompanies.length;
const investmentAllocations = simulateInvestment(budget, numCompanies);

// Display the investment allocations
console.log("Investment Allocations:");
investmentAllocations.forEach(allocation => {
    console.log(`${allocation.company}: $${allocation.investment.toFixed(2)}`);
});
