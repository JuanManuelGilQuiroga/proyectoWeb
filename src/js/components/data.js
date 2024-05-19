export const getData = async () => {
    let res = await fetch("http://localhost:5500/campusShop.json");
    let data = await res.json();
    return data
}
export const getDataHoodies = async () => {
    let res = await fetch("http://localhost:5500/campusShop.json");
    let data = await res.json();
    let dataHoodies = data["abrigo"]
    return dataHoodies
}
export const getDataTShirts = async () => {
    let res = await fetch("http://localhost:5500/campusShop.json");
    let data = await res.json();
    let dataTShirts = data["camiseta"]
    return dataTShirts
}
export const getDataJoggers = async () => {
    let res = await fetch("http://localhost:5500/campusShop.json");
    let data = await res.json();
    let dataJoggers = data["pantalon"]
    return dataJoggers
}
export const getAllProducts = async () => {
    let dataHoodies = await getDataHoodies();
    let dataTShirts = await getDataTShirts();
    let dataJoggers = await getDataJoggers();
    let dataAll = [...dataHoodies, ...dataTShirts, ...dataJoggers];
    return dataAll
}
console.log(await getAllProducts())