export default function reduceCoins(coins) {
    return coins.map(coin => {
        return `
        <div class="col-sm-6 col-md-3 card-size">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${coin.name}</h5>
                    <div class="form-check form-switch" id="checked-${coin.id}">
                        <input class="form-check-input" type="checkbox" role="switch" id="checked-${coin.id}">
                    </div>
                    <span id="span-${coin.id}">${coin.symbol}</span><br><br>
                    <a href="#" id="more-info-${coin.id}" class="btn btn-primary" data-bs-toggle="collapse"
                        data-bs-target="#collapse-${coin.id}">More Info</a>
                    <div class="collapse" id="collapse-${coin.id}">
                        <div class="card card-body" id="data-container-${coin.id}">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    }).reduce((acc, curr) => acc + curr, '');
}
