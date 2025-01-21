const fileSystem = {
    "file1.txt": "This is file1 content.",
    "file2.txt": "This is file2 content.",
  };
  
  function openFile(fileName) {
    if (fileSystem[fileName]) {
      console.log(`File opened: ${fileSystem[fileName]}`);
    } else {
      throw new Error(`File "${fileName}" does not exist.`);
    }
  }
  
  try {
    openFile("file1.txt"); 
  } catch (error) {
    console.error(error.message);
  }
  