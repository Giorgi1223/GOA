function addToCollection(bookId) {

    if (!personalCollection.has(bookId)) {
      let book = storeBooks.get(bookId);
      personalCollection.set(bookId, book);
      book.addedToCollection = true;  
      alert("წიგნი დაემატა კოლექციაში!");
    } else {
      alert("წიგნი უკვე თქვენს კოლექციაშია!");
    }
  }
  