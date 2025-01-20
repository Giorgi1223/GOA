async function fetchRandomDog() {
    try {
        res = await fetch('https://dog.ceo/api/breeds/image/random');
        data = await res.json();
        document.getElementById('dogImage').src = data.message;
    } catch (error) {
        alert('Error fetching dog photo!');
    }
}
