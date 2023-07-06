function reverse(word){

    wordReverse = ""
    const vowels = ["a", "e", "i", "o", "u"]

    for (let i = word.length-1 ; i >= 0 ; --i){
      wordReverse += word[i]
    }
    
    return wordReverse
}

console.log(reverse("thisissomeword"))
