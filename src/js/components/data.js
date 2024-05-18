import { LitElement,html,css } from "lit";

export const getData = async () => {
    let res = await fetch("http://localhost:5501/");
    let data = await res.json();
    return data
    console.log(data)
}