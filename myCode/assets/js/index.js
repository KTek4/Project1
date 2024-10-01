const searchItems = [
    { name: 'robin hood'},
    { name: 'harry potter'},
    { name: 'narnia'},
    { name: 'bluey'},
    { name: 'percy jackson'},
    { name: 'the hunger games'},
];

tempEl.addEventListener("event type", () => {
    
})

const searchInput = document.querySelector('.input');

searchInput.addEventListener("input", (event) => {
    let value = event.target.value;

    if ( value.trim() ) {

        renderList(searchItems.filter(book => {
            return book.name.includes(value);
        }))
    } else {
        clearList();
    }
})

const searchButton = document.getElementById('search');
const clearButton = document.getElementById('clear');

clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    clearList();
})

function renderList(results){
    for(const book of results){
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');

        const text = document.createTextNode(book.name);
        resultItem.appendChild(text);
        renderList.appendChild(resultItem);
    }
    if (results.length === 0) {
        noResults();
    }
}

function clearList() {
    list.innerHTML = " ";
}

function noResults () {
    const error = document.createElement(li);
    error.classList.add('error-message');

    const text = document.createTextNode('No results found.');
    error.append(text);
    list.append(error);
}