import * as cats from "./index3.mjs";
// const catBreed = 
// const catOptions = 
const catSelector = document.getElementById("catBreed")
cats.catApi().then(furball => {
    // console.log(furball)
    const furballArray = furball.data;
    // console.log(furballArray);
    furballArray.forEach(element => {
        console.log(element)
        let catOptions = document.createElement("option");
        catOptions.setAttribute("value", `${element.breed_group}`);
        catOptions.textContent = `${element.breed_group}`;
        catSelector.appendChild(catOptions);
    });
});
// Event Listener to select the breed of cats
// console.log(catSelector);
catSelector.addEventListener("change", loadCat);

async function loadCat() {
    const apiCatData = axios(

    );
    apiCatData.then((catDataobj)=> {
        let furballArray
    })
}