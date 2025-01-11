function unionOfSets(sets) {
    // შევქმნათ ახალი Set
    let unionSet = new Set();
  
    // თითოეული ნაკრებისთვის შევიტანოთ მისი ელემენტები
    sets.forEach(set => {
      set.forEach(element => {
        unionSet.add(element);
      });
    });
  
    return unionSet;
  }
  
  // მაგალითი
  const result = unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]);
  console.log(result); // Set { 1, 2, 3, 4 }
  