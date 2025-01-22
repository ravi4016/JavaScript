import * as files from "./163.js";
let key = "javaScrit";
let data = "This is a javaScrit Files";
async function run() {
    try {
        let result = await files.writeFile(key,data);
        console.log(result);
        let res = await files.readFile(key);
        console.log(res);

        let d = await files.deleteFile(key);
        console.log(d);
    } catch (error) {
       console.error(error.massage);   
    }    
}
run();

