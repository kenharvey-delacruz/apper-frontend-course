function convertToVowels(word){

    wordVowels = ""
    const vowels = ["a", "e", "i", "o", "u"]

    for (const letter of word){
      if (vowels.includes(letter)){
        wordVowels += letter;
      }
    }
    
    return wordVowels
}

console.log(convertToVowels("thisissomeword"))
