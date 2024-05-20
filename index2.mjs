import * as cats from "./index3.mjs";
cats.catApi().then(furball => {
    console.log(furball)
    const furballArray = furball.data;
    furballArray.forEach(element => {
        console.log(element)
    });
})
