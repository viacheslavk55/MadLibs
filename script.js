let adjective = prompt('Enter an Adjective:')
let noun = prompt('Enter a Noun:')
let verb = prompt('Enter a Verb:')
let adverb = prompt('Enter an Adverb:')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}.`

let madLibOutputDiv = document.getElementById('madLibOutput')

madLibOutputDiv.innerHTML = `<p>${story}</p>`