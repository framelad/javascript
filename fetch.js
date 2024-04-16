
const container = document.getElementById('container')


async function getData(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()

        const filteredData = data.filter(element => {
            if(element.completed)
                return element
        })


        filteredData.forEach(element => {
            const card = document.createElement('div')
            card.innerHTML =
                `<h3>ID: ${element.id}</h3>
                <p>${element.title}</p>
                `
            card.classList.add('card')
            container.appendChild(card)
        })
    } catch (e) {

    }
}

getData('https://jsonplaceholder.typicode.com/todos')
