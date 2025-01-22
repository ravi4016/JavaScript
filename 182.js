function checkUserAuthentication(user) {
    return new Promise((resolve, reject) => {
        if (user && user.isLoggedIn) {
            resolve(`User ${user.username} is authenticated.`);
        } else {
            reject("User is not authenticated.");
        }
    }) 
}
let user = {username: 'user123', isLoggedIn: true};

checkUserAuthentication(user)
.then((message) => {
    console.log(message); 
})
.catch((error) => {
    console.log(error);
});