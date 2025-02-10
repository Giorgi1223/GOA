let currentId = 1; // ვიწყებთ პირველი მომხმარებლით

document.getElementById('fetchUser').addEventListener('click', () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('მონაცემები ვერ მოიძებნა');
            }
            return response.json();
        })
        .then(user => {
            const userContainer = document.getElementById('userContainer');

            // მომხმარებლის ინფორმაციის შექმნა
            const userDiv = document.createElement('div');
            userDiv.className = 'user';
            userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
            `;
            userContainer.appendChild(userDiv);

            // ვზრდით currentId-ს, რომ შემდეგი მომხმარებელი მოვიძიოთ
            currentId++;
        })
        .catch(error => {
            console.error(error.message);
            alert('მომხმარებლის დამატება ვერ მოხერხდა.');
        });
});
