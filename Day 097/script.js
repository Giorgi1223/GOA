
//1

const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, 2000);
  });
  
  task1.then(message => {
    console.log(message);
  });
  

//2

  const task2 = new Promise((resolve, reject) => {
    reject("Task 2 failed");
  });
  
  task2.catch(error => {
    console.log(error); 
  });

  
//3

  const task3 = new Promise((resolve, reject) => {
    resolve(5);
  });
  
  task3
    .then(number => {
      const doubled = number * 2; 
      return doubled;
    })
    .then(doubledNumber => {
      console.log(doubledNumber);
    });
  