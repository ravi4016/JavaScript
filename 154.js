function emailValid(email){
    const patterMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
    if(!patterMail.test(email)){
        throw new Error ("Invalid Email");
    }
    return `Email : ${email}`;
}

let email = "victorsinghsoftdev@gmail.com" ;

try {
    console.log(emailValid(email));
} catch (error) {
    console.log(error.message);
}