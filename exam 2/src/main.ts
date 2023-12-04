class CountryService {
    static async getAllCountries(): Promise<any[]> {
        const response = await fetch('https://restcountries.com/v3.1/all');
        return await response.json();
    }

    static async searchCountryByName(name: string): Promise<any[]> {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        return await response.json();
    }
}

const allCountriesButton = document.getElementById('all-countries-btn') as HTMLButtonElement;
const searchButton = document.getElementById('search-btn') as HTMLButtonElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const resultTable = document.getElementById('result-table') as HTMLTableElement;
const statisticsTable = document.getElementById('statistics-table') as HTMLTableElement;
const regionTable = document.getElementById('region-table') as HTMLTableElement;
const currencyStatisticsTable = document.getElementById('currency-statistics-table') as HTMLTableElement;

allCountriesButton.addEventListener('click', async () => {
    const countries = await CountryService.getAllCountries();
    displayResults(countries);
});

searchButton.addEventListener('click', async () => {
    const countryName = searchInput.value;

    if (countryName !== '') {
        const countries = await CountryService.searchCountryByName(countryName);
        displayResults(countries);
        
    }
});

function updateResults(countries: any[]) {
    resultTable.innerHTML = '<tr><th class="border">Country</th><th class="border">Population</th><th class="border">Currency</th></tr>';

    countries.forEach(country => {
        resultTable.innerHTML += `<tr><td class="border">${country.name.common}</td><td class="border">${country.population.toLocaleString()}</td><td class="border">${getCurrency(country)}</td></tr>`;
    });
}

function displayStatistics(countries: any[]) {
    const totalCountries = countries.length;
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
    const averagePopulation = totalPopulation / totalCountries;

    statisticsTable.innerHTML = `
        <tr><td>Total Countries:</td><td>${totalCountries}</td></tr>
        <tr><td>Total Population:</td><td>${totalPopulation.toLocaleString()}</td></tr>
        <tr><td>Average Population:</td><td>${averagePopulation.toLocaleString()}</td></tr>
    `;
}

function updateRegionTable(countries: any[]) {
    regionTable.innerHTML = '<tr><th class="border">Region</th><th class="border">Number of Countries</th></tr>';

    const regionCounts = calculateRegionCounts(countries);

    for (const region in regionCounts) {
        regionTable.innerHTML += `<tr><td class="border">${region}</td><td class="border">${regionCounts[region]}</td></tr>`;
    }
}

function displayCurrencyStatistics(countries: any[]) {
    currencyStatisticsTable.innerHTML = '<tr><th class="border">Currency</th><th class="border">Number of Countries</th></tr>';

    const currencyCounts = calculateCurrencyCounts(countries);

    for (const currency in currencyCounts) {
        currencyStatisticsTable.innerHTML += `<tr><td class="border">${currency}</td><td class="border">${currencyCounts[currency]}</td></tr>`;
    }
}

function calculateRegionCounts(countries: any[]): { [key: string]: number } {
    const regionCounts: { [key: string]: number } = {};

    countries.forEach(country => {
        const region = country.region;
        regionCounts[region] = (regionCounts[region] || 0) + 1;
    });

    return regionCounts;
}

function calculateCurrencyCounts(countries: any[]): { [key: string]: number } {
    const currencyCounts: { [key: string]: number } = {};

    countries.forEach(country => {
        const currency = getCurrency(country);
        currencyCounts[currency] = (currencyCounts[currency] || 0) + 1;
    });

    return currencyCounts;
}

function getCurrency(country: any): string {
    if (country.currencies) {
        for (const currency in country.currencies){
            return currency;
        }
    }
}

function displayResults(countries: any[]) {
    updateResults(countries);
    displayStatistics(countries);
    updateRegionTable(countries);
    displayCurrencyStatistics(countries);
}