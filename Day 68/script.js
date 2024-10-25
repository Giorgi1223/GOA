function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const charCount = {};
    
// დაითვალეთ თითოეული პერსონაჟის შემთხვევები
    for (let char of lowerText) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
// დაითვალეთ რამდენ სიმბოლოს აქვს დუბლიკატი
    let duplicates = 0;
    for (let count of Object.values(charCount)) {
      if (count > 1) {
        duplicates++;
      }
    }
    
    return duplicates;
  }
  