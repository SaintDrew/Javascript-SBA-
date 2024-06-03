const accessKey = "live_EiO9q0YpB8fImWcju9OuenAXLHNY91yxpi4G1nYfVSFa6Hu0bTaRGG2bJorXBMgB"
const api_Key = "live_EiO9q0YpB8fImWcju9OuenAXLHNY91yxpi4G1nYfVSFa6Hu0bTaRGG2bJorXBMgB";

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input").value;
const searchResults = document.querySelector(".search-results")
const url = `https://api.thecatapi.com/v1/breeds`
// const showMore = document.getElementById('show-more-button') * decide on whether or not to add more button *


let formpage = document.getElementById("form1");
let inputData = "";
let page = 1;
let storedBreeds = [];
formpage.addEventListener('submit',async (e) => {
    e.preventDefault
    console.log(formpage.search.value);
});

fetch(url, {
    headers: {
        'x-api-key': api_Key
    }
})
    .then(async (response) => {
        const jsondata = await response.json()
    // })
    // .then((data) => {
        console.log( "this is data" ,jsondata );

        //filter to only include those with an `image` object
        data = data.filter(img => img.image?.url != null)

        storedBreeds = data;

        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');

            //skip any breeds that don't have an image
            if (!breed.image) continue

            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);

        }
        //show the first breed by default
        showBreedImage(0)
    })
    .catch(function (error) {
        console.log(error);
    });

function showBreedImage(index) {
    document.getElementById("breed_image").src = storedBreeds[index].image.url;

    document.getElementById("breed_json").textContent = storedBreeds[index].temperament


    document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
    document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}

async function searchImages() {
    inputData = inputEl.value;
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
    searchImages()
    console.log('button')
});

