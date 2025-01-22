const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Error reading the file"));

        reader.readAsText(file);
    });
};
const simulateFileRead = async() => {
    const file = new File(["This is an example file content."], "example.txt", { type: "text/plain" });
        try {
        const content = await readFileAsync(file);
        console.log("File content:", content);
    } catch (err) {
        console.error(err.message);
    }
}
simulateFileRead();