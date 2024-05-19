export const getData = async () => {
    let res = await fetch("http://localhost:5500/campusShop.json");
    let data = await res.json();
    return data
}

console.log(await getData())