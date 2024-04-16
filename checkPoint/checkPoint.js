async function fetchProductsFromAPI(url) {
    try {
        const res = await fetch(url)
        const products = await res.json()

        const container = document.createElement('div')
        container.classList.add('container')

        // Creare una card che contiene immagine, titolo e prezzo per ogni prodotto
        products.forEach(product => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `<p>${product.title}</p>
                <img src=${product.image} class="imgProduct" alt="immagine prodotto"/>
                <p>Price: ${product.price}</p>
            `
            card.appendChild()
            container.appendChild(card)
            // console.log(product.title, product.image, product.price)
        })
        const upperDiv = document.getElementById('upper')
        upperDiv.appendChild(container)
         // Appendere le card al div .container
    } catch (e) {
        console.log('errore ', e)
    }
}

//fetchProductsFromAPI("https://fakestoreapi.com/products")