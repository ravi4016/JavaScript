function handle(user) {
    try {
        return JASON.parse(user);

    }

    catch (error) {
        console.log(error);
        return null;
    }
}
let user = {"name":"bittu","age":21 };
console.log((user));