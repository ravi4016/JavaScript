function main(a,b,callback) {
    console.log("Before callback");
    setTimeout(()=>{
        callback(a,b);
    },3000);
    console.log("After callback")
}

function add(a,b) {
    let c = a+b;
    console.log(`Sum : ${c}`);
}

main(4,6,add);