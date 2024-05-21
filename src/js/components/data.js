export const getDataHoodies = async () => {
    let res = await fetch("http://localhost:5501/abrigo");
    let data = await res.json();
    return data
}
export const getDataTShirts = async () => {
    let res = await fetch("http://localhost:5501/camiseta");
    let data = await res.json();
    return data
}
export const getDataJoggers = async () => {
    let res = await fetch("http://localhost:5501/pantalon");
    let data = await res.json();
    return data
}
export const getDataCarrito = async () => {
    let res = await fetch("http://localhost:5501/carrito");
    let data = await res.json();
    return data
}
export const getAllProducts = async () => {
    let dataHoodies = await getDataHoodies();
    let dataTShirts = await getDataTShirts();
    let dataJoggers = await getDataJoggers();
    let dataAll = [...dataHoodies, ...dataTShirts, ...dataJoggers];
    return dataAll
}
export const postProducts = async (product) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(product)
    }
    let res = await fetch("http://localhost:5501/carrito", config);
    let data = await res.json();
}
export const patchProducts = async (id, newAmount, newSubtotal) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({
            "cantidad": newAmount,
            "subtotal": newSubtotal
        })
    }
    let res = await fetch(`http://localhost:5501/carrito/${id}`, config);
}
export const putProducts = async (newCarrito) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify([newCarrito])
    }
    let res = await fetch("http://localhost:5501/carrito", config);
    return ("se ha limpiado")
}
export const deleteProducts = async (id) => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "DELETE"
    }
    let res = await fetch(`http://localhost:5501/carrito/${id}`, config);
}