function validateInput(userData, callback) {
    if (userData.username && userData.password) {
        callback(null, userData);  
    } else {
        callback("Validation failed. Missing username or password.");
    }
}

function saveUserData(userData, callback) {
    setTimeout(() => {
        console.log("User data saved.");
        callback(null, userData);  
    }, 1000);
}

function sendConfirmationEmail(userData, callback) {
    setTimeout(() => {
        console.log("Confirmation email sent to " + userData.username);
        callback(null, "Registration successful!");
    }, 1000);
}

function registerUser(userData) {
    validateInput(userData, (err, validatedData) => {
        if (err) {
            console.log(err);  
        } else {
            saveUserData(validatedData, (err, savedData) => {
                if (err) {
                    console.log(err);  
                } else {
                    sendConfirmationEmail(savedData, (err, message) => {
                        if (err) {
                            console.log(err);  
                        } else {
                            console.log(message); 
                        }
                    });
                }
            });
        }
    });
}

const newUser = {
    username: "johnDoe",
    password: "securePassword123"
};

registerUser(newUser);
