const loadSneakers = (search) => {
    const url = `https://mmt.boostonamazon.com/api/v1/search-sneakers?searchKey= ${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySneakers(data.data))
}
const displaySneakers = sneakers => {
    const sneakersContainer = document.getElementById('sneakers-container');
    sneakersContainer.innerHTML = '';
    sneakers.forEach(sneaker => {
        console.log(sneaker)
        const sneakerDiv = document.createElement('div');
        sneakerDiv.classList.add('card');
        sneakerDiv.innerHTML = `
     <img src="${sneaker.image.image_url}" class="product-image" alt="..." >
<div class="card-body">
<h5 class="card-title">${sneaker.title}</h5>
<p class="product-info">${sneaker.description}</p>
`;
        sneakersContainer.appendChild(sneakerDiv);
    });

}
const searchSneaker = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value
    loadSneakers(searchText);
    searchField.value = '';
}

