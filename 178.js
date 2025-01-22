function run() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise Resolved");
        },3000);
        })
}
run()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
