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


function mostFrequent(arr) {
  return arr;
}
console.log( mostFrequent(["a", "b", "a", "c"]));
console.log( mostFrequent([2, 3, 5, 2, 6]));
