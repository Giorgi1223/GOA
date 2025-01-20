// Fetch data from fakestoreapi for 3 products
fetch('https://fakestoreapi.com/products?limit=3') // წამოიღე სამი პროდუქტი
    .then(response => response.json())
    .then(data => {
        // Get the container to display the products
        const productsContainer = document.getElementById('products');
        
        // Loop through the fetched products and create HTML for each
        data.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            
            productElement.innerHTML = `
                <h2>${product.title}</h2>
                <img src="${product.image}" alt="${product.title}">
                <p><strong>კატეგორია:</strong> ${product.category}</p>
                <p><strong>ფასი:</strong> $${product.price}</p>
                <p><strong>აღწერა:</strong> ${product.description}</p>
            `;
            
            // Append each product to the products container
            productsContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
