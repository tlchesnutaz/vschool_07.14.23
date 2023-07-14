// write a function (oneWordOnly) that takes an array of strings, and 
// returns an array of just the strings with one word in them

const words = ["bird", "bird dog", "humming bird", "dog"]
function oneWordOnly(words){
    const oneWord = []
    for (i = 0; i < words.length; i++) {
            if (words[i].includes(" ")) {
            } else {  
                oneWord.push(words[i]) 
            } 
        }
        return oneWord 
}
   
    console.log(oneWordOnly(["bird", "bird dog", "humming bird", "dog"])) //=>["bird", "dog"]
    console.log(oneWordOnly(["house", "tiny mansion", "humming bird", "fish", "word"])) //=>["house", "fish", "word"]