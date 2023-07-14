//1

const phrase = "Welcome to V School"

 lowCasePhrase = phrase.toLowerCase()
 upCasePhrase = phrase.toUpperCase()
 fullPhrase = upCasePhrase.concat(lowCasePhrase)

console.log(fullPhrase)

//2

function halfLengthRounded() {
const halfLength = phrase.length / 2

//return halfLength
//console.log(halfLength)
const halfRounded = Math.floor(halfLength)
return halfRounded
//console.log(halfLengthRounded)
}
console.log(halfLengthRounded('phrase'))


//3
 
const firstHalf = phrase.slice(0, 9)
const firstUpper = firstHalf.toUpperCase()
console.log(firstUpper)
const lastHalf = phrase.slice(9)
const lastLower = lastHalf.toLowerCase()
console.log(lastLower)
const upperLower = firstUpper.concat(lastLower)
console.log(upperLower)

//Optional challenge

const practice = "hEy frIeNds! pracTice pRactice praCtiCe!"

function capFirst() {
    const pracLow = practice.toLowerCase().split(" ");
    const result = pracLow.map(
        function(val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
        });
    return result.join(" ");
}
console.log(capFirst('practice'))