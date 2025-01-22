function run(data) {
    return new Promise((resolve,reject)=>{
        if (data>0) {
            resolve("Promise Resolved");
        }
        else{
            reject("Promise Rejected");
        }
   })
}
            
run(-3)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
