import * as cats from "./index3.mjs";
const catSelector = document.getElementById("catBreed")
cats.catApi().then(furball => {
    console.log(furball)
    const furballArray = furball.data;
    furballArray.forEach(element => {
        // console.log(element)
        let catOptions = document.createElement("option");
        catOptions.setAttribute("value", `${element.breed_group}`);
        catOptions.textContent = `${element.breed_group}`;
        catSelector.appendChild(catOptions);
    });
});
// Event Listener to select the breed of cats
// console.log(catSecletor);
catSelector.addEventListener("change", loadCat);

async function loadCat() {
    const apiCatData = axios(

    );
    apiCatData.then((catDataobj)=> {
        let furballArray
    })
}