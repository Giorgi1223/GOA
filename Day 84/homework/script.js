// script.js
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    getProfileInfo() {
        return `Username: ${this.username}, Email: ${this.email}`;
    }
}

// ახალი მომხმარებლის შექმნა
const currentUser = new User('giorgi', 'giorgi@example.com');

// პროფილის მონაცემების გამოჩენა
document.getElementById('username').textContent = `სახელი: ${currentUser.username}`;
document.getElementById('email').textContent = `Email: ${currentUser.email}`;
