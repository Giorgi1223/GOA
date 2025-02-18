function greetWithDelay(name, callback) {
    setTimeout(function() {
      const message = `Hello, ${name}!`;
      callback(message);
    }, 2000);
  }
  
  
  greetWithDelay('John', function(message) {
    console.log(message);
  });
  



  