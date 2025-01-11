function simulateProcess(message, callback) {
    console.log('Process started...');
    
    setTimeout(function() {
      console.log(message); 
      callback(); 
    }, 2000);
  }
  

  function processCompleted() {
    console.log('The process is complete!');
  }
  

  simulateProcess('Process is running...', processCompleted);
  