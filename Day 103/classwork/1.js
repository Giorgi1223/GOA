let userId = 1;

function fetchUser() {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userContainer = document.getElementById("userContainer");
            const userInfo = document.createElement("p");
            userInfo.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
            userContainer.appendChild(userInfo);
            userId++;
        })
        .catch(error => console.error("Error fetching user:", error));
}

document.getElementById("fetchUserBtn").addEventListener("click", fetchUser);

// HTML Structure
const app = document.createElement("div");
app.innerHTML = `
    <button id="fetchUserBtn">Fetch User</button>
    <div id="userContainer"></div>
`;
document.body.appendChild(app);
