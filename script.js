const accessKey = "live_EiO9q0YpB8fImWcju9OuenAXLHNY91yxpi4G1nYfVSFa6Hu0bTaRGG2bJorXBMgB"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
// const showMore = document.getElementById('show-more-button') * decide on whether or not to add more button *

let inputData = "";
let page = 1;
let storedBreeds = [];

fetch(url, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        //filter to only include those with an `image` object
        data = data.filter(img => img.image?.url != null)

        async function searchImages() {
            inputData = inputEl.value;
            const url = `https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}`
            // or this url: `https://api.thecatapi.com/v1/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
            const response = await fetch(url)
            const data = await response.json()

            const results = data.results

            if (page === 1) {
                searchResults.innerHTML = ""
            }

            results.map((result) => {
                const imageWrapper = document.createElement('div')
                imageWrapper.classList.add("search-result")
                const image = document.createElement('img')
                image.src = result.url.small
                image.alt = result.alt_description
                const imageLink = document.createElement('a')
                imageLink.href = result.links.html
                imageLink.target = "_blank"
                imageLink.textContent = result.alt_description

                imageWrapper.appendChild(image);
                imageWrapper.appendChild(imageLink);
                imageWrapper.appendChild(imageWrapper);
            });

            page++
            if (page > 1) {
                showMore.style.display = "block"
            }
        }
        formEl.addEventListener("submit", (event) => {
            event.preventDefault()
            page = 1;
            searchImages
        });