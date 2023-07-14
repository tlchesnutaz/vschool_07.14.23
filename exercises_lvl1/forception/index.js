var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
// split
var newAlpha = alphabet.split("")
console.log(newAlpha)

function forception(people, newAlpha) {
    let combineArr = []
    for(var i= 0; i < people.length; i++) {
        combineArr.push(people[i]+":")
        for(var j = 0; j < newAlpha.length; j++) {
            combineArr.push(newAlpha[j].toUpperCase())
        }
}return combineArr
}
console.log(forception(people, newAlpha))


