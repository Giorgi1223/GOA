function applyFilters() {
    let genre = document.getElementById("genreFilter").value;
    let minPrice = document.getElementById("minPrice").value;
    let maxPrice = document.getElementById("maxPrice").value;
    
    let filteredBooks = filterBooksByGenre(genre);
    filteredBooks = filterBooksByPrice(minPrice, maxPrice);
    
    displayFilteredBooks(filteredBooks);
  }
  