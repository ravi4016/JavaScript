async function checkInventory(item) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const inventoryItem = ['laptop', 'phone', 'tablet'];
            if (inventoryItem.includes(item)) {
                resolve(`Item ${item} is in stock.`);
            } else {
                reject(`Item ${item} is out of stock.`)
            }
        },2000);
    });
}

async function processPayment(amount) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success = Math.random()>0.2;
            if (success) {
                resolve(`Payment of ${amount} successful.`);
            } else {
                reject(`Payment of ${amount} failed.`);
            }
        },2000);
    });
}

async function confirmOrder() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Order confirmed.');
        },2000);
    });
}

async function placeOrder(item,amount) {
    try {
        console.log('Placing order...');
        let inventoryStatus = await checkInventory(item);
        console.log(inventoryStatus);
        let paymentStatus = await processPayment(amount);
        console.log(paymentStatus);
        let orderStatus = await confirmOrder();
        console.log(orderStatus);
    } catch (error) {
        console.log(error);
    }
}
let item = 'laptop';
let amout = 10000;
placeOrder(item,amout)
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

