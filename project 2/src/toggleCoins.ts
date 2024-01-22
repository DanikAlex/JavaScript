const selectedCoins = [];

export default function addCoinToArray(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
        const element = e.target as HTMLElement;
        let coinId : string = '';
        let span : HTMLInputElement;
        if (element.id.startsWith("checked-")) {
            coinId = element.id.substring("checked-".length);
            console.log('clicked on', coinId);
            const checkbox = document.querySelector(`#checked-${coinId}`) as HTMLInputElement;
            console.log(checkbox);
            span = document.querySelector(`#span-${coinId}`) as HTMLInputElement;

            if (checkbox.checked) {
                selectedCoins.push(coinId);
                console.log('Added', coinId, 'to the array.');
            } else {
                selectedCoins.push(coinId);
                showToggleLimit();
            } 
        } else {
            // Remove the coin from the array
            const index = selectedCoins.findIndex(
              (selectedCoin) => selectedCoin === coinId
            );
            selectedCoins.splice(index, 1);
        }
        console.log(selectedCoins);
    }
}

function showToggleLimit() {
    try {
        document.getElementById('toggle-popup-box').innerHTML = `
        <div class="toggle-popup">
            <div class="toggle-popup-content">
                <div class="toggle-popup-header">
                    <div>You can select only 5 coins, choose 1 to remove</div>
                        <div class="toggle-popup-icon">
                            <button id="close" class="close-btn"><i class="bi bi-x"></i></button>
                        </div>
                    </div>
                    <div class="toggle-popup-info">
                </div>
            </div>
        </div>
        `;
        const popupInfo = document.querySelector(".toggle-popup-info");
        selectedCoins.forEach((coin) => {
            const coinElement = document.createElement("div");
            coinElement.innerHTML = `
                        <div class="toggle-pop-main-container">
                          <span id="coinName-${coin}">${coin}</span>
                          <div class="clickMe">Click my button, if you want to remove me.</div>
                          <div id="pop-toggle-container-${coin}">
                              <input class="pop-checkedInput" type="checkbox" id="pop-checked-${coin}" checked>
                              <label for="pop-checked-${coin}" class="pop-checkedButton"></label>
                          </div>
                        </div>
                      `;
        popupInfo.appendChild(coinElement);
    });
    const showBox = document.getElementById('toggle-popup-box');
    showBox.classList.add('show');
    } catch (err) {
        document.getElementById('error').innerHTML = 'couldnt get info';
    }
}  

export function closeToggleLimit(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
      const element = e.target as HTMLElement;
      const closeBtn = element.closest(".close-btn");
      if (closeBtn && selectedCoins.length > 5) {
        alert("Please remove at least 1 coin to continue.");
        return;
      }
        if (closeBtn) {
        const showBox = document.getElementById(`toggle-popup-box`);
        showBox.classList.remove("show");
      }
    }
  }

  export function addCoinToArrayToggle(e: MouseEvent) {
    if (e.target instanceof HTMLElement) {
      const element = e.target as HTMLElement;
      if (element.id.startsWith("pop-checked-")) {
        const coinId = element.id.substring("pop-checked-".length);
        console.log('Clicked on',coinId);
        const span = document.querySelector(`#span-${coinId}`) as HTMLSpanElement;
        const checkbox = document.querySelector(`#pop-checked-${coinId}`) as HTMLInputElement;
        if (checkbox) {
          if (checkbox.checked) {
            // Add the coin to the array
            selectedCoins.push(coinId);
            (document.querySelector(`#checked-${coinId}`) as HTMLInputElement).checked = true;
          } else {
            // Remove the coin from the array
            const index = selectedCoins.findIndex(
              (selectedCoin) => selectedCoin === coinId
            );
            selectedCoins.splice(index, 1);
            (document.querySelector(`#checked-${coinId}`) as HTMLInputElement).checked = false;
          }
          console.log(selectedCoins);
        }
      }
    }
  }