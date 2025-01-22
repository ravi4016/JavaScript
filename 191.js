async function fetchData() {
    try {
        let data = await new Promise((resolve, reject) => {
            let success = false;  
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Failed to fetch data');
            }
        });
        console.log(data);  
    } catch (error) {
        console.log('Error:', error);  
        }
}


fetchData();
