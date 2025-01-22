export const EXCHANGE_RATES = {
    USD_TO_INR: 82.5,
    INR_TO_USD: 0.012,
    USD_TO_EUR: 0.93,
    EUR_TO_USD: 1.08,
};

export function convertCurrency(amount, rate) {
    return amount * rate;
}
