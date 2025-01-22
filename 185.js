async function retryOperation(operation, retries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            console.warn(`Attempt ${attempt} failed: ${error.message}`);
            if (attempt === retries) {
                throw lastError; 
            }
        }
    }
}
const exampleOperation = async () => {
    if (Math.random() < 0.7) {
        throw new Error("Operation failed");
    }
    return "Success!";
};

retryOperation(exampleOperation)
    .then(result => console.log("Operation result:", result))
    .catch(error => console.error("Operation ultimately failed:", error.message));
