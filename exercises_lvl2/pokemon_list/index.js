
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log(xhr.responseText)
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        //console.log(data)
        const pokemon = data.objects[0].pokemon
        //console.log(pokemon)
        showData(pokemon)
    }
}
  


function showData(pokemon){
//    let pokeNames = []
        for(let i = 0; i < pokemon.length; i++){
            console.log(pokemon[i].name)
        //pokemonNames.push(pokemon[i].name)
        //let names = pokemon[i].name
        const h2 = document.createElement('h2')
        h2.textContent = pokemon[i].name
        document.body.appendChild(h2)
    }
}

//how could you push these into an array to sort, capitalize, etc.???
