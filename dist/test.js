const { users, fetchUserById, getUserEmail, isAdmin } = require('./app');

console.log (users);

fetchUserById(1)
    .then(user => {
        console.log(user); // Log the user object if found
        return fetchUserById(2); // Chain another fetch for user with ID 2
    })
    .then(user => {
        console.log(user); // Log the user object if found
    })
    .catch(error => {
        console.error(error.message); // Log the error message if any promise is rejected
    });

fetchUserById(3234)
    .catch(error => {
        console.error(error.message); // Log the error message for the rejected promise
    });

const email = getUserEmail(users[0]);
if (email) {
    console.log(`Email: ${email}`);
} else {
    console.log('Email not provided');
}

users.forEach(user => {
    if (isAdmin(user)) {
        console.log(`${user.name} is an Admin`);
    } else {
        console.log(`${user.name} is not an Admin`);
    }
});