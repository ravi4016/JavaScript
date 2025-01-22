function task(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} completed in ${time}ms`);
        }, time);
    });
}

const task1 = task("Task 1", 1000);
const task2 = task("Task 2", 2000);
const task3 = task("Task 3", 3000);

Promise.all([task1, task2, task3])
    .then((results) => {
        console.log("All tasks completed:");
        console.log(results);
    })
    .catch((error) => {
        console.log("An error occurred:", error);
    });
