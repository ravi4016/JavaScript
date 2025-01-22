import { EXCHANGE_RATES, convertCurrency } from "./167export.js";

const amountInUSD = 100; 
const rateUSDToINR = EXCHANGE_RATES.USD_TO_INR; 

const amountInINR = convertCurrency(amountInUSD, rateUSDToINR);
console.log(`$${amountInUSD} is equal to ₹${amountInINR} at a rate of ${rateUSDToINR}.`);

const amountInEUR = convertCurrency(amountInUSD, EXCHANGE_RATES.USD_TO_EUR);
console.log(`$${amountInUSD} is equal to €${amountInEUR}.`);
