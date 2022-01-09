const users = [
    {username: 'maradho'}, 
    {username: 'lani'},
    {username: 'fika'}
]

function createUser(user, callback) {
    setTimeout(() => {
        users.push(user);
        callback;
    }, 2000);
}

createUser({username: 'mufida'}, () => {
    setTimeout(() => {
        console.log(users);
    }, 1000);
});