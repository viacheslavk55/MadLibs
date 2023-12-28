function generateMadLib() {
    let adjective = prompt('Enter an Adjective:')
    let verb = prompt('Enter a Verb:')
    let adverb = prompt('Enter an Adverb:')

    let story = `At the North Pole, the elves ${adverb} ${verb} around, accusing each other of hiding the ${adjective} gifts.`

    let madLibOutputDiv = document.getElementById('madLibOutput')

    madLibOutputDiv.innerHTML = `<p class='madlib'>${story}</p>`
}
