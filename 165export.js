
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/; 
    return phoneRegex.test(phone);
}