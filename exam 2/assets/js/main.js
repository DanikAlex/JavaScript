var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CountryService {
    static getAllCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch('https://restcountries.com/v3.1/all');
            return yield response.json();
        });
    }
    static searchCountryByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://restcountries.com/v3.1/name/${name}`);
            return yield response.json();
        });
    }
}
const allCountriesButton = document.getElementById('all-countries-btn');
const searchButton = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const resultTable = document.getElementById('result-table');
const statisticsTable = document.getElementById('statistics-table');
const regionTable = document.getElementById('region-table');
const currencyStatisticsTable = document.getElementById('currency-statistics-table');
allCountriesButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
    const countries = yield CountryService.getAllCountries();
    displayResults(countries);
}));
searchButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
    const countryName = searchInput.value;
    if (countryName !== '') {
        const countries = yield CountryService.searchCountryByName(countryName);
        displayResults(countries);
    }
}));
function updateResults(countries) {
    resultTable.innerHTML = '<tr><th class="border">Country</th><th class="border">Population</th><th class="border">Currency</th></tr>';
    countries.forEach(country => {
        resultTable.innerHTML += `<tr><td class="border">${country.name.common}</td><td class="border">${country.population.toLocaleString()}</td><td class="border">${getCurrency(country)}</td></tr>`;
    });
}
function displayStatistics(countries) {
    const totalCountries = countries.length;
    const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
    const averagePopulation = totalPopulation / totalCountries;
    statisticsTable.innerHTML = `
        <tr><td>Total Countries:</td><td>${totalCountries}</td></tr>
        <tr><td>Total Population:</td><td>${totalPopulation.toLocaleString()}</td></tr>
        <tr><td>Average Population:</td><td>${averagePopulation.toLocaleString()}</td></tr>
    `;
}
function updateRegionTable(countries) {
    regionTable.innerHTML = '<tr><th class="border">Region</th><th class="border">Number of Countries</th></tr>';
    const regionCounts = calculateRegionCounts(countries);
    for (const region in regionCounts) {
        regionTable.innerHTML += `<tr><td class="border">${region}</td><td class="border">${regionCounts[region]}</td></tr>`;
    }
}
function displayCurrencyStatistics(countries) {
    currencyStatisticsTable.innerHTML = '<tr><th class="border">Currency</th><th class="border">Number of Countries</th></tr>';
    const currencyCounts = calculateCurrencyCounts(countries);
    for (const currency in currencyCounts) {
        currencyStatisticsTable.innerHTML += `<tr><td class="border">${currency}</td><td class="border">${currencyCounts[currency]}</td></tr>`;
    }
}
function calculateRegionCounts(countries) {
    const regionCounts = {};
    countries.forEach(country => {
        const region = country.region;
        regionCounts[region] = (regionCounts[region] || 0) + 1;
    });
    return regionCounts;
}
function calculateCurrencyCounts(countries) {
    const currencyCounts = {};
    countries.forEach(country => {
        const currency = getCurrency(country);
        currencyCounts[currency] = (currencyCounts[currency] || 0) + 1;
    });
    return currencyCounts;
}
function getCurrency(country) {
    if (country.currencies) {
        for (const currency in country.currencies) {
            return currency;
        }
    }
}
function displayResults(countries) {
    updateResults(countries);
    displayStatistics(countries);
    updateRegionTable(countries);
    displayCurrencyStatistics(countries);
}
