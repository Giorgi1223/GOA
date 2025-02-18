function symmetricDifference(setA, setB) {
    let result = new Set();
  
    // პირველ ნაკრებში, მაგრამ არა მეორეში
    setA.forEach(element => {
      if (!setB.has(element)) {
        result.add(element);
      }
    });
  
    // მეორეში, მაგრამ არა პირველში
    setB.forEach(element => {
      if (!setA.has(element)) {
        result.add(element);
      }
    });
  
    return result;
  }
  
  // მაგალითი
  const result = symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5]));
  console.log(result); // Set { 1, 2, 4, 5 }
  