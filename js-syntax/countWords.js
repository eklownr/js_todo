function count_words(str) {
    const words = str.split(' ');
    const wordCount = {};
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) +1;
    });
    const uniqueWords = words.filter((word, index) => words.indexOf(word) === index);
    const formattedWords = uniqueWords.map(word => {
        if (wordCount[word] > 1) {
          return `${word}(${wordCount[word]})`;
        }
        return word;
    });   
    console.log(formattedWords.join(' '))
}
count_words("hej hej hej på dej dej")


  function countWords(str) {
    // Steg 1: Dela upp strängen i en array av ord
    const words = str.split(' ');
    console.log('Steg 1 - Ordlista:', words); // ["hej", "hej", "på", "dej"]
  
    // Steg 2: Skapa ett objekt för att räkna varje ords förekomst
    const wordCount = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    console.log("test how many 'hej'", wordCount["hej"]);
    const res = Object.keys(wordCount).filter(word => wordCount[word] === 2);
    console.log("test print all words that has count of 2:", res);
    console.log('Steg 2 - Räkning:', wordCount); // { hej: 2, på: 1, dej: 1 }
  
    // Steg 3: Ta bort dubbletter från ordlistan
    const uniqueWords = words.filter((word, index) => words.indexOf(word) === index);
    console.log('Steg 3 - Unika ord:', uniqueWords); // ["hej", "på", "dej"]
  
    // Steg 4: Formatera varje ord med dess räkning
    const formattedWords = uniqueWords.map(word => {
        if (wordCount[word] > 1) {
          return `${word}(${wordCount[word]})`;
        }
        return word;
      });   

//    const formattedWords = uniqueWords.map(word => `${word}(${wordCount[word]})`);
    console.log('Steg 4 - Formaterade ord:', formattedWords); // ["hej(2)", "på(1)", "dej(1)"]
  
    // Steg 5: Slå ihop allt till en sträng
    const result = formattedWords.join(' ');
    console.log('Steg 5 - Slutresultat:', result); // "hej(2) på(1) dej(1)"
  
    return result;
  }
  //countWords("hej hej på dej dej");   


  /****************** 
  function countWords3(str) {
    const words = str.split(' ');
    const count = {};
  
    // Räkna förekomster
    words.forEach(word => {
      count[word] = (count[word] || 0) + 1;
      console.log("word:", count[word])
    });
  
    // Bygg resultat med räkning endast för upprepade ord
    return words
      .map((word, index) => {
        // Lägg till (2) osv endast första gången ordet förekommer om det finns fler än en gång
        return words.indexOf(word) === index && count[word] > 1
          ? `${word}(${count[word]})`
          : word;
      })
      .join(' ');
  }
  
  // Test
  console.log(countWords3("hej hej på dej dej")); // Output: hej(2) på dej dej 
  
  */

/*
function countWords2(str) {
    const words = str.split(' ');
    const wordCount = {};
  
    // Räkna förekomsten av varje ord
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    // Bygg resultatsträngen
    return words
      .filter((word, index) => words.indexOf(word) === index) // Ta bort dubbletter
      .map(word => `${word}(${wordCount[word]})`)
      .join(' ');
  }
  
  // Exempelanvändning
  console.log(countWords2("hej hej på dej")); // Output: hej(2) på(1) dej(1)   
  */