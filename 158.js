function validInput(input) {
    if (!input || input.trim() === "") {
        throw new Error("Input should not be empty ");
    }
    return `valid input : ${input}`;
}
let input = prompt("Enter Value ");

try {
    let result = (validInput(input));
    console.log("Value : " + result);
} catch (error) {
    console.log(error.message);
}