async function loadWord(word="Hello"){
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        const result = await response.json()
        console.log(result)

        // const meaningsArray = response.meanings;

        // Access the first (and only) object in the array
        const wordObject = result[0];

        // Access the phonetics array
        const phoneticsArray = wordObject.phonetics;

        // Loop through the phonetics array and log each phonetic
        phoneticsArray.forEach(phonetic => {
            //alert('Phonetic:', phonetic.text);
            const phon = document.createElement('p')
            phon.innerText = phonetic.text
            document.getElementById('container').appendChild(phon)

        });

        const meaningsArray = wordObject.meanings;

        meaningsArray.forEach(meaning => {
            console.log('Definition:', meaning.definitions[0].definition);
        });


    } catch (e) {
        console.log(`errore: ${e}`)
    }
}

loadWord()