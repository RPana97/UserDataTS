"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
exports.fetchUserById = fetchUserById;
exports.getUserEmail = getUserEmail;
exports.isAdmin = isAdmin;
// Define an enum for user roles with possible values 'admin' and 'user'
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "admin";
    userRole["USER"] = "user";
})(userRole || (userRole = {}));
// Create an array of User objects
const users = [
    {
        id: 1,
        name: 'Ryan',
        email: 'ryan@gmail.com',
        role: userRole.ADMIN // Ryan is an admin
    },
    {
        id: 2,
        name: 'Joe',
        email: 'joe@hotmail.com' // Joe has no role specified
    },
    {
        id: 3,
        name: 'Jane',
        role: userRole.USER // Jane is a regular user
    }
];
exports.users = users;
// Function to fetch a user by their ID
function fetchUserById(userId) {
    return new Promise((resolve, reject) => {
        // Find the user by ID in the users array
        const user = users.find(i => i.id === userId);
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
            if (user) {
                // Resolve the promise with the user object if found
                resolve(user);
            }
            else {
                // Reject the promise with an error message if not found
                reject(new Error('User not found'));
            }
        }, 1000); // Delay of 1 second
    });
}
// Function to get the email of a user
function getUserEmail(user) {
    // If the user has an email, return it
    if (user.email) {
        return user.email;
    }
    else {
        // Otherwise, return undefined
        return undefined;
    }
}
// Type guard function to check if a user is an admin
function isAdmin(user) {
    // Return true if the user's role is 'admin'
    return user.role === userRole.ADMIN;
}
