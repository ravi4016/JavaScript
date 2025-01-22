function writeFile(key,data){
    return new Promise((resovle)=> {
        localStorage.setItem(key,data)
        resovle(`${key} has been created`);
    })
    
}
function readFile(key) {
    return new Promise((resovle,reject)=> {
        let data = localStorage.getItem(key);
        if(data!==null){
            resovle(data);
        }
        else{
            reject(`${key}File not found !`);
        }
    });
}

function deleteFile(key) {
    return new Promise((resovle,reject)=> {
        let data = localStorage.getItem(key);
        if(data!==null){
            localStorage.removeItem(key);
            resovle(`${key}has been deleted`);
        }
        else{
            reject(`${key}File not found !`);
        }
    });
}
export {writeFile,readFile,deleteFile};