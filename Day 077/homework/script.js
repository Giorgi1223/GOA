function printPositions(rows, cols) {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        console.log(row: ${i} col: ${j});
      }
    }
  }
  

  printPositions(2, 2);




  function multiplicationTable() {
    let table = [];
    
    for (let i = 1; i <= 10; i++) {
      let row = [];
      for (let j = 1; j <= 10; j++) {
        row.push(i * j);
      }
      table.push(row);
    }
    
    return table;
  }
  

  const table = multiplicationTable();
  console.log(table);




  function printValidPairs(number) {
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
        if (i < j) {
          console.log((${i}, ${j}));
        }
      }
    }
  }
  

  printValidPairs(3);
  S