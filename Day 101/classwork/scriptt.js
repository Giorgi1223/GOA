fetch('https://fakestoreapi.com/products/1')
  .then(res => res.json())
  .then(data => document.body.innerHTML = `
    <h2>${data.title}</h2>
    <img src="${data.image}" width="200">
    <p>${data.description}</p>
    <p><strong>ფასი: $${data.price}</strong></p>
  `)
  .catch(() => document.body.innerHTML = `<p style="color:red;">შეცდომა!</p>`);
