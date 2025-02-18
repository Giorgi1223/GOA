
fetch('https://fakestoreapi.com/products/1') 
    .then(response => response.json())
    .then(data => {

        console.log(data);
        
        
        const productContainer = document.getElementById('product');
        productContainer.innerHTML = `
            <h2>${data.title}</h2>
            <img src="${data.image}" alt="${data.title}" width="200">
            <p><strong>კატეგორია:</strong> ${data.category}</p>
            <p><strong>ფასი:</strong> $${data.price}</p>
            <p><strong>აღწერა:</strong> ${data.description}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
