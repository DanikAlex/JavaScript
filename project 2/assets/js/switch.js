export default class SwitchHandler {
    static handleSwitch(coinId, coinSymbol) {
        const switchElement = document.getElementById(`switch-${coinId}`);
        if (switchElement) {
            console.log(`Switch for coin ${coinId} (${coinSymbol}) is ${switchElement.checked ? 'checked' : 'unchecked'}.`);
            if (switchElement.checked) {
                this.addToLocalStorage(coinSymbol, coinId);
            }
            else {
                this.removeFromLocalStorage(coinId);
            }
            this.updateCoinsUI();
        }
    }
    static addToLocalStorage(coinSymbol, coinId) {
        let coinsInStorage = JSON.parse(localStorage.getItem('selectedCoins') || '[]');
        if (coinsInStorage.length < 5 || coinsInStorage.some(coin => coin.id === coinId)) {
            coinsInStorage = coinsInStorage.filter(coin => coin.id !== coinId); // Remove if already exists
            coinsInStorage.push({ symbol: coinSymbol, id: coinId });
            localStorage.setItem('selectedCoins', JSON.stringify(coinsInStorage));
        }
        else {
            this.showReplaceCoinModal(coinsInStorage, coinSymbol, coinId);
        }
        this.updateCoinsUI();
    }
    static removeFromLocalStorage(coinId) {
        let coinsInStorage = JSON.parse(localStorage.getItem('selectedCoins') || '[]');
        coinsInStorage = coinsInStorage.filter(coin => coin.id !== coinId);
        localStorage.setItem('selectedCoins', JSON.stringify(coinsInStorage));
        this.updateCoinsUI();
    }
    static showReplaceCoinModal(coinsInStorage, newCoinSymbol, newCoinId) {
        const myModal = new bootstrap.Modal(document.getElementById('replaceCoinModal'));
        const coinsContainer = document.getElementById('replaceCoinModalBody');
        coinsContainer.innerHTML = this.generateSelectedCoinsHTML(coinsInStorage, newCoinSymbol);
        const cancelButton = document.querySelector('#replaceCoinModal .cancel-button');
        if (cancelButton) {
            cancelButton.addEventListener('click', () => {
                myModal.hide();
                this.updateCoinsUI();
            });
        }
        coinsContainer.addEventListener('click', (event) => {
            if (event.target instanceof HTMLElement && event.target.classList.contains('replace-coin')) {
                const coinToReplaceId = event.target.dataset.coinId;
                this.replaceInLocalStorage(coinsInStorage, coinToReplaceId, newCoinSymbol, newCoinId);
                myModal.hide();
                this.updateCoinsUI();
            }
        });
        myModal.show();
    }
    static replaceInLocalStorage(coinsInStorage, coinToReplaceId, newCoinSymbol, newCoinId) {
        const index = coinsInStorage.findIndex(coin => coin.id === coinToReplaceId);
        if (index !== -1) {
            coinsInStorage[index] = { symbol: newCoinSymbol, id: newCoinId };
            localStorage.setItem('selectedCoins', JSON.stringify(coinsInStorage));
            this.updateCoinsUI();
        }
    }
    static updateCoinsUI() {
        const coinsInStorage = JSON.parse(localStorage.getItem('selectedCoins') || '[]');
        document.querySelectorAll('.form-check-input').forEach(element => {
            const switchElement = element;
            const switchId = switchElement.getAttribute('id').replace('switch-', '');
            switchElement.checked = coinsInStorage.some(coin => coin.id === switchId);
        });
    }
    static generateSelectedCoinsHTML(coinsInStorage, newCoinSymbol) {
        return coinsInStorage.map(coin => `
            <div class="selected-coin ${coin.symbol === newCoinSymbol ? 'new-coin' : ''}" data-coin-id="${coin.id}" data-coin-symbol="${coin.symbol}">
                Coin ${coin.symbol} <span class="replace-coin" data-coin-id="${coin.id}" data-coin-symbol="${coin.symbol}">Replace</span>
            </div>
        `).join('');
    }
    static isCoinSelected(coinSymbol, coinId) {
        const coinsInStorage = JSON.parse(localStorage.getItem('selectedCoins') || '[]');
        return coinsInStorage.some(coin => coin.symbol === coinSymbol && coin.id === coinId);
    }
}
