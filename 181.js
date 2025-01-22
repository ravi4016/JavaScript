function runA(data) {
    return new Promise((resolve,reject)=>{
        if (data>0) {
            console.log("Promise Resolved")
            resolve(data);
            
        }
        else{
            reject("Promise Rejected");
        }
   })
}
function runB(data) {
    return new Promise((resolve,reject)=>{
        if (data>0) {
            resolve("Promise Resolved");
        }
        else{
            reject("Promise Rejected");
        }
   })
}
runA(4)
.then((data)=>{
    console.log(data);
    return runB(data);
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

    