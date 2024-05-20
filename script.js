const accessKey = "live_EiO9q0YpB8fImWcju9OuenAXLHNY91yxpi4G1nYfVSFa6Hu0bTaRGG2bJorXBMgB"

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById('show-more-button')

let inputData = ""
let page = 1;

function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.thecatapi.com/v1/search/photos?page=${page}&query=$
    {inputData}&client_id=${accessKey}`
}