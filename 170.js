const logFileContent = (fileContent) => {
    console.log("File content:", fileContent);
};

const readFileAsync = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
        logFileContent(event.target.result);
    };

    reader.onerror = (error) => {
        console.error("Error reading file:", error);
    };

    reader.readAsText(file);
};

const simulateFileSelection = () => {
    const file = new File(["Hello, this is a sample file content."], "sample.txt", { type: "text/plain" });
    readFileAsync(file);
};

simulateFileSelection();