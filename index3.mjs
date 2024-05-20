const apiKey = "live_EiO9q0YpB8fImWcju9OuenAXLHNY91yxpi4G1nYfVSFa6Hu0bTaRGG2bJorXBMgB";
axios.defaults.baseURL= "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"]= apiKey;

export async function catApi() {
    const data = await axios("/breeds");
    // console.log(data)
    return data;
}

