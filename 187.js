function queryDatabase(query) {
    return new Promise((resolve, reject) => {
        const success = Math.random() > 0.2;
        setTimeout(() => {
            if (success) {
                resolve(`Query "${query}" executed successfully.`);
            } else {
                reject(`Query "${query}" failed.`);
            }
        }, 1000); 
    });
}

async function performDatabaseQueries() {
    try {
        console.log("Starting database queries...");

        const result1 = await queryDatabase("SELECT * FROM users");
        console.log(result1);

        const result2 = await queryDatabase("INSERT INTO orders VALUES (1, 'item1')");
        console.log(result2);

        const result3 = await queryDatabase("UPDATE products SET price = 20 WHERE id = 1");
        console.log(result3);

        console.log("All database queries completed successfully.");
    } catch (error) {
        console.error("Error occurred during database queries:", error);
    }
}

performDatabaseQueries();
