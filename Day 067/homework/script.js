// Optional: Hide the loader after a delay
setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
    // Trigger any action after loading
    alert('Loading complete!');
}, 5000); // Adjust the duration as needed
