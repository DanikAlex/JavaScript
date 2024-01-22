import Coin from "../interfaces/coin";
import CoinData from "../interfaces/coin-data";

export async function getCoins() : Promise<Coin[]> {
    // const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    const response = await fetch(`coins.json`);
    const data = await response.json();
    return data;
}

export async function getCoinData(url: string) : Promise<CoinData> {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
