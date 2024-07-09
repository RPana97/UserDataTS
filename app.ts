// Define a type alias for UserID, which is just a number
type UserID = number;

// Define an enum for user roles with possible values 'admin' and 'user'
enum userRole {
    ADMIN = 'admin',
    USER = 'user'
}

// Define an interface for a User object
interface User {
    id: UserID; // Every user must have an ID
    name: string; // Every user must have a name
    email?: string; // Email is optional
    role? : userRole; // Role is optional
}

// Create an array of User objects
const users: User[] = [
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

// Function to fetch a user by their ID
function fetchUserById(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
        // Find the user by ID in the users array
        const user = users.find(i => i.id === userId);
        // Simulate an asynchronous operation using setTimeout
        setTimeout(() => {
            if (user) {
                // Resolve the promise with the user object if found
                resolve(user);
            } else {
                // Reject the promise with an error message if not found
                reject(new Error('User not found'));
            }
        }, 1000); // Delay of 1 second
    });
}

// Function to get the email of a user
function getUserEmail(user: User): string | undefined {
    // If the user has an email, return it
    if (user.email) {
        return user.email;
    } else {
        // Otherwise, return undefined
        return undefined;
    }
}

// Type guard function to check if a user is an admin
function isAdmin (user: User): user is User & { role: userRole.ADMIN } {
    // Return true if the user's role is 'admin'
    return user.role === userRole.ADMIN;
}

// Export the users array, fetchUserById function, getUserEmail function, and isAdmin function
export { users, fetchUserById, getUserEmail, isAdmin };
