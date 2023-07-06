function isPalindrome(word){

    wordReverse = ""
    const vowels = ["a", "e", "i", "o", "u"]

    for (let i = word.length-1 ; i >= 0 ; --i){
      wordReverse += word[i]
    }

    for (let i = 0 ; i < word.length/2 ; i++){
      if (word[i] === wordReverse[i]){
        flag = true
      } else {
        flag = false
        break;
      }
    }
    return flag
}

console.log(isPalindrome("uwu"))
