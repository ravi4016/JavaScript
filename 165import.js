import { validateEmail,validatePhoneNumber } from "./165export.js";

const email = "exampledomain.com";
const phone = "0123456789";

const isValidEmail = validateEmail(email);
const isValidPhone = validatePhoneNumber(phone);

console.log(isValidEmail); 
console.log(isValidPhone);