import reduceCoins from './reducers/coins.js';
import Cache from './Cache.js';
import { getCoins } from './api/rest.js';
import { closeToggleLimit } from './toggleCoins.js';
const searchByName = document.getElementById("search-btn");
const cache = Cache.getInstance();
const coins = await getCoins();
const shortList = coins.slice(0, 100);
export default function scrolling() {
    document.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const parallaxBackground = document.querySelector('.parallax-background');
        parallaxBackground.style.transform = `translateZ(-1px) scale(2) translateY(${scrollTop * 0.5}px)`;
    });
}
;
searchByName.addEventListener("click", function (e) {
    e.preventDefault();
    coinSearch();
});
async function getCoinData(coinId) {
    const cacheResponse = await cache.getData(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    const coinData = cacheResponse;
    return coinData;
}
async function displayCoinData(e) {
    if (e.target instanceof HTMLElement) {
        const element = e.target;
        if (element.id.startsWith('more-info-')) {
            const coinId = element.id.substring('more-info-'.length);
            const coinData = await getCoinData(coinId);
            console.log(coinData);
            document.getElementById(`data-container-${coinId}`).innerHTML = `
                <img src="${coinData.image.thumb}"/> <br>
                usd: ${coinData.market_data.current_price.usd} <br>
                eur: ${coinData.market_data.current_price.eur} <br>
                ils: ${coinData.market_data.current_price.ils}
            `;
        }
    }
}
async function coinSearch() {
    const searchInput = document.getElementById('coin-search');
    const coinSymbol = searchInput.value.trim().toLowerCase();
    if (!coinSymbol) {
        document.getElementById('coins-container').innerHTML = reduceCoins(shortList);
        return;
    }
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    try {
        const coins = await getCoins();
        const filteredCoins = coins.filter((coin) => coin.symbol.toLowerCase().includes(coinSymbol));
        if (filteredCoins.length === 0) {
            document.getElementById('coins-container').innerHTML = '<span>No such coin, try again.</span>';
        }
        else {
            const reducedCoins = reduceCoins(filteredCoins);
            document.getElementById('coins-container').innerHTML = reducedCoins;
        }
    }
    catch (error) {
        console.error("Error occurred during coin search:", error);
    }
    finally {
        loading.style.display = 'none';
    }
}
function limitSwitches() {
    const maxActiveSwitches = 5;
    const switches = document.querySelectorAll('.toggle-switch');
    switches.forEach(switchEl => {
        switchEl.addEventListener('change', () => {
            const checkedSwitches = Array.from(switches).filter(sw => sw.checked);
            const canToggle = checkedSwitches.length < maxActiveSwitches;
            switches.forEach(sw => {
                const inputElement = sw;
                if (!inputElement.checked && !canToggle) {
                    inputElement.disabled = true;
                }
                else {
                    inputElement.disabled = false;
                }
            });
        });
    });
}
(async () => {
    document.getElementById('coins-container').addEventListener('click', displayCoinData);
    document.getElementById("coins-container").addEventListener("click", () => {
        const formCheckInputs = document.querySelectorAll('.form-check-input');
        formCheckInputs.forEach(input => {
            input.addEventListener('change', function () {
                const checkedCheckboxes = document.querySelectorAll('.form-check-input:checked');
                if (checkedCheckboxes.length > 5) {
                    this.checked = false;
                }
            });
        });
    });
    document.getElementById("toggle-popup-box").addEventListener("click", closeToggleLimit);
    const html = reduceCoins(shortList);
    document.getElementById('coins-container').innerHTML = html;
})();
