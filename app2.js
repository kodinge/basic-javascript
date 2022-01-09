const users = [
    { username: 'maradho' }, 
    { username: 'lani' },
    { username: 'fika' },
];

const getUsers = () => {
    setTimeout(() => {
        console.log(users);
    }, 1000);    
};

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            users.push(user);
            let error = false;
            if (!error) {
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });
};

createUser({username: 'alex'}).then(getUsers);
